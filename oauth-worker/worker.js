// Decap CMS OAuth proxy for GitHub, as a Cloudflare Worker.
//
// Implements the two endpoints Decap's "github" backend calls:
//   GET /auth      -> redirect the user to GitHub's authorize page
//   GET /callback  -> exchange the code for a token, hand it back to Decap
//
// Required environment variables (set as Worker secrets):
//   GITHUB_CLIENT_ID
//   GITHUB_CLIENT_SECRET

const GITHUB_AUTHORIZE = 'https://github.com/login/oauth/authorize';
const GITHUB_TOKEN = 'https://github.com/login/oauth/access_token';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/auth') {
      const redirectUri = `${url.origin}/callback`;
      const authUrl = new URL(GITHUB_AUTHORIZE);
      authUrl.searchParams.set('client_id', env.GITHUB_CLIENT_ID);
      authUrl.searchParams.set('redirect_uri', redirectUri);
      authUrl.searchParams.set('scope', url.searchParams.get('scope') || 'repo');
      authUrl.searchParams.set('state', crypto.randomUUID());
      return Response.redirect(authUrl.toString(), 302);
    }

    if (url.pathname === '/callback') {
      const code = url.searchParams.get('code');
      if (!code) {
        return new Response('Missing code', { status: 400 });
      }

      const tokenRes = await fetch(GITHUB_TOKEN, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          client_id: env.GITHUB_CLIENT_ID,
          client_secret: env.GITHUB_CLIENT_SECRET,
          code,
        }),
      });

      const data = await tokenRes.json();

      const result = data.access_token
        ? { token: data.access_token, provider: 'github' }
        : { error: data.error_description || 'Authentication failed' };

      const status = data.access_token ? 'success' : 'error';
      const payload = `authorization:github:${status}:${JSON.stringify(result)}`;

      // Decap's login popup listens for a postMessage from this window.
      const html = `<!DOCTYPE html><html><body><script>
        (function () {
          function send(e) {
            window.opener.postMessage(${JSON.stringify(payload)}, e.origin);
          }
          window.addEventListener('message', send, false);
          window.opener.postMessage('authorizing:github', '*');
        })();
      </script></body></html>`;

      return new Response(html, { headers: { 'Content-Type': 'text/html' } });
    }

    return new Response('Decap OAuth proxy. Use /auth to start.', { status: 200 });
  },
};

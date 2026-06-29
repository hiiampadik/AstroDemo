Project Overview
This is a lightweight, static website built with Astro and Decap CMS (Git-based CMS). The project is designed for a simple proof-of-concept deployment on GitHub Pages.

Objective
Generate the minimal boilerplate and configuration required to run the project locally and prepare it for static build (npm run build) with dynamic content coming from Markdown files managed via Decap CMS.

Technical Specifications
Framework: Astro (latest stable)

CMS: Decap CMS (administered via a static /admin route)

Styling: Minimal, clean vanilla CSS (no heavy utility frameworks, just a global layout reset and basic typography).

Output: Static Export (output: 'export') for GitHub Pages deployment.

Directory Structure to Generate
Plaintext
├── public/
│   └── admin/
│       ├── index.html        # Decap CMS Admin page
│       └── config.yml        # Decap CMS configuration
├── src/
│   ├── content/
│   │   └── config.ts         # Astro Content Collections schema
│   │   └── subpages/         # Markdown content directory
│   │       ├── example-1.md
│   │       └── example-2.md
│   ├── layouts/
│   │   └── Layout.astro      # Global layout wrapper
│   ├── pages/
│   │   ├── index.astro       # Homepage (List of subpages)
│   │   └── [slug].astro      # Dynamic subpage template
│   └── styles/
│       └── global.css        # Minimal CSS styling
├── astro.config.mjs          # Astro configuration (configured for static export)
├── package.json
└── tsconfig.json
Code Implementations to Generate
1. Configuration Files
astro.config.mjs
JavaScript
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'export',
  // Note: For GitHub Pages deployment, the site property should point to the repository URL later.
});
public/admin/config.yml
Configure Decap CMS to work with GitHub as the backend and map the subpages collection with the specified fields: Title, Subtitle, SVG Graphic, and Paragraph.

YAML
backend:
  name: github
  repo: owner/repo-name # Will be replaced by user
  branch: main

media_folder: "public/images"
public_folder: "/images"

collections:
  - name: "subpages"
    label: "Subpages"
    folder: "src/content/subpages"
    create: true
    slug: "{{slug}}"
    fields:
      - { label: "Title", name: "title", widget: "string" }
      - { label: "Subtitle", name: "subtitle", widget: "string" }
      - { label: "Graphic (SVG)", name: "graphic", widget: "file", file_extensions: ["svg"] }
      - { label: "Body Paragraph", name: "body", widget: "text" }
public/admin/index.html
HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Content Manager</title>
    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
  </head>
  <body>
    <script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>
  </body>
</html>
2. Content & Schema
src/content/config.ts
Define the Astro content collection schema matching the Decap CMS fields.

TypeScript
import { z, defineCollection } from 'astro:content';

const subpagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    graphic: z.string(), // Path to the SVG file
  }),
});

export const collections = {
  'subpages': subpagesCollection,
};
src/content/subpages/example-1.md (Generate code)
Create a mock Markdown file with required frontmatter parameters and an abstract paragraph body. Include a placeholder path for the graphic field.

src/content/subpages/example-2.md (Generate code)
Create a second mock Markdown file to verify dynamic routing works.

3. Layouts & Styles
src/styles/global.css
Provide minimal fallback CSS. Standard system sans-serif font stack, a container class maxed out at 800px, basic link styling, and simple formatting for images/SVGs to ensure responsiveness.

src/layouts/Layout.astro
A basic HTML5 boilerplate wrapper accepting title as a prop and rendering a global <slot />. Imports global.css.

4. Pages & Routing
src/pages/index.astro
Query all files from the subpages collection using getCollection('subpages').

Render a clean HTML page with a heading and an unordered list (<ul>) containing links to all existing subpages.

src/pages/[slug].astro
Implement getStaticPaths() to generate static routes for all collection entries.

Render a single subpage structure using the template layout:

<h1> Title

<h2> Subtitle

<img> Graphic rendering the SVG from frontmatter.

<p> The paragraph body.
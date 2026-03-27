# NowFreelance

A responsive, bilingual static website for tech services, "helping companies grow through automation and technology." Built with [Hugo](https://gohugo.io/).

## Features

- **Blazing Fast:** Powered by the Hugo Static Site Generator.
- **Multilingual Support:** Fully configured for both Spanish (`es-ES`) and English (`en-US`) audiences.
- **Theme:** Styled with the elegant and responsive [Ananke](https://github.com/theNewDynamic/gohugo-theme-ananke) theme.
- **Content:** Includes a Blog, Tools section, JavaScript demos, and Contact pages.
- **Responsive:** Mobile-first design that adapts to all screen sizes.

## Prerequisites

To run this project locally, you will need to have [Hugo](https://gohugo.io/installation/) installed on your machine. We recommend the "Extended" version of Hugo, which includes support for processing SASS/SCSS.

## Installation

1. **Clone the repository:**
   Since this project uses a Git submodule for the Hugo theme, make sure to clone it recursively:
   ```bash
   git clone --recursive <repository-url>
   cd nowfreelance
   ```

   *(If you already cloned the project without the `--recursive` flag, you can initialize the submodule by running: `git submodule update --init --recursive`)*

## Local Development

To start the local development server with live-reloading:

```bash
hugo server -D
```
The site will be available at `http://localhost:1313/`. By default, the Spanish version will serve at the root, and the English version will likely serve under `/en/`. The `-D` flag ensures that any draft files are also rendered during development.

## Building for Production

To generate the final static HTML files for deployment, you can use the configured npm script or run hugo directly:

```bash
npm run build
# OR
hugo
```

This will compile the project and create a `public/` directory containing all the optimized static assets, ready to be deployed to any hosting provider (e.g., GitHub Pages, Netlify, Vercel, Cloudflare Pages).

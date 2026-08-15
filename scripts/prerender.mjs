// Post-build step: server-render the app to static HTML inside dist/index.html
// so AI crawlers and simple fetchers (curl, ChatGPT, Claude) can read the full
// page content without executing JavaScript. The browser still boots the normal
// React app on top of it.

import { build } from "vite";
import { readFileSync, writeFileSync, rmSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { pathToFileURL } from "url";

const outDir = resolve("dist");
const ssrDir = resolve(".ssr-build");

async function main() {
  if (!existsSync(resolve(outDir, "index.html"))) {
    console.error("prerender: dist/index.html not found — run `vite build` first.");
    process.exit(1);
  }

  await build({
    logLevel: "warn",
    build: {
      ssr: resolve("src/entry-server.tsx"),
      outDir: ssrDir,
      emptyOutDir: true,
      rollupOptions: { output: { format: "esm", entryFileNames: "entry-server.mjs" } },
    },
  });

  const { render } = await import(pathToFileURL(resolve(ssrDir, "entry-server.mjs")).href);
  const { html, head } = render("/");

  const templatePath = resolve(outDir, "index.html");
  let template = readFileSync(templatePath, "utf-8");

  template = template.replace(
    /<div id="root"><\/div>/,
    `<div id="root">${html}</div>`,
  );

  if (head) {
    // Drop the static tags that Helmet re-declares, so the document keeps
    // exactly one title / description / canonical / og / twitter tag.
    const managed = [
      /\s*<title>[\s\S]*?<\/title>/,
      /\s*<meta name="description"[^>]*>/,
      /\s*<link rel="canonical"[^>]*>/,
      /\s*<meta property="og:type"[^>]*>/,
      /\s*<meta property="og:title"[^>]*>/,
      /\s*<meta property="og:description"[^>]*>/,
      /\s*<meta property="og:url"[^>]*>/,
      /\s*<meta property="og:image"(?!:)[^>]*>/,
      /\s*<meta name="twitter:card"[^>]*>/,
      /\s*<meta name="twitter:title"[^>]*>/,
      /\s*<meta name="twitter:description"[^>]*>/,
      /\s*<meta name="twitter:image"(?!:)[^>]*>/,
    ];
    for (const re of managed) template = template.replace(re, "");
    template = template.replace("</head>", `  ${head}\n  </head>`);
  }


  writeFileSync(templatePath, template);
  // SPA fallback for static hosts (GitHub Pages)
  writeFileSync(resolve(outDir, "404.html"), template);

  rmSync(ssrDir, { recursive: true, force: true });
  console.log(`prerender: injected ${html.length} chars of static HTML into dist/index.html`);
}

main().catch((err) => {
  console.error("prerender failed:", err);
  process.exit(1);
});

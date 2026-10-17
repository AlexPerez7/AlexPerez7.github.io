import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

// Sitemap generado en el build con todas las páginas públicas
export const GET: APIRoute = async ({ site }) => {
  const projects = await getCollection('proyectos');
  const pages: { path: string; lastmod?: Date }[] = [
    { path: '/' },
    { path: '/proyectos/' },
    { path: '/sobre-mi/' },
    ...projects.map((p) => ({ path: `/proyectos/${p.id}/`, lastmod: p.data.date })),
  ];

  const urls = pages
    .map(({ path, lastmod }) => {
      const loc = new URL(path, site).href;
      const mod = lastmod ? `<lastmod>${lastmod.toISOString().slice(0, 10)}</lastmod>` : '';
      return `  <url><loc>${loc}</loc>${mod}</url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};

import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { site } from '../../data/site';

// Feed RSS de proyectos, generado en el build. Sin dependencias: XML a mano.
const escapeXml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const GET: APIRoute = async ({ site: astroSite }) => {
  const base = astroSite ?? new URL('https://alexperez7.github.io');
  const projects = (await getCollection('proyectos')).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );

  const items = projects
    .map((project) => {
      const url = new URL(`/proyectos/${project.id}/`, base).href;
      return `    <item>
      <title>${escapeXml(project.data.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(project.data.description)}</description>
      <pubDate>${project.data.date.toUTCString()}</pubDate>
    </item>`;
    })
    .join('\n');

  const feedUrl = new URL('/proyectos/rss.xml', base).href;
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(`Proyectos de ${site.name}`)}</title>
    <link>${new URL('/proyectos/', base).href}</link>
    <description>${escapeXml(site.tagline)}</description>
    <language>es</language>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
};

import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection, type CollectionEntry } from 'astro:content';
import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { site } from '../../data/site';

// Imagen para redes sociales (1200×630) de cada proyecto, generada en el build
// con su color, título, descripción y tecnologías.

export const getStaticPaths = (async () => {
  const projects = await getCollection('proyectos');
  return projects.map((project) => ({ params: { id: project.id }, props: { project } }));
}) satisfies GetStaticPaths;

const require = createRequire(import.meta.url);
const font = (pkg: string, file: string) => readFile(require.resolve(`@fontsource/${pkg}/files/${file}`));
const fontsPromise = Promise.all([
  font('inter', 'inter-latin-400-normal.woff'),
  font('inter', 'inter-latin-800-normal.woff'),
  font('jetbrains-mono', 'jetbrains-mono-latin-700-normal.woff'),
]);

// Satori recibe un árbol tipo React; este helper evita depender de JSX
type Node = { type: string; props: Record<string, unknown> };
const h = (type: string, style: Record<string, unknown>, ...children: (Node | string)[]): Node => ({
  type,
  props: { style: { display: 'flex', ...style }, children },
});

export const GET: APIRoute = async ({ props }) => {
  const { title, description, tags, color } = (props.project as CollectionEntry<'proyectos'>).data;
  const [inter400, inter800, mono700] = await fontsPromise;

  const tree = h(
    'div',
    {
      // Medidas explícitas: con '100%' el padding se suma y la fila inferior queda fuera
      width: 1200,
      height: 630,
      boxSizing: 'border-box',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '72px 84px',
      background: '#0c0a09',
      backgroundImage: `radial-gradient(circle at 12% 18%, ${color}66, transparent 48%), radial-gradient(circle at 100% 100%, ${color}33, transparent 45%)`,
      color: '#f5f5f4',
      fontFamily: 'Inter',
    },
    h(
      'div',
      { alignItems: 'center', gap: 16, fontFamily: 'JetBrains Mono', fontSize: 28, fontWeight: 700 },
      h('span', { color }, '~$'),
      h('span', { color: '#d6d3d1' }, 'proyectos/'),
    ),
    h(
      'div',
      { flexDirection: 'column' },
      h('div', { fontSize: title.length > 26 ? 64 : 80, fontWeight: 800, letterSpacing: -2, lineHeight: 1.05 }, title),
      h(
        'div',
        { marginTop: 24, fontSize: 30, lineHeight: 1.4, color: '#a8a29e', maxWidth: 980 },
        description.length > 140 ? `${description.slice(0, 137).trimEnd()}…` : description,
      ),
    ),
    h(
      'div',
      { justifyContent: 'space-between', alignItems: 'center' },
      h(
        'div',
        { gap: 12 },
        ...tags.slice(0, 4).map((tag) =>
          h(
            'span',
            {
              padding: '8px 18px',
              borderRadius: 999,
              fontSize: 22,
              color: '#f5f5f4',
              background: `${color}33`,
              border: `2px solid ${color}88`,
            },
            tag,
          ),
        ),
      ),
      h('span', { fontSize: 24, color: '#a8a29e' }, site.name),
    ),
  );

  const svg = await satori(tree as Parameters<typeof satori>[0], {
    width: 1200,
    height: 630,
    fonts: [
      { name: 'Inter', data: inter400, weight: 400, style: 'normal' },
      { name: 'Inter', data: inter800, weight: 800, style: 'normal' },
      { name: 'JetBrains Mono', data: mono700, weight: 700, style: 'normal' },
    ],
  });
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng();
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};

import { getCollection } from 'astro:content';

/**
 * Tecnologías que tienen filtro en /proyectos: las presentes en al menos 2 proyectos,
 * de más a menos usadas. Las etiquetas de otras páginas enlazan solo a estas.
 */
export async function getFilterTags() {
  const counts = new Map<string, number>();
  for (const p of await getCollection('proyectos')) {
    for (const t of p.data.tags) counts.set(t, (counts.get(t) ?? 0) + 1);
  }
  return new Map(
    [...counts].filter(([, n]) => n >= 2).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])),
  );
}

/** URL del listado filtrado por una etiqueta, o undefined si esa etiqueta no tiene filtro. */
export function tagHref(filters: Map<string, number>, name: string) {
  const tag = [...filters.keys()].find((t) => t.toLowerCase() === name.toLowerCase());
  return tag ? `/proyectos/?tag=${encodeURIComponent(tag)}` : undefined;
}

# alexperez7.github.io

Portafolio personal de **Alex Pérez Argomedo**, consultor en ciberseguridad (PAM / CyberArk) e
ingeniero en informática.

**[Ver el sitio »](https://alexperez7.github.io)**

Sitio estático hecho con [Astro](https://astro.build), sin frameworks de UI: componentes `.astro`,
CSS propio y un poco de JavaScript para las interacciones.

## Qué tiene

- Proyectos como colección de contenido en Markdown, con filtros por tecnología, portadas
  (generadas o con capturas reales) y navegación anterior/siguiente.
- Modo claro/oscuro, transiciones entre páginas y animaciones que respetan
  `prefers-reduced-motion`.
- Paleta de búsqueda (`Ctrl+K` o `/`) para saltar a cualquier proyecto o página.
- CV imprimible en "Sobre mí".
- SEO: Open Graph con una imagen generada por proyecto, datos estructurados, sitemap y 404.

## Desarrollo

Requiere Node.js 22.12 o superior.

```sh
npm install
npm run dev          # servidor local en http://localhost:4321
npm run check        # comprueba tipos y enlaces (astro check)
npm run format       # formatea el código con Prettier
npm run format:check # verifica que el código esté formateado (para CI)
npm run build        # genera el sitio en dist/
npm run preview      # sirve dist/ localmente
```

El código (`src/**`) se formatea con Prettier; los documentos escritos a mano (`*.md`) quedan
fuera. Cada push a `main` se publica automáticamente en GitHub Pages
(`.github/workflows/deploy.yml`). Antes de compilar, el despliegue corre `npm run check` y
`npm run format:check`; si algo falla, el build no sigue.

## Dónde editar

| Qué                                    | Dónde                              |
| -------------------------------------- | ---------------------------------- |
| Nombre, roles, contacto y aptitudes    | `src/data/site.ts`                 |
| Experiencia, formación, certificaciones | `src/data/cv.ts`                   |
| Proyectos                              | `src/content/proyectos/*.md`       |
| Capturas de portada                    | `src/assets/covers/`               |
| Esquema de los proyectos               | `src/content.config.ts`            |
| Ideas y mejoras pendientes             | `plan.md`                          |

### Agregar un proyecto

Crea `src/content/proyectos/<id>.md`:

```md
---
title: Mi proyecto
description: Una línea que explique qué hace.
date: 2026-10-11
tags: [TypeScript, React]
repo: https://github.com/AlexPerez7/mi-proyecto
demo: https://...            # opcional
featured: true               # opcional: aparece en la portada
color: '#0891b2'             # color de la portada generada
icon: '🚀'                   # ícono de la portada generada
cover: ../../assets/covers/mi-proyecto.png  # opcional: captura real
---

Contenido en Markdown para la página del proyecto.
```

# Portafolio de Alex Pérez Argomedo

Portafolio personal de **Alex Pérez Argomedo**, consultor en ciberseguridad (PAM / CyberArk) e
ingeniero en informática, publicado en **[alexperez7.github.io](https://alexperez7.github.io)**.

[![Deploy to GitHub Pages](https://github.com/AlexPerez7/AlexPerez7.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/AlexPerez7/AlexPerez7.github.io/actions/workflows/deploy.yml)

Sitio estático hecho con [Astro](https://astro.build) y componentes `.astro`, sin frameworks de
UI: CSS propio y JavaScript puntual para las interacciones. Cada push a `main` se publica en
GitHub Pages.

## Características

- **Proyectos** como colección de contenido en Markdown, con filtros por tecnología, portadas
  (generadas o con capturas reales) y navegación anterior/siguiente.
- **Búsqueda** en una paleta de comandos (`Ctrl+K` / `⌘K` o `/`) que ignora mayúsculas y tildes.
- **Tema** claro y oscuro con revelado circular, y transiciones entre páginas con la View
  Transitions API.
- **CV imprimible** en «Sobre mí», con su propia hoja de estilos de impresión.
- **SEO y accesibilidad:** Open Graph con una imagen generada por proyecto, datos estructurados
  (`Person`, `SoftwareSourceCode`, `BreadcrumbList`), sitemap, 404 propia, enlace «saltar al
  contenido» y áreas táctiles de al menos 44 px.
- **Rendimiento:** imágenes optimizadas en el build y sin JavaScript de framework.

Las animaciones respetan `prefers-reduced-motion`, con una excepción deliberada: el tecleo del
nombre y la rotación de roles del hero se muestran siempre (ver `plan.md`).

## Stack

- [Astro](https://astro.build) 7 con salida estática.
- CSS propio con variables y `color-mix()`; tipografía del sistema.
- [satori](https://github.com/vercel/satori) + [@resvg/resvg-js](https://github.com/yisibl/resvg-js)
  para las imágenes Open Graph por proyecto.
- TypeScript con [`astro check`](https://docs.astro.build/en/guides/typescript/) y
  [Prettier](https://prettier.io) con `prettier-plugin-astro`.

## Desarrollo

Requiere **Node.js 22.12 o superior**.

```sh
npm install
npm run dev          # servidor local en http://localhost:4321
npm run build        # genera el sitio estático en dist/
npm run preview      # sirve dist/ localmente
npm run check        # revisa tipos y diagnósticos (astro check)
npm run format       # formatea el código con Prettier
npm run format:check # verifica el formato (lo usa el CI)
```

## Estructura

```
src/
  components/     componentes reutilizables (tarjetas, paleta de búsqueda, tema, …)
  content/
    proyectos/    un .md por proyecto
  data/           site.ts (datos personales) y cv.ts (experiencia y formación)
  layouts/        Base.astro: <head>, cabecera, pie y scripts comunes
  lib/            utilidades (etiquetas de los filtros)
  pages/          rutas: /, /proyectos, /proyectos/[id], /sobre-mi, 404 e imágenes OG
  styles/         global.css
public/           lo que se sirve tal cual (favicon, avatar, og.png, robots.txt)
```

## Dónde editar

| Qué                                     | Dónde                        |
| --------------------------------------- | ---------------------------- |
| Nombre, roles, contacto y aptitudes     | `src/data/site.ts`           |
| Experiencia, formación y certificaciones | `src/data/cv.ts`            |
| Proyectos                               | `src/content/proyectos/*.md` |
| Capturas de portada                     | `src/assets/covers/`         |
| Esquema de los proyectos                | `src/content.config.ts`      |
| Ideas y mejoras pendientes              | `plan.md`                    |

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
featured: true               # opcional: aparece destacado en la portada
color: '#0891b2'             # color de la portada generada
icon: '🚀'                   # ícono de la portada generada
cover: ../../assets/covers/mi-proyecto.png  # opcional: captura real
---

Contenido en Markdown para la página del proyecto.
```

El listado, los filtros, la búsqueda y la imagen Open Graph se generan solos a partir del archivo.
El resto de páginas enlazan a los proyectos automáticamente; si borras uno, revisa que no quede
ningún enlace suelto apuntándolo (por ejemplo, desde `src/data/cv.ts`).

## Despliegue

Cada push a `main` dispara `.github/workflows/deploy.yml`: primero corre `npm run format:check` y
`npm run check` (si algo falla, el despliegue se detiene) y después compila con Astro y publica en
GitHub Pages con las acciones oficiales. El flujo también se puede lanzar a mano desde la pestaña
*Actions*.

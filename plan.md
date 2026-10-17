# Plan de mejoras del portafolio

Documento vivo con las ideas de mejora del sitio. Se lee al empezar cada ronda de trabajo y se
actualiza al terminarla, igual que `CLAUDE.md`.

## Cómo usar este archivo

- **Agregar una idea:** escríbela en [Ideas](#ideas) con una línea que diga qué y por qué. No hace
  falta que esté pulida.
- **Priorizar:** mueve la idea a [Próximas](#próximas) cuando decidamos hacerla.
- **Al terminar:** márcala con `[x]`, muévela a [Hecho](#hecho) con la fecha y el commit.
- **Descartar:** muévela a [Descartadas](#descartadas) con el motivo, para no volver a proponerla.
- Etiquetas: `[necesita a Alex]` cuando falta algo que solo tú puedes dar (contenido, cuentas,
  imágenes); `[autónoma]` cuando se puede hacer sin intervención.

## Reglas del proyecto

- Los cambios se suben directamente a `main` (el despliegue a GitHub Pages es automático).
- Textos en español neutral, sin modismos ni voseo.
- Antes de subir: `npm run build` sin errores y revisión visual en móvil (390 px) y escritorio,
  en modo claro y oscuro.
- Animaciones con respeto a `prefers-reduced-motion`; áreas táctiles de al menos 44 px.
- Sin dependencias nuevas salvo que aporten algo que no se pueda hacer razonablemente a mano.
- Los datos personales se editan en `src/data/site.ts` y `src/data/cv.ts`; los proyectos en
  `src/content/proyectos/*.md`.

## Próximas

- [ ] Formulario de contacto (Formspree u otro servicio sin backend). `[necesita a Alex]`
  Falta crear la cuenta y pasar el ID del formulario.
- [ ] Sección de notas técnicas sobre PAM / CyberArk, con su propia colección de contenido,
  RSS y etiquetas. `[necesita a Alex]` La estructura es autónoma; los artículos, no.
- [ ] Capturas reales en las portadas del resto de proyectos (PAM Web Console ya tiene).
  `[necesita a Alex]` Las demos públicas no sirven tal cual: Gastify muestra solo el login,
  AutoPedia está sin modelos cargados y Shelf Life abre en la bienvenida. Hacen falta capturas
  con datos o cargar datos de ejemplo en las demos.

## Ideas

- Versión en inglés del sitio (i18n de Astro) para postular a empresas de fuera. `[autónoma]`
  Requiere revisar las traducciones contigo.
- Línea de tiempo visual de certificaciones con fechas y enlaces de verificación (Credly u
  otros). `[necesita a Alex]`
- Estadísticas de GitHub (repos, lenguajes) generadas en el build. `[autónoma]`
- Analítica respetuosa de la privacidad (Plausible, Umami o GoatCounter). `[necesita a Alex]`

### Revisión de código y UX (2026-10-17, segunda ronda)

- Pulido SEO: datos estructurados `BreadcrumbList` (Inicio › Proyectos › Proyecto), `keywords`
  y un `og:image:alt` específico por proyecto (hoy es genérico con el nombre y el cargo).
  `[autónoma]`
- Índice de secciones (TOC) en las páginas de proyecto, que ya tienen varios `##`. `[autónoma]`
- Botón para copiar el enlace del proyecto (o compartir con `navigator.share` en móvil).
  `[autónoma]`
- Feed RSS de proyectos (`/proyectos/rss.xml`), reutilizable cuando existan las notas técnicas.
  `[autónoma]`
- Mantenimiento: Dependabot para npm y GitHub Actions, y un `.editorconfig` para el estilo entre
  editores. `[autónoma]`

### Revisión de diseño y UX (2026-10-11)

- Capturas enmarcadas: mostrar la captura como "ventana" sobre el degradado del color del
  proyecto, y atenuarla en modo oscuro. Hoy la de PAM es un bloque blanco entre tarjetas oscuras
  y a ese tamaño no se lee. `[necesita a Alex]` Se hará junto con las capturas del resto de
  proyectos.

## Hecho

| Fecha      | Mejora                                                                                       | Commit    |
| ---------- | -------------------------------------------------------------------------------------------- | --------- |
| 2026-10-10 | Portafolio inicial con proyectos, animaciones y despliegue a GitHub Pages                    | `79246f8` |
| 2026-10-10 | Experiencia, formación y certificaciones desde LinkedIn                                      | `3c1f685` |
| 2026-10-10 | Mejoras móviles: header fijo, áreas táctiles, safe areas, `theme-color`                      | `639706e` |
| 2026-10-10 | Selector de modo claro/oscuro con revelado circular                                          | `1e5932b` |
| 2026-10-10 | Nombre con efecto de tecleo y resplandor en el hero                                          | `60db935` |
| 2026-10-10 | Roles rotativos, filtros por tecnología, portadas de proyectos, botón copiar email           | `d68e9ce` |
| 2026-10-10 | Roles con fundido cuando se pide reducir movimiento                                          | `c910e90` |
| 2026-10-10 | SEO: Open Graph, datos estructurados, sitemap, robots.txt, 404, saltar al contenido, anterior/siguiente | `8a70dae` |
| 2026-10-10 | Imagen social por proyecto, CV imprimible, llamada a contacto, foto optimizada               | `5e220c2` |
| 2026-10-11 | Proyecto PAM Web Console como primer destacado; AutoPedia deja de ser destacado             | `9481f30` |
| 2026-10-11 | Rediseño de escritorio y UX: proyecto y "Sobre mí" en dos columnas con panel fijo, foto grande en el hero, etiquetas que enlazan a los filtros, filtros deslizables en móvil, indicador "Demo", tecleo del nombre solo en la primera visita, botón "Buscar Ctrl K", búsqueda sin animación, footer alineado | `91d02d2` |
| 2026-10-11 | Portada con captura real de PAM Web Console; README propio; búsqueda con `Ctrl+K` / `/`; Lighthouse 100 en las 4 categorías (orden de encabezados y nombre accesible del logo) | `e60dafb` |
| 2026-10-17 | Verificación de tipos (`astro check`) y workflow que compila antes de desplegar; se limpiaron los diagnósticos previos (tipado del sitemap, `@types/node`, `z.url()`) | `aeba8a5` |
| 2026-10-17 | Avatar propio en los datos estructurados, `twitter:image`, fecha del proyecto con `es-CL` y aviso `<noscript>` para quien navega sin JavaScript | `0d21960` |
| 2026-10-17 | Precarga del menú, aptitudes en la paleta de búsqueda y roles del hero fijos con movimiento reducido | `42e416d` |
| 2026-10-17 | Formato del código con Prettier (`prettier-plugin-astro`, solo `src/**`) y `format:check` en el workflow de despliegue | `1dda2bc` |
| 2026-10-17 | Datos estructurados `SoftwareSourceCode` por proyecto, búsqueda accesible en móvil y repaso de Lighthouse (100 en las 4 categorías en inicio, listado, proyecto y "Sobre mí") | `f7cbf79` |

## Descartadas

_Ninguna por ahora._

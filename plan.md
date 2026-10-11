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
- [ ] Capturas reales en las portadas de los proyectos (campo `cover` ya soportado).
  `[necesita a Alex]`

## Ideas

- Revisión de rendimiento y accesibilidad con Lighthouse; corregir lo que aparezca. `[autónoma]`
- Versión en inglés del sitio (i18n de Astro) para postular a empresas de fuera. `[autónoma]`
  Requiere revisar las traducciones contigo.
- Búsqueda o atajo de teclado (`/` o `Ctrl+K`) para saltar entre proyectos. `[autónoma]`
- Línea de tiempo visual de certificaciones con fechas y enlaces de verificación (Credly u
  otros). `[necesita a Alex]`
- Estadísticas de GitHub (repos, lenguajes) generadas en el build. `[autónoma]`
- Analítica respetuosa de la privacidad (Plausible, Umami o GoatCounter). `[necesita a Alex]`
- Reemplazar el README del starter de Astro por uno propio del portafolio. `[autónoma]`

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

## Descartadas

_Ninguna por ahora._

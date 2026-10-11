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
- Revisar Lighthouse de nuevo cuando se agreguen secciones o dependencias. `[autónoma]`
- Ofrecer la búsqueda en móvil (p. ej. un ítem en el menú), si el sitio crece. `[autónoma]`

### Revisión de diseño y UX (2026-10-11)

- Capturas enmarcadas: mostrar la captura como "ventana" sobre el degradado del color del
  proyecto, y atenuarla en modo oscuro. Hoy la de PAM es un bloque blanco entre tarjetas oscuras
  y a ese tamaño no se lee. `[autónoma]`
- Página de proyecto en dos columnas en escritorio: contenido + panel lateral fijo con fecha,
  stack, demo y código. Hoy la columna de 68ch deja vacía la mitad derecha. `[autónoma]`
- "Sobre mí" en dos columnas: foto, Descargar CV, contacto e idiomas en un panel lateral; la foto
  no aparece en esta página. `[autónoma]`
- Hero en escritorio: foto grande a la derecha en vez de encima del saludo, para equilibrar la
  mitad derecha vacía. `[autónoma]`
- Etiquetas que llevan a algo: las tecnologías de la página de proyecto y de "Aptitudes" enlazan
  a `/proyectos/?tag=X` cuando hay proyectos con esa etiqueta. `[autónoma]`
- Filtros en móvil como una fila con scroll horizontal (hoy ocupan 3 líneas). `[autónoma]`
- Indicador "Demo" en las tarjetas de proyectos que tienen demo pública. `[autónoma]`
- Efecto de tecleo del nombre solo en la primera visita de la sesión; en las siguientes, el
  nombre aparece directo. `[autónoma]`
- Botón de búsqueda con la pista `Ctrl K` visible en escritorio, para que se descubra el atajo.
  `[autónoma]`
- Quitar la animación de apertura de la búsqueda: se abre con teclado y muchas veces seguidas,
  y la animación la hace sentir lenta. `[autónoma]`
- Línea del footer alineada con el contenido (hoy sobresale 24 px a cada lado). `[autónoma]`

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
| 2026-10-11 | Portada con captura real de PAM Web Console; README propio; búsqueda con `Ctrl+K` / `/`; Lighthouse 100 en las 4 categorías (orden de encabezados y nombre accesible del logo) | `e60dafb` |

## Descartadas

_Ninguna por ahora._

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
  y a ese tamaño no se lee. `[necesita a Alex]` Se hará junto con las capturas del resto de
  proyectos.

### Revisión de código y calidad (2026-10-17)

- Verificación de tipos y CI de comprobación: no hay script `astro check` ni un workflow que
  compile antes de desplegar, así que un error de tipo llega a `main` sin freno. `[autónoma]`
- Datos estructurados: el `image` del `personSchema` apunta al avatar remoto de GitHub en vez de
  a una imagen propia; conviene usar una URL local para no depender de un servicio externo.
  `[autónoma]`
- Añadir `twitter:image` (y `twitter:image:alt` por proyecto) para controlar cómo se ve el enlace
  al compartir en X y WhatsApp. `[autónoma]`
- Prettier con `prettier-plugin-astro`: sin formateador no hay red de seguridad para el estilo,
  que hoy se mantiene a mano. Solo afecta al desarrollo, no al sitio. `[autónoma]`
- Precarga (prefetch) de las páginas del menú para que el cambio de sección con las transiciones
  nativas sea instantáneo. `[autónoma]`
- Incluir las aptitudes de `site.skills` en la paleta de búsqueda, enlazando a
  `/proyectos/?tag=…`, para encontrar una tecnología desde `Ctrl+K`. `[autónoma]`
- `RotatingText` con "reducir movimiento": hoy mantiene un fundido en bucle infinito; se puede
  dejar la primera frase fija, como ya hacen `TypedText` y el resto de efectos. `[autónoma]`
- Fecha del proyecto con `es-CL` en vez de `es-ES`, para ser coherente con el español neutral y
  el `og:locale` del sitio. `[autónoma]`
- `<noscript>` que aclare que la búsqueda necesita JavaScript, para quien lo desactive.
  `[autónoma]`

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

## Descartadas

_Ninguna por ahora._

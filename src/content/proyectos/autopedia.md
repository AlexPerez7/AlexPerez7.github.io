---
title: AutoPedia
description: Enciclopedia web de autos con marcas, modelos, fichas técnicas, búsqueda, favoritos y panel de administración.
date: 2026-08-16
tags: [Next.js, TypeScript, Prisma, PostgreSQL]
repo: https://github.com/AlexPerez7/AutoPedia
demo: https://auto-pedia-self.vercel.app
color: '#3b82f6'
icon: '🚗'
---

## De Django a un stack moderno

Reescritura completa del proyecto original (Django + SQLite + Bootstrap):

- **Next.js 16** (App Router) con **React 19** y **TypeScript**.
- **Tailwind CSS** y **shadcn/ui**, con modo claro y oscuro.
- **Prisma** sobre **PostgreSQL** en Neon.
- **Auth.js** con roles de usuario y administrador.
- **Zod** para validación y **Server Actions** para las mutaciones, sin una API REST intermedia.
- **Vercel Blob** para las imágenes subidas desde el panel de administración.

Los datos del sitio original se migraron con un script de seed.

---
title: Registro de horas en Odoo
description: Formulario web instalable que registra horas de trabajo directamente en Odoo, sin pasar por Excel.
date: 2026-07-08
tags: [JavaScript, Node.js, Odoo, Supabase]
repo: https://github.com/AlexPerez7/subir_horas
color: '#8b5cf6'
icon: '⏱️'
---

## El problema

Registrar horas implicaba anotarlas en Excel y luego copiarlas una por una a la tarjeta correspondiente en Odoo.

## La solución

- Frontend estático publicado en **GitHub Pages** e instalable como PWA.
- Backend propio desplegado en **Render.com** que se comunica con la API JSON-RPC de Odoo.
- Cada persona entra con su usuario y el backend resuelve automáticamente qué tarjeta le corresponde.
- Persistencia en **Supabase** y CI para los despliegues.

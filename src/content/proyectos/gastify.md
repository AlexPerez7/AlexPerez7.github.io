---
title: Gastify
description: Gestor de gastos personal que importa cartolas bancarias, categoriza movimientos y concilia el saldo.
date: 2026-07-31
tags: [React, Vite, Supabase, PWA]
repo: https://github.com/AlexPerez7/gastify
demo: https://alexperez7.github.io/gastify/
featured: true
color: '#10b981'
icon: '💸'
---

## Qué hace

- Importa el `.xls` del banco o la cartola mensual en `.pdf`, detecta duplicados entre ambos formatos y concilia el saldo automáticamente.
- Carga manual de gastos con formato CLP en vivo, atajos "Hoy/Ayer" y sugerencias de movimientos frecuentes.
- Lista agrupada por día, con gestos en móvil (deslizar para editar o borrar, mantener para seleccionar) y edición en línea en escritorio.
- Acciones masivas y borrado con opción de deshacer.

## Stack

PWA en **React + Vite**. Los datos viven en **Supabase** (Postgres, Auth y Row Level Security), así que cada usuario ve solo lo suyo y puede entrar desde cualquier dispositivo.

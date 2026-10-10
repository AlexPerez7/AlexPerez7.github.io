---
title: idiradocs-mcp
description: Servidor MCP que da a Claude acceso a la documentación oficial de CyberArk para responder citando fuentes reales.
date: 2026-08-07
tags: [TypeScript, MCP, IA]
repo: https://github.com/AlexPerez7/idiradocs-mcp
---

## Por qué existe

Preguntarle a un LLM sobre productos específicos de CyberArk (PAM, CPM, PSM...) sin darle la documentación real tiene un riesgo alto de respuestas plausibles pero incorrectas.

## Cómo funciona

El servidor expone dos herramientas: **buscar** en la documentación y **leer** una página concreta, siempre citando la fuente.

- Sin bases de datos vectoriales, sin embeddings y sin APIs de pago.
- La búsqueda corre sobre un índice local generado por un crawler propio.
- La lectura de páginas se hace en vivo contra el sitio oficial.

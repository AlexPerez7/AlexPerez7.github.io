---
title: PAM Web Console
description: Consola web multi-tenant para operar CyberArk Privilege Cloud, con control de acceso por rol, doble aprobación y auditoría con hash encadenado.
date: 2026-10-11
tags: [Python, FastAPI, React, TypeScript, PostgreSQL, Docker]
repo: https://github.com/AlexPerez7/pam-web-console
demo: https://alexperez7.github.io/pam-web-console/
featured: true
color: '#0891b2'
icon: '🛡️'
cover: ../../assets/covers/pam-web-console.png
---

## El problema

La consola nativa de CyberArk es una por tenant: para operar a varios clientes hay que entrar a cada uno por separado, y las tareas repetitivas se hacen de a una. Además, como toda acción se ejecuta con el service account del tenant, CyberArk no sabe qué persona hizo cada cambio.

PAM Web Console junta todos los tenants en un solo panel, con flujos pensados para lo repetitivo y un registro de auditoría propio, inmutable y atribuido al operador real. Es un proyecto usado en producción por el equipo PAM de un MSP; esta versión pública usa datos ficticios e incluye un modo demo.

## Qué hace

- **Inventario en vivo** de cuentas, safes, plataformas, sesiones y componentes, con búsqueda cross-tenant y export CSV/PDF.
- **Dashboards** de compliance cruzado con la política de rotación, errores del CPM y salud de componentes de todos los tenants.
- **Operación en lote:** edición masiva de cuentas y alta desde CSV o pegando el bloque del ticket.
- **Sesiones y grabaciones** de PSM reproducibles en el navegador, con un decodificador propio del códec.
- **Reportes y alertas:** catálogo exportable a Excel, sync nocturno del inventario y alertas hacia Microsoft Teams.

## Seguridad primero

La herramienta puede borrar la cuenta privilegiada de un cliente en producción, así que todo el diseño gira en torno a contener ese impacto:

- RBAC deny-by-default por tenant y TOTP obligatorio.
- Dry-run con diff y motivo antes de cualquier escritura.
- Aprobación de un segundo operador para lo destructivo.
- Audit log append-only con hash encadenado, protegido por un trigger de Postgres.
- CI con gitleaks, pip-audit, npm audit y axe-core (0 violaciones WCAG 2.1 AA).

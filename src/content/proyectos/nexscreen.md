---
title: NexScreen
description: Convierte tu tablet o teléfono Android en un segundo monitor para Windows, por USB o WiFi, con soporte táctil y de lápiz.
date: 2026-10-14
tags: [C#, .NET, Kotlin, Android, Windows]
repo: https://github.com/AlexPerez7/NexScreen
featured: true
color: '#3b82f6'
icon: '🖥️'
---

## El problema

Windows no ve tu tablet como una pantalla más, y las soluciones típicas para lograrlo piden instalar controladores y apps por separado, acumulan retraso o pierden la conexión a medio camino.

NexScreen hace que Windows vea tu tablet (o tu teléfono) como **una pantalla más**: arrastras ventanas hacia ella, la usas con los dedos o con el lápiz y la desenchufas sin dejar ventanas perdidas. Sin cuentas, sin servidor y sin configuración: conectas la tablet y funciona.

## Qué hace

- **Un monitor real:** añade una pantalla virtual con la resolución y la frecuencia nativas del dispositivo (60, 90 o 120 Hz), sin la zona de la cámara en teléfonos y con la escala de Windows elegida según su pantalla. Se coloca a la izquierda, derecha, arriba o abajo, como cualquier monitor, y también puede duplicar uno existente.
- **Táctil y lápiz:** un toque es un clic y dos dedos hacen scroll y zoom. El S Pen llega a Windows como un lápiz real: presión, inclinación, botón lateral y rechazo de la palma.
- **USB sin configuración:** al conectar la tablet, NexScreen instala la app, la abre y se conecta; también la actualiza cuando hay una versión nueva.
- **WiFi cifrado:** la tablet encuentra el PC en la red, el tráfico va cifrado con TLS y cada dispositivo se empareja una vez con un código de 6 dígitos.
- **Baja latencia:** pipeline de captura propia, sin ffmpeg: Desktop Duplication, conversión de color en GPU y H.264 por hardware (NVENC, Quick Sync o AMF), con decodificación por hardware en el dispositivo. Mantiene los 90 fps de la tablet de desarrollo y hasta 120 si la pantalla lo permite; ffmpeg queda como respaldo.
- **Se adapta a la red:** si el WiFi se congestiona baja la calidad en vez de acumular retraso, y se recupera solo. Si la imagen llega corrupta, pide un frame completo y se recompone en menos de un segundo.
- **Se mantiene solo:** icono de bandeja, inicio con Windows y actualizaciones automáticas desde GitHub (se pueden desactivar).

## Cómo funciona

El host de Windows (**C# / .NET 8**) captura el escritorio y lo codifica; la app Android (**Kotlin**) decodifica, dibuja y devuelve el tacto y el lápiz como puntero. Al conectar, añade un monitor virtual con la resolución nativa (CCD API de Windows) y lo quita al desconectar.

- Por USB, el PC levanta un túnel `adb reverse`; por WiFi, la tablet encuentra el PC con un broadcast UDP.
- Si Windows interrumpe la captura (reordenar pantallas, UAC), se reinicia sin cortar la conexión.
- El instalador (Inno Setup) muestra qué cambia en el sistema antes de instalar, y la única conexión a internet es la comprobación opcional de actualizaciones.

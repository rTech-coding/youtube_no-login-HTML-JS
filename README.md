# YouTube Sin Cuenta

Esta es una extensión de Google Chrome diseñada para permitir a los usuarios acceder a YouTube de manera aislada, ideal para alumnos que tienen restricción de YouTube por Google Workspace facilitando una experiencia de navegación sin necesidad de iniciar sesión con una cuenta de Google.

## Descripción
La extensión "YouTube Sin Cuenta" proporciona un acceso rápido y directo a la plataforma de YouTube. Su objetivo principal es ayudar a los usuarios a mantener su privacidad o simplemente evitar la personalización de algoritmos basada en su cuenta personal mientras navegan por la plataforma.

## Características
*   **Acceso rápido:** Abre YouTube directamente desde un menú emergente (popup).
*   **Aislamiento:** Permite navegar por YouTube sin estar vinculado a una sesión de usuario activa en el navegador.
*   **Ligera:** Desarrollada bajo el estándar Manifest V3 para un rendimiento óptimo y seguro.

## Estructura del Proyecto
*   `manifest.json`: Archivo de configuración de la extensión (Manifest V3).
*   `popup.html`: Interfaz de usuario del menú emergente.
*   `popup.js`: Lógica para manejar la interacción del botón de apertura.
*   `background.js`: Service worker para la gestión de eventos en segundo plano.
*   `icon128.png`: Icono de la extensión.

## Instalación
1. Descarga o clona este repositorio en tu equipo.
2. Abre Google Chrome y navega a `chrome://extensions/`.
3. Activa el **Modo de desarrollador** en la esquina superior derecha.
4. Haz clic en el botón **Cargar descomprimida**.
5. Selecciona la carpeta donde guardaste los archivos del proyecto.

## Uso
Una vez instalada, haz clic en el icono de la extensión en la barra de herramientas de tu navegador y presiona el botón **"Ver YouTube"** para abrir la página en una nueva pestaña.

## Creado por rTech.

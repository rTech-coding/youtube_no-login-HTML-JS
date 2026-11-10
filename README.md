# 🎬 YouTube Sin Cuenta
**YouTube Sin Cuenta v2.1** es una extensión para Google Chrome diseñada para facilitar el acceso y la reproducción de vídeos de YouTube sin necesidad de iniciar sesión con una cuenta de Google.
Su interfaz permite buscar vídeos públicos, consultar sus resultados y reproducirlos desde un reproductor integrado en la propia extensión.

---

## 🚀 Descripción
YouTube Sin Cuenta ofrece una experiencia de navegación sencilla y ligera, pensada para quienes prefieren acceder a vídeos sin vincular la navegación a su cuenta personal.
La versión 2.1 incorpora un sistema de búsqueda mediante **YouTube Data API v3**, que permite encontrar vídeos públicos y reproducir aquellos que admiten inserción.
> ℹ️ La extensión no garantiza el acceso a vídeos restringidos, bloqueados por la red o sujetos a limitaciones de reproducción.

## ✨ Características
- 🔎 **Buscador integrado:** busca vídeos directamente desde la extensión.
- ▶️ **Reproductor integrado:** reproduce vídeos compatibles sin tener que abrir la página habitual de YouTube.
- 🖼️ **Vista previa:** muestra miniaturas de los vídeos encontrados.
- 📺 **Información de vídeos:** consulta títulos, canales y fechas de publicación.
- 🔐 **Sin inicio de sesión:** no requiere iniciar sesión con una cuenta de Google para realizar búsquedas públicas.
- 🎨 **Interfaz sencilla:** diseño oscuro y fácil de utilizar.
- ⚡ **Ligera:** desarrollada utilizando Manifest V3.
- 🔑 **Integración con Google Cloud:** utiliza YouTube Data API v3 para obtener resultados.

## 🛠️ Tecnologías utilizadas
- HTML5
- CSS3
- JavaScript
- Google Chrome Extensions API
- Manifest V3
- YouTube Data API v3
- Google Cloud Platform

## 📁 Estructura del proyecto
```text
YouTube-Sin-Cuenta/
│
├── manifest.json
├── popup.html
├── popup.js
├── player.html
├── player.js
│
├── icon16.png
├── icon48.png
└── icon128.png
```

**Descripción de los archivos:**
| Archivo | Función |
|---|---|
| `manifest.json` | Configuración de la extensión. |
| `popup.html` | Interfaz del menú emergente. |
| `popup.js` | Controla la apertura del reproductor. |
| `player.html` | Interfaz del buscador y reproductor. |
| `player.js` | Gestiona las búsquedas y la reproducción. |
| `icon16.png` | Icono de 16 × 16 píxeles. |
| `icon48.png` | Icono de 48 × 48 píxeles. |
| `icon128.png` | Icono de 128 × 128 píxeles. |

## 📥 Instalación
1. Descarga o clona este repositorio en tu equipo.
2. Abre Google Chrome y accede a `chrome://extensions/`.
3. Activa el **Modo de desarrollador**.
4. Pulsa **Cargar descomprimida**.
5. Selecciona la carpeta del proyecto.
6. Comprueba que la extensión aparece instalada correctamente.

## 🔒 Privacidad y limitaciones
- La extensión no necesita iniciar sesión en Google para buscar vídeos públicos.
- No elimina ni oculta los registros de navegación del navegador, de la red o de los administradores de Google Workspace.
- No garantiza saltarse las restricciones de una red educativa.
- La reproducción depende de que el vídeo permita la inserción y no tenga restricciones adicionales.
- La API está sujeta a cuotas y límites establecidos por Google.

## 📜 Créditos
**Desarrollado por rTech.**

# ANDOX SOFTWARE – Sitio web corporativo

Sitio estático (HTML + CSS + JS) listo para GitHub Pages.

## Estructura
- `index.html` – contenido de la página
- `css/styles.css` – estilos (colores y fuentes en `:root`)
- `js/config.js` – **aquí se pega el enlace de Drive** (`DEMO_URL`) y la versión del sistema
- `js/main.js` – menú móvil, pestañas de módulos, botones de descarga y formulario
- `assets/img/` – logo, favicon e imagen del hero

## Publicar en GitHub Pages
Settings → Pages → Branch `main` / carpeta `/ (root)`.

## Actualizar a futuro
- Nueva versión: cambie `VERSION` en `config.js`.
- Nuevo módulo: copie un `<button role="tab">` y su `<div role="tabpanel">` en `index.html`.

# Lenguaje IV TP7

Universidad Católica de Salta · 2026

## Procedencia

Código original copiado de OneDrive/Documents/mi-proyecto; corresponde al TP7 con React Router.

## Ejecución

Instalar con `npm ci` y ejecutar `npm run dev`. Compilar con `npm run build`.

Las rutas de React Router se publican con una reescritura a index.html. El contacto es una demostración local y no envía correos.

## Publicación en GitHub Pages

Ejecutar `npm run build:pages` y publicar el contenido de `dist` en la rama `gh-pages`. La compilación usa la ruta base `/tp7-leng4/` y HashRouter para que la navegación y la recarga funcionen en GitHub Pages. La compilación normal conserva BrowserRouter para servidores con reescritura a index.html.

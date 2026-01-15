# Guía de Despliegue en GitHub Pages

## Opción 1: Despliegue Automático (Recomendado)

### Paso 1: Crear repositorio en GitHub
1. Ve a [github.com/new](https://github.com/new)
2. Nombre del repositorio: `safeconnect-landing` (o el nombre que prefieras)
3. Selecciona **Public**
4. NO inicialices con README, .gitignore ni licencia
5. Haz clic en **Create repository**

### Paso 2: Subir el código
Ejecuta estos comandos en la terminal:

```bash
cd safeconnect-landing
git init
git add .
git commit -m "Initial commit: SafeConnect Landing Page"
git branch -M main
git remote add origin https://github.com/SergioDan/safeconnect-landing.git
git push -u origin main
```

### Paso 3: Configurar GitHub Pages
1. Ve a tu repositorio en GitHub
2. Click en **Settings** > **Pages**
3. En "Source", selecciona **GitHub Actions**
4. GitHub detectará automáticamente el workflow

### Paso 4: Crear workflow de GitHub Actions
Crea el archivo `.github/workflows/deploy.yml` con el siguiente contenido:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      
      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8
      
      - name: Install dependencies
        run: pnpm install
      
      - name: Build
        run: pnpm build
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist/public'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Paso 5: Configurar base URL para GitHub Pages
Edita `vite.config.ts` y añade la base URL:

```typescript
export default defineConfig({
  base: '/safeconnect-landing/', // Nombre de tu repositorio
  // ... resto de la configuración
})
```

---

## Opción 2: Despliegue Manual

### Paso 1: Construir el proyecto
```bash
cd safeconnect-landing
pnpm install
pnpm build
```

### Paso 2: Subir la carpeta `dist/public`
Los archivos compilados estarán en `dist/public/`. Puedes:
- Subirlos manualmente a la rama `gh-pages`
- O usar el paquete `gh-pages`:

```bash
pnpm add -D gh-pages
npx gh-pages -d dist/public
```

---

## URL Final

Una vez desplegado, tu sitio estará disponible en:
```
https://sergiodan.github.io/safeconnect-landing/
```

O si usas un dominio personalizado:
```
https://safeconnect.tudominio.com/
```

---

## Notas Importantes

1. **Imágenes**: Todas las imágenes están en `client/public/images/` y se copiarán automáticamente al build.

2. **Variables de entorno**: Si necesitas variables de entorno, crea un archivo `.env` en la raíz del proyecto.

3. **Dominio personalizado**: Para usar un dominio personalizado, crea un archivo `CNAME` en `client/public/` con tu dominio.

4. **HTTPS**: GitHub Pages proporciona HTTPS automáticamente.

---

## Soporte

Si tienes problemas con el despliegue, revisa:
- [Documentación de GitHub Pages](https://docs.github.com/en/pages)
- [Documentación de Vite para despliegue](https://vitejs.dev/guide/static-deploy.html#github-pages)

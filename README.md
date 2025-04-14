# 🌍 Travelia Vue App

> Collaborative admin/frontend panel for the Travelia platform, built with Vue 3, TypeScript, Tailwind CSS, Pinia and Vite. Fully dockerized for local development.

> Panel administrativo y colaborativo para la plataforma Travelia, construido con Vue 3, TypeScript, Tailwind CSS, Pinia y Vite. Totalmente dockerizado para desarrollo local.

---

## 🚀 Technologies / Tecnologías

- 🖖 Vue 3 + TypeScript
- 🎨 Tailwind CSS
- ⚡ Vite
- 🌲 Pinia (state management)
- 🔀 Vue Router
- 🐳 Docker + Docker Compose

---

## 📦 Local setup / Instalación local

### 1. Clone the repo / Clonar el repositorio

```bash
git clone https://github.com/your-username/travelia-vue-app.git
cd travelia-vue-app
```

### 2. Install dependencies / Instalar dependencias

```bash
npm install
```

### 3. Run locally / Modo desarrollo local

```bash
npm run dev
```

> Make sure Vite runs with `--host` to allow Docker access
> Asegúrate de que Vite corra con `--host` para permitir acceso desde Docker

---

## 🐳 Using with Docker / Uso con Docker

### 1. Build and run / Construir y correr

```bash
docker compose up --build
```

### 2. Access the app / Acceder a la app

http://localhost:3001

### 3. Hot reload works via volumes / Hot reload funcionando con volúmenes

- Changes to `.vue`, `.ts`, `.css` are instantly reflected
- Cambios en archivos `.vue`, `.ts`, `.css` se reflejan al instante

> Uses `CHOKIDAR_USEPOLLING=true` to ensure hot reload inside Docker works reliably on Windows.

---

## 📁 Project structure / Estructura del proyecto

```
├── src/
│   ├── assets/            # Tailwind CSS and static assets
│   ├── components/        # Reusable UI components
│   ├── layouts/           # Page layouts (MainLayout, etc.)
│   ├── router/            # Vue Router configuration
│   ├── store/             # Pinia store
│   ├── views/             # Route-level views
│   ├── App.vue            # Main App wrapper
│   └── main.ts            # App bootstrap
├── public/                # Static public files
├── tailwind.config.js     # Tailwind CSS config
├── postcss.config.js      # PostCSS config
├── Dockerfile.dev         # Dockerfile for dev environment
├── docker-compose.yml     # Compose file for Docker
├── tsconfig.json          # TypeScript configuration
└── vite.config.ts         # Vite configuration with path alias
```

---

## ✅ Setup Summary / Resumen del setup

- Proyecto creado con `npm create vite@latest` (Vue + TypeScript)

  > Project created using `npm create vite@latest` with Vue + TypeScript template

- Se instaló y configuró:

  > The following dependencies were installed and configured:

  - Tailwind CSS + PostCSS + Autoprefixer (modo moderno con `@tailwindcss/postcss`)
    > Tailwind CSS + PostCSS + Autoprefixer (modern setup using `@tailwindcss/postcss`)
  - Pinia para manejo de estado global
    > Pinia for state management
  - Vue Router para navegación SPA
    > Vue Router for single-page navigation

- Se creó un alias `@` hacia `src/` en `vite.config.ts` y `tsconfig.json`

  > `@` alias was created and mapped to `src/` in both `vite.config.ts` and `tsconfig.json`

- `tailwind.config.js` usa `module.exports` sin problema, mientras que `postcss.config.js` se configuró como ESM (`export default`)

  > `tailwind.config.js` uses `module.exports` (safe with any module type); `postcss.config.js` was written using ESM syntax (`export default`)

- Se definió `vite --host --port 5173` en `package.json` para exponer correctamente en Docker

  > `vite --host --port 5173` was added in `package.json` to expose the dev server correctly inside Docker

- Docker usa `CHOKIDAR_USEPOLLING=true` y volúmenes para hot reload confiable
  > Docker uses `CHOKIDAR_USEPOLLING=true` and volumes to ensure reliable hot reload in development` y volúmenes para hot reload confiable

> ⚠️ En versiones recientes de Tailwind, si usas PostCSS directamente, necesitas instalar `@tailwindcss/postcss`:
>
> ```bash
> npm install -D @tailwindcss/postcss
> ```
>
> Y actualizar tu `postcss.config.js` para usarlo correctamente como plugin.

---

## 🧪 Testing (optional) / Pruebas (opcional)

_Coming soon – Vitest + Vue Test Utils + Coverage reports_

_Próximamente – Vitest + Vue Test Utils + Reportes de cobertura_

---

## 📜 License / Licencia

MIT

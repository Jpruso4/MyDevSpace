# Portfolio App

A modern, responsive portfolio website built with Angular 17, featuring Server-Side Rendering (SSR), internationalization, and dark mode support.

## 🚀 Features

- **Server-Side Rendering (SSR)** - Built with Angular SSR for improved SEO and performance
- **Internationalization (i18n)** - Multi-language support (English/Spanish) using ngx-translate
- **Dark Mode** - Toggle between light and dark themes with persistent user preference
- **Responsive Design** - Fully responsive layout built with Tailwind CSS
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Standalone Components** - Built with Angular standalone components architecture

## 🛠️ Technologies

- **Angular** 17.3.0
- **Tailwind CSS** 3.4.0
- **TypeScript** 5.4.2
- **ngx-translate** - Internationalization
- **Express** - Server-side rendering
- **PostCSS** & **Autoprefixer** - CSS processing

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm (v9 or higher) or yarn

## 🔧 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-app
```

2. Install dependencies:
```bash
npm install
```

## 🏃 Development

### Development Server

Run the development server:
```bash
npm start
# or
ng serve
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Build

Build the project for production:
```bash
npm run build
# or
ng build
```

The build artifacts will be stored in the `dist/portfolio-app/` directory.

### SSR Server

Run the SSR server:
```bash
npm run build
npm run serve:ssr:portfolio-app
```

The server will start on `http://localhost:4000` (or the port specified in the `PORT` environment variable).

## 📁 Project Structure

```
portfolio-app/
├── src/
│   ├── app/
│   │   ├── pages/
│   │   │   └── home/
│   │   │       └── portfolio-main/    # Main portfolio component
│   │   ├── app.component.ts
│   │   ├── app.config.ts              # App configuration with i18n
│   │   └── app.routes.ts             # Routing configuration
│   ├── assets/
│   │   ├── i18n/                     # Translation files
│   │   │   ├── en.json
│   │   │   └── es.json
│   │   └── images/                    # Image assets
│   └── styles.css                     # Global styles
├── server.ts                          # Express server for SSR
├── tailwind.config.js                 # Tailwind CSS configuration
└── angular.json                       # Angular CLI configuration
```

## 🌐 Internationalization

The app supports multiple languages. Translation files are located in `src/assets/i18n/`:
- `en.json` - English translations
- `es.json` - Spanish translations

To add a new language:
1. Create a new JSON file in `src/assets/i18n/`
2. Add the language option in the component
3. Update the translation loader if needed

## 🎨 Styling

This project uses **Tailwind CSS** for styling. The configuration includes:
- Custom color palette for light/dark themes
- Custom font families
- Responsive breakpoints
- Container queries plugin

Configuration file: `tailwind.config.js`

## 🧪 Testing

Run unit tests:
```bash
npm test
# or
ng test
```

## 📝 Code Formatting

This project uses Prettier for code formatting. Configuration is in `.prettierrc.json`.

## 🔒 Environment Variables

If you need to configure environment variables, create a `.env` file in the root directory (this file is already in `.gitignore`).

## 📦 Build for Production

1. Build the application:
```bash
npm run build
```

2. The production build will be in `dist/portfolio-app/` with:
   - `browser/` - Client-side application
   - `server/` - Server-side application

## 🚀 Deploy to GitHub Pages

This project includes `angular-cli-ghpages` for easy deployment to GitHub Pages.

> **Nota importante:** Todos los comandos se ejecutan en tu terminal local (tu computadora), no en GitHub. Los comandos construyen la aplicación y luego suben los archivos a GitHub automáticamente.

### Paso 1: Configurar GitHub Pages (solo la primera vez)

1. Ve a tu repositorio en GitHub
2. Click en **Settings** (Configuración)
3. En el menú lateral, busca **Pages**
4. En **Source**, selecciona la rama `gh-pages` y la carpeta `/ (root)`
5. Click en **Save**

### Paso 2: Desplegar desde tu terminal local

**Opción 1: Usando el script de deploy (recomendado)**

1. Construye la aplicación:
```bash
npm run build
```

2. Despliega a GitHub Pages:
```bash
npm run deploy
```

**Opción 2: Usando el comando directo**

```bash
npm run build
npm run deploy:gh-pages
```

**Opción 3: Usando npx**

```bash
npm run build
npx angular-cli-ghpages --dir=dist/portfolio-app/browser
```

### ¿Qué hace el comando de deploy?

1. Toma los archivos construidos de `dist/portfolio-app/browser/`
2. Crea o actualiza la rama `gh-pages` en tu repositorio de GitHub
3. Sube (push) los archivos a GitHub automáticamente
4. GitHub Pages servirá tu sitio desde la rama `gh-pages`

### Notas importantes

- **Los comandos se ejecutan en tu terminal local**, no en GitHub
- La primera vez puede pedirte autenticación con GitHub (usuario y token)
- El sitio estará disponible en: `https://[tu-usuario].github.io/[nombre-repositorio]/`
- Si tu repositorio está en una organización, la URL puede ser diferente
- El paquete `angular-cli-ghpages` está instalado localmente, no necesitas instalarlo globalmente

## 🤝 Contributing

This is a personal portfolio project. If you'd like to suggest improvements or report issues, please feel free to open an issue or submit a pull request.

## 📄 License

This project is private and all rights reserved.

## 👤 Author

**Juan Pablo Gutierrez Diaz**
- Java Developer
- Salesforce Developer
- Data Analyst

---

Built with ❤️ using Angular

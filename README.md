# Proyecto con Vite, React, TypeScript y PNPM

Este proyecto está construido con [Vite](https://vitejs.dev/), [React](https://react.dev/), y [TypeScript](https://www.typescriptlang.org/). Utiliza [PNPM](https://pnpm.io/) para la gestión de paquetes y tiene configuraciones adicionales para estilos y estado global.

## Requisitos previos

- **Node.js**: Asegúrate de tener instalado Node.js (recomendado: versión 16.x o superior).
- **PNPM**: Instala PNPM globalmente si aún no lo tienes (`npm install -g pnpm`).


## Instalar el proyecto

en la terminal en la raiz del proyecto

pnpm i

## Ejecutar el proyecto (Depende las variables de entorno que queres usar)

  # Desarrollo
  pnpm run dev 
  # Test
  pnpm run test 
  # Producción
  pnpm run production 

## Build de la app

  pnpm run build <!-- La build va a estar en la carpeta dist en la raiz del proyecto -->
  
## Dependencias principales usadas en el proyecto:

  @tanstack/react-query: Manejo de estado y fetching de datos. https://tanstack.com/query/latest/docs/framework/react/overview
  axios: Cliente HTTP para realizar peticiones. https://axios-http.com/docs/intro
  dayjs: Biblioteca para manejar fechas. https://day.js.org/docs/en/installation/installation
  react-hook-form: Librería para el manejo de formularios. https://react-hook-form.com/get-started
  react-router-dom: Enrutador para aplicaciones React. https://reactrouter.com/en/main/start/tutorial
  zod: Biblioteca para validaciones de esquema y tipos. https://zod.dev/?id=basic-usage
  zustand: Manejo de estado global en React. https://zustand.docs.pmnd.rs/getting-started/introduction

## Biblioteca de componentes
  Shadcn https://ui.shadcn.com/docs <!-- Bomba -->
  Material UI (no esta instalada) https://mui.com/material-ui/getting-started/
  

## Dependencias de desarrollo <!-- No darle mucha atencion son dependencias que se usan en desarrollo y cuando se buildea ya no las necesitas generalmente el typado va aca -->

  @vitejs/plugin-react-swc: Plugin para usar React con el compilador SWC en Vite.
  eslint y typescript-eslint: Herramientas para mantener la calidad del código.
  tailwindcss: Framework CSS para estilizar la aplicación.
  typescript: Lenguaje de programación para añadir tipos estáticos a JavaScript.
  vite: Herramienta de construcción rápida de frontend.



## Estructura del proyecto

/public
  # Contiene archivos estáticos como imágenes, iconos, y el archivo index.html que Vite usa como plantilla.

/src
  /assets       # Archivos estáticos como imágenes y estilos personalizados.
  /components   # Componentes reutilizables de React.
    /Layouts    # Componentes de layout para estructurar páginas.
    /MyUi       # Componentes personalizados de UI.
    /Pages      # Componentes de página específicos.
    /Providers   # Proveedores de contexto y otras configuraciones globales.
    /ui         # Componentes UI de ShadCN.
  /context      # Contextos de React para el estado global.
  /hooks        # Custom hooks para lógica reutilizable.
  /pages        # Páginas de la aplicación.
  /routes       # Definiciones de rutas y configuración del enrutador.
  /schemas      # Schemas para validar con zod
  /types        # Tipos y definiciones de TypeScript.
  /utils        # Utilidades y helpers para funciones comunes.
  /zustand      # Archivos relacionados con la gestión del estado global usando Zustand.


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```






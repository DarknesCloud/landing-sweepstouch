# SweepsTouch Clone - Next.js Project

Este proyecto es una réplica exacta del diseño de SweepsTouch utilizando Next.js, Material UI y CSS Modules.

## 🚀 Características

- **Next.js 15** con App Router
- **Material UI** para componentes de interfaz
- **CSS Modules** para estilos modulares
- **TypeScript** para tipado estático
- **Diseño completamente responsive** para móviles
- **Animaciones y efectos visuales** modernos

## 📱 Componentes

### Header
- Logo de SweepsTouch con icono
- Navegación horizontal (Sobre Nosotros, Blog, FAQs, Soporte)
- Botón CTA "Sign in" con gradiente rosa
- Responsive: navegación se oculta en móviles

### Hero
- Fondo degradado rosa que replica el diseño original
- Layout de dos columnas:
  - **Izquierda**: Imagen de teléfonos con animación flotante
  - **Derecha**: Contenido de texto y CTA
- Título principal: "POTENCIA TU SUPERMERCADO"
- Subtítulo descriptivo
- Botón CTA principal
- Estadística de confianza
- Completamente responsive para todos los tamaños de pantalla

## 🎨 Diseño Responsive

El proyecto incluye breakpoints para:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile Large**: 480px - 767px
- **Mobile Small**: 360px - 479px
- **Mobile XS**: <360px

## 🛠️ Instalación y Uso

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar en producción
npm start
```

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── theme.ts
├── components/
│   ├── Header/
│   │   ├── Header.tsx
│   │   ├── Header.module.css
│   │   └── index.ts
│   └── Hero/
│       ├── Hero.tsx
│       ├── Hero.module.css
│       └── index.ts
└── styles/
    └── components/
```

## 🎯 Tecnologías Utilizadas

- **Next.js 15**: Framework de React
- **Material UI**: Biblioteca de componentes
- **CSS Modules**: Estilos modulares y encapsulados
- **TypeScript**: Tipado estático
- **Emotion**: CSS-in-JS para Material UI

## 📸 Capturas de Pantalla

El proyecto replica exactamente el diseño original con:
- Colores y gradientes idénticos
- Tipografía y espaciado precisos
- Animaciones suaves y efectos visuales
- Responsive design optimizado

## 🌐 Demo

El proyecto está disponible en: https://3000-ipreoscpiirthyzmiv5zk-e4a1f7cd.manusvm.computer

## 📝 Notas de Desarrollo

- Se utilizó CSS Modules para mantener los estilos encapsulados
- Material UI se configuró con un tema personalizado
- Las imágenes se optimizaron para Next.js
- Se implementaron animaciones CSS para mejorar la experiencia de usuario
- El diseño es pixel-perfect comparado con la referencia original

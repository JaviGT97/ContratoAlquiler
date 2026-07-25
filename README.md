# ContratoAlquiler

Una aplicación web interactiva para generar contratos de alquiler personalizados al instante. Selecciona el tipo de contrato, completa los datos y obtén un documento listo para imprimir o descargar en PDF.

## 🚀 Características

- **4 tipos de contrato:**
  - Alquiler de Temporada
  - Vivienda Habitual
  - Local Comercial
  - Grandes Tenedores

- **Campos dinámicos:** Los formularios se adaptan al tipo de contrato seleccionado.
- **Vista previa en tiempo real:** Los datos introducidos se reflejan al instante en el contrato.
- **Exportación a PDF:** Genera un documento profesional listo para imprimir.
- **Diseño responsive:** Funciona en ordenadores, tablets y móviles.
- **Accesible:** Todos los formularios tienen etiquetas correctamente asociadas.

## 🛠️ Tecnologías

- **[Astro](https://astro.build)** — Framework de generación de sitios estáticos
- **JavaScript vanilla** — Lógica de formularios y dinámica del contrato
- **CSS moderno** — Diseño con variables, grid, flexbox y animaciones
- **Fuente Inter** — Tipografía limpia y moderna
- **Paleta de colores:** Teal (#0f766e) y ámbar (#f59e0b)

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/javigt10/ContratoAlquiler.git
cd ContratoAlquiler

# Instalar dependencias
npm install

# Iniciar en modo desarrollo
npm run dev

# Generar build estático
npm run build

# Vista previa del build
npm run preview
```

## 🌐 Despliegue

El proyecto se despliega automáticamente en **GitHub Pages** mediante GitHub Actions al hacer push a la rama `main`.

Puedes ver la versión en vivo aquí: [https://javigt10.github.io/ContratoAlquiler](https://javigt10.github.io/ContratoAlquiler)

## 📁 Estructura

```
├── public/
│   ├── scripts/editor.js     # Lógica del editor
│   └── styles/editor.css     # Estilos globales
├── src/
│   ├── components/           # Componentes Astro
│   │   ├── ContratoTemporada.astro
│   │   ├── ContratoVivienda.astro
│   │   ├── ContratoLocal.astro
│   │   ├── ContratoGrandes.astro
│   │   ├── FormArrendador.astro
│   │   ├── FormArrendatario.astro
│   │   ├── FormAvalista.astro
│   │   ├── FormInmueble.astro
│   │   ├── FormContrato.astro
│   │   ├── FormContacto.astro
│   │   ├── SelectorTipo.astro
│   │   ├── NotaLegal.astro
│   │   ├── BotonesAccion.astro
│   │   └── Cabecera.astro
│   ├── layouts/Layout.astro  # Layout base
│   └── pages/index.astro     # Página principal
├── .github/workflows/deploy.yml  # CI/CD a GitHub Pages
├── astro.config.mjs
└── package.json
```

## 📄 Uso

1. Selecciona el tipo de contrato en el selector superior.
2. Rellena los formularios con los datos de las partes, inmueble y condiciones.
3. Los cambios se reflejan automáticamente en el contrato.
4. Pulsa "Descargar PDF" para obtener el documento listo para imprimir.

## 📝 Licencia

Este proyecto es de uso libre para fines personales y profesionales.

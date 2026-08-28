# Portafolio-KS

## Nombre del estudiante

Kevin Suárez

## Descripción

Portafolio personal desarrollado como parte de la asignatura de Programación de Sistemas Web.

El proyecto presenta información personal, formación académica, habilidades técnicas, proyectos relacionados con tecnología y redes, y una sección de contacto.

## Tecnologías utilizadas

- HTML5
- CSS3
- Git
- GitHub

## Características

- Diseño web estructurado con HTML semántico.
- Estilos personalizados mediante CSS.
- Menú de navegación.
- Sección de presentación personal.
- Sección "Sobre mí".
- Sección de habilidades.
- Sección de proyectos.
- Formulario visual de contacto.
- Pie de página con enlace a GitHub.
- Imagen representativa del perfil.

## Estructura del proyecto

```text
Portafolio-KS/
│
├── img/
│   └── perfil.png
│
├── index.html
├── styles.css
└── README.md

## Cómo visualizar el proyecto

1. Descargar o clonar este repositorio.
2. Abrir el archivo `index.html` en un navegador web.

## Autor

Kevin Suárez

GitHub: https://github.com/kevinsuarez-15

# Portafolio Personal - Kevin Suárez

## Actividad Integradora 2

Portafolio personal interactivo desarrollado como continuación de la Actividad Integradora 1.

En esta segunda actividad se incorporaron nuevas funcionalidades mediante JavaScript, manteniendo la estructura original del portafolio y agregando interacción con el usuario, manipulación del DOM, validación de formularios, modo oscuro y almacenamiento de información mediante LocalStorage.

---

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Git
- GitHub
- GitHub Pages
- LocalStorage

---

## Nuevas funcionalidades implementadas

### 1. Integración de JavaScript

Se creó el archivo externo `script.js` y se enlazó correctamente con `index.html`.

El código JavaScript se mantiene separado del código HTML para conservar una estructura organizada.

### 2. Eventos

Se implementaron eventos mediante `addEventListener()` para permitir la interacción del usuario con el portafolio.

Entre las funcionalidades implementadas se encuentran:

- Evento `click` para activar el modo oscuro.
- Evento `submit` para procesar el formulario de contacto.
- Eventos adicionales para interactuar con diferentes elementos de la página.

### 3. Manipulación del DOM

JavaScript modifica dinámicamente diferentes elementos del sitio.

Se implementaron funciones para:

- Cambiar textos de la página.
- Mostrar mensajes al usuario.
- Cambiar el modo visual del portafolio.
- Mostrar información personalizada del visitante.

### 4. Funciones y estructuras de control

El proyecto utiliza variables, funciones y estructuras condicionales para controlar el comportamiento de las funcionalidades implementadas.

Se utilizan funciones independientes para organizar las diferentes tareas realizadas por JavaScript.

También se utilizan estructuras `if` para validar diferentes condiciones antes de ejecutar determinadas acciones.

### 5. Validación del formulario

El formulario de contacto cuenta con una validación básica mediante JavaScript.

Antes de mostrar el mensaje de confirmación se verifica que los siguientes campos contengan información:

- Nombre
- Correo electrónico
- Mensaje

Si algún campo se encuentra vacío, se solicita al usuario completar la información correspondiente.

### 6. Modo oscuro

Se incorporó un botón que permite cambiar entre el modo claro y el modo oscuro.

El modo oscuro modifica los colores principales del portafolio para facilitar la visualización y proporcionar una apariencia diferente al sitio.

### 7. LocalStorage

Se implementó `localStorage` para guardar información del visitante.

El nombre ingresado por el usuario se almacena en el navegador y posteriormente se recupera mediante JavaScript.

Esto permite que la información permanezca disponible después de recargar la página.

Ejemplo utilizado:

```javascript
localStorage.getItem("nombreVisitante");

# Course-notes

## Project Description

La aplicación deberá estar testeada con Vitest. Se recomienda trabajar con un máximo de dos componentes. (Ex.: App y Students)

El profesor tiene que poder agregar a una tabla las notas de sus alumnos. La aplicación tiene que poder permitirle añadir el nombre del alumno, la materia y la nota en formato numérico.


Columnas de la tabla:
nombre del alumno
materia
clasificación según la nota (Ver baremo)
NOTA: Recuerda que si se te ocurre algo para mejorar siempre es bienvenido.

Baremo:
0-3: Muy deficiente
3-5: Insuficiente
5-6: Suficiente
6-7: Bien
7-9: Notable
9-10: Sobresaliente

## Test that i realized 
-Testear si las etiquetas principales (header - main ...) están presentes en el componente
-Testear si un componente hijo está presente.
-Testear si el atributo "class" de la etiquetas html es la que tiene que ser
-Testear si los atributos "id" son correctos
-Si el componente recibe props testear que pueda recibir datos
-Testear que el nombre del alumno aparece en la table después de haber hecho click en el botón de añadir
-Testear que el nombre de la matéria aparece en la table

## views of the app

###Desktop view

![Capture-note-course-Desktop](https://user-images.githubusercontent.com/116893351/208253666-6ebff9a7-cfcc-42b3-ae15-bed7aea9d3b5.PNG)
### Mobile view

![Capture-note-course-mobile](https://user-images.githubusercontent.com/116893351/208253690-540f9d53-8506-4f35-b404-36557c399dde.PNG)

## Technologies
[![My Skills](https://skillicons.dev/icons?i=js,html,sass,vite,vue)](https://skillicons.dev)

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```
```sh
npm install -D sass
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

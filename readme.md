# Diseño de "Todo List": 

Consiste en un diseño de formulario simple para registra las tareas y el nombre del autor. El cual una vez que se envie el formulario, solo los datos de las tareas se muestran en un cuadro de lista en la misma página.

El diseño cumple las condiciones:
 - Cuando se envian, los campos se limpian
 - validar los campos (no campos vacios)
 - mostrar mensaje cuando no hay elementos en la lista

 **Bosquejo de Diseño**

![App Screenshot](https://i.ibb.co/RgLGwzf/Dise-o-de-lista-de-tareas.png)


# Tipos de archivos empleados para la creación: 

## HTML
Para la creación del diseño se emplearon los elementos:
 1. encabezados (`<header>`)
 2. contenedores (`<div>`)
 3. formularios (`<form>`)
 4. listas (`<ul>`, `<li>`)
 5. botones (`<button>`)

## CSS

Para dar estilo a los elementos del diseño, se emplearon :

1. Tipografía (`font-family`), 
2. Fondo (`background`), 
3. Márgenes y rellenos (`padding` y `margin`), 
4. Bordes (`border`), 
5. Sombras (`box-shadow`), 
6. Estilos de texto (`color`, `font-size`, `text-shadow`).
6. Flexbox, entre otros. 

## JavaScript

Para agregar interactividad se emplearon: 


### **Variables:**
Son contenedores para almacenar valores.

- `taskForm`
- `taskNameElement`
- `authorElement`
- `taskList`
- `taskName`
- `author`

### **Listeners:**

Funciones que esperan y responden a eventos específicos cuando el usuario interactua con el diseño.

- `submit` en `sendTaskData`
- `input` en `taskNameElement` y `authorElement`

### **Funciones**

Se utilizan  para manejar las interacciones del usuario.

- `sendTaskData(event)`
- `readTaskName(event)`
- `readAuthor(event)`
- `validateData(data)`



## **Resultado Final del bosquejo de  diseño en navegador**

![App Screenshot](https://i.ibb.co/kDtsMVv/lista.gif)

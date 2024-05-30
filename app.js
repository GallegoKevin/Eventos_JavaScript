// VARIABLES

const taskForm = document.getElementById('taskForm');
const taskNameElement = document.getElementById('taskName');
const authorElement = document.getElementById('author');
const taskList = document.getElementById('taskList');

let taskName = '';
let author = '';


//variable (button)
const button = document.querySelector('button'); 




// Crear elemento li para el mensaje en caso no hay tareas
const noTasksMessage = document.createElement('li');
noTasksMessage.id = 'noTasksMessage';
noTasksMessage.textContent = 'No hay tareas';
taskList.appendChild(noTasksMessage);



// LISTENERS

taskForm.addEventListener('submit', sendTaskData);
taskNameElement.addEventListener('input', readTaskName);
authorElement.addEventListener('input', readAuthor);


// --Listeners (button)

// Aplicar estilo pointer al boton y un background
button.addEventListener('mouseover', function() {
    button.style.background = 'linear-gradient(135deg, hsl(184, 59%, 74%), #496392)';
    button.style.cursor = 'pointer';
});

//Cuando el cursor sale del boton restaurar el background establecido en el css
button.addEventListener('mouseout', function() {
 
    button.style.background = ''; 
});


// FUNCIONES

function sendTaskData(event) {
    event.preventDefault();

    const data = { taskName: taskName, author: author };

    if (!validateData(data)) {
        alert('Por favor, Ingresar el nombre de la tarea y el autor.');
        return;
    }

    if (taskList.contains(noTasksMessage)) {
        taskList.removeChild(noTasksMessage);
    }

    const newTask = document.createElement('li');
    newTask.textContent = `${taskList.children.length + 1}) ${taskName}`;
    taskList.appendChild(newTask);

    console.log(data);

    taskNameElement.value = '';
    authorElement.value = '';

    taskName = '';
    author = '';
}

function readTaskName(event) {
    taskName = event.target.value.trim();
}

function readAuthor(event) {
    author = event.target.value.trim();
}

function validateData(data) {
    return data.taskName !== '' && data.author !== '';
}


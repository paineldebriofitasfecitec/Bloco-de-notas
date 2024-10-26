
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');


addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();

    
    if (taskText === '') {
        alert('Por favor, escreva uma tarefa!');
        return;
    }

    
    const newTask = document.createElement('li');
    newTask.innerHTML = `${taskText} <button onclick="removeTask(this)">Remover</button>`;
    newTask.addEventListener('click', toggleComplete); 

   
    taskList.appendChild(newTask);

   
    taskInput.value = '';
}

function removeTask(button) {
    const taskItem = button.parentElement;
    taskList.removeChild(taskItem); 
}

function toggleComplete() {
    this.classList.toggle('completed'); 
}

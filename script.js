
function loadApp() {
    createTasks();
    createDoneTasks();
}

const tasks = [

];

const completedTasks = [

];

function sendTasks() {
    const forma = document.forms["forma"];
    const taskInput = forma["task"].value;
    const hourInput = forma["dateTask"].value;

    if (taskInput.trim() !== '' && hourInput.trim() !== '') {
        tasks.push(new Tasks(taskInput, hourInput));
        createTasks();
    }
    else {
        alert("Ingrese una tarea y hora");
    };
};

function createTasks() {
    console.log("Tareas...");

    const taskList = document.getElementById("tareas");
    let taskHTML = '';
        for (let i = 0; i < tasks.length; i++) {
        const taskElement = tasks[i];
        const taskChild = `<div class="task">
        <div>
        <li>${taskElement.task}</li>
        <li>${taskElement.date}</li>
        </div>
        <div class="buttons">
        <button class="complete-btn" onclick="loadDoneTasks(${i})"><ion-icon name="checkmark-outline"></ion-icon></button>
        <button class="delete-btn" onclick="deleteTask(${i})"><ion-icon name="close-circle-outline"></ion-icon></button>
        </div>
        </div>`;
        taskHTML += taskChild;
        
    };
    taskList.innerHTML = taskHTML;
};

let deleteTask = (index)=>{
    tasks.splice(index,1);
    createTasks();
}

function loadDoneTasks(index){
     if (index >= 0 && index < tasks.length){
        createDoneTask(tasks[index]);
        tasks.splice(index, 1);
        createTasks();
     }

}

function createDoneTask(task) {
    completedTasks.push(new CompletedTask(task.task, task.date));
    createDoneTasks();
}

function createDoneTasks(){
    const doneTaskList = document.getElementById("t-done");
    let doneTasksHTML = '';

    for(let i=0; i < completedTasks.length; i++ ){
        console.log(i);
        const completedTask = completedTasks[i];
        const doneTaskChild = `<div class="task">
        <div>
        <li>${completedTask.task}</li>
        <li>${completedTask.date}</li>
        </div>
        <div class="buttons">
        <button class="delete-btn" onclick="deleteCompletedTask(${i})"><ion-icon name="close-circle-outline"></ion-icon></button>
        </div>
        </div>`;
        
        doneTasksHTML += doneTaskChild;
    }
    doneTaskList.innerHTML = doneTasksHTML;

}

let deleteCompletedTask = (id) => {
    if (id >= 0 && id < completedTasks.length) {
        completedTasks.splice(id, 1);
        createDoneTasks();
    } else {
        console.error("Índice inválido para eliminar la tarea completada.");
    }
}
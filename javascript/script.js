let taskInput = document.getElementById("taskInput");
let addButton = document.getElementById("addButton");
let taskList = document.getElementById("taskList");

// Get saved tasks
let savedTasks = localStorage.getItem("tasks");

let tasks = savedTasks ? JSON.parse(savedTasks) : [];

function saveTasks() {

    localStorage.setItem("tasks", JSON.stringify(tasks));

}

function displayTasks() {

    taskList.innerHTML = "";

    tasks.forEach((task, index) => {

        let li = document.createElement("li");

        li.textContent = task.text;

        if (task.completed) {
            li.style.textDecoration = "line-through";
        }

        // Delete button
        let deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function(event) {

            event.stopPropagation();

            tasks.splice(index, 1);

            saveTasks();
            displayTasks();

        });

        li.appendChild(deleteButton);

        // Complete / incomplete
        li.addEventListener("click", function() {

            task.completed = !task.completed;

            saveTasks();
            displayTasks();

        });

        taskList.appendChild(li);

    });

}

addButton.addEventListener("click", function() {

    let taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    let task = {
        text: taskText,
        completed: false
    };

    tasks.push(task);

    saveTasks();

    taskInput.value = "";

    displayTasks();

});

displayTasks();
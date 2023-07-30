function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  if (taskInput.value.trim() === '') {
    return;
  }

  var taskItem = document.createElement("li");
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  var taskText = document.createTextNode(taskInput.value);
  var editButton = document.createElement("button");
  editButton.innerHTML = "Edit";
  editButton.addEventListener("click", function() {
    editTask(taskItem);
  });

  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.addEventListener("click", function() {
    deleteTask(taskItem);
  });

  taskItem.appendChild(checkbox);
  taskItem.appendChild(taskText);
  taskItem.appendChild(editButton);
  taskItem.appendChild(deleteButton);
  taskList.appendChild(taskItem);

  taskInput.value = '';
}

function editTask(taskItem) {
  var newTask = prompt("Edit task:", taskItem.childNodes[1].nodeValue.trim());
  if (newTask !== null && newTask.trim() !== '') {
    taskItem.childNodes[1].nodeValue = newTask;
  }
}

function deleteTask(taskItem) {
  if (confirm("Are you sure you want to delete this task?")) {
    taskItem.parentNode.removeChild(taskItem);
  }
}

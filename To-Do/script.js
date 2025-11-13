document.getElementById("addTaskButton").addEventListener("click", function() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        const listItem = document.createElement("li");
        listItem.textContent = taskInput.value;
        taskList.appendChild(listItem);
        taskInput.value = "";
    }
});
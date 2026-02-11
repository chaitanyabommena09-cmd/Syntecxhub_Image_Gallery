const inputBox = document.getElementById("taskInput");
const listContainer = document.getElementById("taskList");

// Load tasks when page opens
window.onload = function () {
    loadTasks();
};

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // delete button
        li.appendChild(span);
    }
    inputBox.value = "";
    saveTasks();
}

// Click on task → mark complete OR delete
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); // strike line
        saveTasks();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); // delete
        saveTasks();
    }
}, false);

// Save tasks in localStorage
function saveTasks() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Load tasks after refresh
function loadTasks() {
    listContainer.innerHTML = localStorage.getItem("data");
}
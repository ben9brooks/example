document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("task-input");
  const addTaskBtn = document.getElementById("add-task-btn");
  const taskList = document.getElementById("task-list");
  const filterBtns = document.querySelectorAll(".filter-btn");

  // Load tasks from localStorage
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  renderTasks(tasks);

  addTaskBtn.addEventListener("click", () => {
    const task = {
      id: Date.now(),
      text: taskInput.value,
      completed: false,
    };
    tasks.push(task);
    renderTasks(tasks);
    updateLocalStorage();
    taskInput.value = "";
  });

  taskList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
      tasks = tasks.filter((task) => task.id !== parseInt(e.target.dataset.id));
      renderTasks(tasks);
      updateLocalStorage();
    } else if (e.target.classList.contains("toggle")) {
      const task = tasks.find(
        (task) => task.id === parseInt(e.target.dataset.id)
      );
      task.completed = !task.completed;

      renderTasks(tasks);
      updateLocalStorage();
    }
  });

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const filter = e.target.dataset.filter;
      if (filter === "all") {
        renderTasks(tasks);
      } else if (filter === "completed") {
        renderTasks(tasks.filter((task) => task.completed));
      } else {
        renderTasks(tasks.filter((task) => !task.completed));
      }
    });
  });

  function renderTasks(tasks) {
    taskList.innerHTML = "";
    tasks.forEach((task) => {
      taskList.innerHTML += `
                <li class="${task.completed ? "completed" : ""}">
                <span class="${
                  task.completed ? "completed" : "toggle"
                }" data-id="${task.id}">${task.text}</span>
                <button class="toggle" data-id="${task.id}">${
        task.completed ? "Mark as Pending" : "Mark as Completed"
      }</button>
                <button class="delete" data-id="${task.id}">Delete</button>
                </li>
            `;
    });
  }

  function updateLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});

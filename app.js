const addTaskInput = document.querySelector("#new-task");
const form = document.querySelector("form");
const incompleteListUl = document.querySelector("#items");
const completeListUl = document.querySelector(".complete-list ul");

const addToIncompleteTasks = function (task) {
  const li = document.createElement("li");
  const input = document.createElement("input");
  const label = document.createElement("label");
  input.type = "checkbox";
  label.innerText = task;
  li.appendChild(input);
  li.appendChild(label);
  incompleteListUl.appendChild(li);
  input.onchange = addToCompletedTask;
};

const addTaskToUl = function (event) {
  event.preventDefault();
  const task = addTaskInput.value;
  addToIncompleteTasks(task);
  addTaskInput.value = "";
};

form.addEventListener("submit", addTaskToUl);

const addToCompletedTask = function () {
  const task = this.parentNode.querySelector("label").textContent;
  const li = document.createElement("li");
  li.textContent = task;
  completeListUl.appendChild(li);
};

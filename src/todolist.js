let button = document.getElementById("Add");
let input = document.getElementById("input");
let todolist = document.getElementById("todolist");

let todos = [];
button.addEventListener("click", () => {
  todos.push(input.value);
  addtodo(input.value);
  input.value = " ";
});
function addtodo(todo) {
  let para = document.createElement("p");
  para.innerHTML = todo;
  todolist.appendChild(para);
  para.addEventListener("click", () => {
    para.style.textDecoration = "line-through";
    remove(todo);
  });

  para.addEventListener("dblclick", () => {
    todolist.removeChild(para);
    remove(todo);
  });
}
function remove(todo) {
  let index = todos.indexOf(todo);
  if (index > -1) {
    todos.splice(index, 1);
  }
}
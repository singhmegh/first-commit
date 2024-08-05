const inputBox = document.getElementById("inputBox");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todolist");
//const are used because value will not change

let editTodo = null; //global variable define

//finction 1 to add TODo list
const addTodo = () => {
  //alert("Hello");   alert are used for checking that will button work or not (it is a debugger)
  const inputText = inputBox.value.trim();
  if (inputText.length <= 0) {
    alert("Add something First");
    return false;
  }
  if (addBtn.value === "Edit") {
    editLocalTodos(editTodo.target.previousElementSibling.innerHTML); //function call kiya hai yaha
    editTodo.target.previousElementSibling.innerHTML = inputText;

    addBtn.value = "Add";
    inputBox.value = "";
  } else {
    //creating p tag
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerHTML = inputText;
    li.appendChild(p);

    //creating edit button
    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.classList.add("btn", "editBtn");
    li.appendChild(editBtn);

    //creating delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Remove";
    deleteBtn.classList.add("btn", "deleteBtn");
    li.appendChild(deleteBtn);

    todoList.appendChild(li);
    inputBox.value = ""; // for clear the box

    saveLocalTodos(inputText);
  }
};

//function 2 to update (Edit/remove) button
const updateTodo = (e) => {
  //console.log(e.target.innerHTML);
  if (e.target.innerHTML === "Remove") {
    //console.log(e.target.parentElement);
    todoList.removeChild(e.target.parentElement);
    deleteLocalTodos(e.target.parentElement);
  }
  if (e.target.innerHTML === "Edit") {
    inputBox.value = e.target.previousElementSibling.innerHTML;
    inputBox.focus();
    addBtn.value = "Edit";
    editTodo = e;
  }
};

//Local storage
const saveLocalTodos = (todo) => {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  //JSON.parse is a function that change JSON string into JSON object
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
  //console.log(todos);
};

//get local todo
const getLocalTodos = () => {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
    todos.forEach((todo) => {
      //creating p tag
      const li = document.createElement("li");
      const p = document.createElement("p");
      p.innerHTML = todo;
      li.appendChild(p);

      //creating edit button
      const editBtn = document.createElement("button");
      editBtn.innerText = "Edit";
      editBtn.classList.add("btn", "editBtn");
      li.appendChild(editBtn);

      //creating delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.innerText = "Remove";
      deleteBtn.classList.add("btn", "deleteBtn");
      li.appendChild(deleteBtn);

      todoList.appendChild(li);
    });
  }
};
//delete local todo
const deleteLocalTodos = (todo) => {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  let todoText = todo.children[0].innerHTML;
  let todoIndex = todos.indexOf(todoText);
  todos.splice(todoIndex, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
  console.log(todoIndex);
};
//for edit in local storage
const editLocalTodos = (todo) => {
  let todos = JSON.parse(localStorage.getItem("todos"));
  let todoIndex = todos.indexOf(todo);
  todos[todoIndex] = inputBox.value;
  localStorage.setItem("todos", JSON.stringify(todos));
};
document.addEventListener("DOMContentLoaded", getLocalTodos);
addBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", updateTodo);

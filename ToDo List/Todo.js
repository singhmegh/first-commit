const inputBox = document.getElementById("inputBox");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todolist");
//const are used because value will not change

const addTodo = () => {
  //alert("Hello");   alert are used for checking that will button work or not (it is a debugger)
  const inputText = inputBox.value.trim();
  if (inputText.length <= 0) {
    alert("Add something First");
    return false;
  }

  //creating p tag
  const li = document.createElement("li");
  const p = document.createElement("p");
  p.innerHTML = inputText;
  li.appendChild(p);

  

//creating edit button
const editBtn = document.createElement("button");
editBtn.innerText = "Edit";
editBtn.classList.add("btn" , "editBtn");
li.appendChild(editBtn);

 //creating delete button
 const deleteBtn = document.createElement("button");
 deleteBtn.innerText = "Remove";
 deleteBtn.classList.add("btn" , "deleteBtn");
 li.appendChild(deleteBtn);
 

  todoList.appendChild(li);
  inputBox.value = ""; // for clear the box
};

const updateTodo = (e) =>{
    //console.log(e.target.innerHTML);
    
}

addBtn.addEventListener("click", addTodo);
todoList.addEventListener('click', updateTodo);

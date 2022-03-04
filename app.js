//Selectors 
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listeners 
todoButton.addEventListener("click", addTodo); 
todoList.addEventListener("click", markTodo);


//Functions

// react to the event target
function markTodo(event) {
    const item = event.target;

    if(item.classList[0] == "trash-btn") {
        const todo = item.parentElement;
        todo.remove();
    } else { 
        if (item.classList[0] == "complete-btn") {
            const todo = item.parentElement;
            todo.classList.toggle('completed')
        }
    }
}

// Create a new Todo item with a check mark and trash button
function addTodo(event) {
    // prevent broswer from refreshing
    event.preventDefault();

    // empty task alert
    if (todoInput.value.length === 0) {
        alert("Please add a task")
        return;
    }

    // create todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item'); // use todo-item class name to style is css
    todoDiv.appendChild(newTodo); // add li into the div 

    // check button 
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fa fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    // trash button 
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    todoList.append(todoDiv);

    // return placeholder
    todoInput.value = "";

}


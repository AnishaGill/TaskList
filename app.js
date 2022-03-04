//Selectors 
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");





                // class .todo-input 
                // enter in bar 
                // text the user puts in is an input text 
                // input treated as a constant
                // find html elements by class name


//Event Listeners 
todoButton.addEventListener("click", addTodo); 
todoList.addEventListener("click", deleteTodo);


//Functions

function deleteTodo(event) {
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



function addTodo(event) {
    // prevent broswer from refreshing
    event.preventDefault();

    if (todoInput.value.length === 0) {
        alert("Please add a task")
        return;
    }

    // create ToDo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // create LI 
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item'); // use todo-item class name to style is css
    todoDiv.appendChild(newTodo); // add li into the div 

    // check mark button 
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fa fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    // check trash button 
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // Append with todo list 
    todoList.append(todoDiv);

    // return placeholder
    todoInput.value = "";

}


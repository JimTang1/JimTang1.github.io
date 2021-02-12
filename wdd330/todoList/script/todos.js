import {
    ToDo
} from './todo.js';

// empty todo list array
let todos = [];


//check local storage for exiting ToDo item
if (localStorage.getItem('todos')) {
    todos = JSON.parse(localStorage.getItem("todos"));
}

//update local stroage
let storageArray = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
}

//clean the input content.
let clean = () => {
    document.querySelector('#content').value = "";
}

//list Check 
let listCheck = (e) => {
    console.log(e.target.tagName);
    if (e.target.tagName === 'INPUT') {
        const id = parseInt(e.target.value);
        const todo = todos.find(todo => todo.Id === id);
        todo.Completed = !todo.Completed;
        console.log(todo);
        storageArray();
        location.reload();
    }
    if(e.target.tagName === "P"){
        const id = parseInt(e.target.value);
        const todo = todos.find(todo => todo.Id === id);
        todos.pop(todo);
        storageArray();
        location.reload();
    }
}

// Create li and in put content to ul
let setTodoList = () => {
    if (todos.length > 0) {
        let todoList = document.querySelector('#toDo');
        todoList.innerHTML = "";
        let finishedList = document.querySelector('#finished');
        finishedList.innerHTML = "";
        todos.forEach(
            (todo) => {
                if (todo.Completed === false) {
                    const li = document.createElement('li');
                    li.addEventListener('click', listCheck);
                    li.id = todo.Id;
                    li.innerHTML =
                        `
                    <div class = "check">
                        <input type = 'checkbox' 
                        value = "${todo.Id} ${todo.Completed ? "check": ""}" 
                        class = "checked">                        
                        ${todo.Content}
                    </div>
                    <div class = "x">
                        <p>x</p>
                    </div>
                    `
                    todoList.appendChild(li);
                } else {
                    const li = document.createElement('li');
                    li.addEventListener('click', listCheck);
                    li.id = todo.Id;
                    li.innerHTML =
                        `
                    <div class = "check">
                        <input type = 'checkbox' 
                        value = "${todo.Id} ${todo.Completed ? "check": ""}" 
                        class = "checked">                        
                        ${todo.Content}
                    </div>
                    <div class = "x">
                        <p>x</p>
                    </div>
                    `
                    finishedList.appendChild(li);
                }
                
            });
    }

}

//check local storage for exiting ToDo item
setTodoList();

// Add Button Even.
// take content and push to the todos array.
let button = document.querySelector('#addBtn');
let save = (event) => {
    //prevent form submiting
    event.preventDefault();
    const contentElement = document.querySelector("#content");

    if (contentElement.value === "") {
        alert('Please Enter your ToDo list!');
    } else {
        const newTodo = new ToDo(contentElement.value);
        todos.push(newTodo);
        console.log(todos);
        storageArray();
        setTodoList();
        clean();
    }
}
button.addEventListener('click', save);
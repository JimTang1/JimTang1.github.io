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
        //e.target.parentElement.innerHTML = "ho";
        const id = Number(e.target.value);
        const todo = todos.find(todo => todo.Id === id);
        //console.log(todo);
        todo.Completed = !todo.Completed;
        console.log(todo);
        storageArray();
        // location.reload();
    }
    
}

// Create li and in put content to ul
let setTodoList = () => {
    if (todos.length > 0) {
        //var txt = document.createTextNode("\u00D7");
        let todoList = document.querySelector('#toDo');
        todoList.innerHTML = "";
        let finishedList = document.querySelector('#finished');
        finishedList.innerHTML = "";
        todos.forEach(
            (todo) => {
                const li = document.createElement('li');
                li.id = todo.Id;
                if (todo.Completed === false) {
                    
                    li.innerHTML =
                        `
                <input type = 'checkbox' 
                value = "${todo.Id} ${todo.Completed ? "check": ""}" 
                class = "checked">                        
                ${todo.Content}`
                    todoList.appendChild(li);
                li.addEventListener('click', (e)=>{
                    todo.Completed =!todo.Completed;

                });

                } else {
                    // const li = document.createElement('li');
                    // li.addEventListener('click', listCheck);
                    li.innerHTML =
                        `
                <input type = 'checkbox' 
                value = "${todo.Id} ${todo.Completed ? "check": ""}" 
                class = "checked">                        
                ${todo.Content}`
                    finishedList.appendChild(li);
                }
            });
    }

}

//check local storage for exiting ToDo item
setTodoList();
//setTodoList(todos.filter())

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
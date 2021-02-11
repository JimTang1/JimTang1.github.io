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
    if (e.target.tagName !== 'LI') {
        //e.target.parentElement.innerHTML = "ho";
        const id = Number(e.target.value);
        const todo = todos.find(todo => todo.Id === id);
        todo.Completed = !todo.Completed;
        storageArray();
        console.log(todo);
    } 
    // else {
    //     e.target.innerHTML = 'test';
    // }
    // document.querySelector("li").innerHTML = "You click me";
}

// Create li and in put content to ul
let setTodoList = () => {
    if (todos.length > 0) {
        //var txt = document.createTextNode("\u00D7");
        let todoList = document.querySelector('#toDo');
        todoList.innerHTML = "";
        todos.forEach(
            (todo) => {
                const li = document.createElement('li');
                li.id = todo.Id;
                li.addEventListener('click', listCheck);
                li.innerHTML =
                    `
                <input type = 'checkbox' 
                value = "${todo.Id} ${todo.Completed ? "check": ""}" 
                class = "checked">                        
                ${todo.Content}`
                todoList.appendChild(li);
                
                
                // const checkboxs = document.querySelectorAll('input[type="checkbox"]');
                // checkboxs.forEach(
                //     checkbox => {
                //         checkbox.addEventListener('change', (e) => {
                //             const id = Number(e.target.value);
                //             const todo = todos.find(todo => todo.Id === id);
                //             todo.Completed = !todo.Completed;
                //             storageArray();
                //             console.log(todo);

                //         });
                //     }
                // )

                //     todoList.innerHTML +=
                //         `<li id = ${todo.Id}>
                // <input type = 'checkbox' value = "${todo.Id}" class = "checked" onclick = "listCheck()">                        
                // ${todo.Content}</li>`;

            });
    }
}

//check local storage for exiting ToDo item
if (localStorage.getItem('todos')) {
    todos = JSON.parse(localStorage.getItem("todos"));
}
setTodoList();
//setTodoList(todos.filter())

//document.querySelector(".checked").addEventListener('click', listCheck);

// Add Button Even.
// take content and push to the todos array.
let button = document.querySelector('#addBtn');
let save = (event) => {
    //prevent form submiting
    event.preventDefault();
    const contentElement = document.querySelector("#content");

    if (content === "") {
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
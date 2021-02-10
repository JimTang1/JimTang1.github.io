import {
    ToDo
} from './todo.js';

// empty todo list array
const todos = [];

if (localStorage.getItem('todos')) {
    const existingTodos = JSON.parse(localStorage.getItem("todos"));
}

//clean the input content.
let clean = () => {
    document.querySelector('#content').value = "";
}

// Create li and in put content to ul
let setTodoList= () =>{
    if(todos.length > 0){
        var txt = document.createTextNode("\u00D7");
        const todoList = document.querySelector('ul');
        todos.forEach((todo)=>{
            todoList.innerHTML += `<li id = ${todo.Id}>${todo.Content}</li>`;
        });
    }
    console.log(txt);
}


// Add Button Even.
// take content and push to the todos array.
let button = document.querySelector('#addBtn');
let save = (event) => {
    event.preventDefault();
    const content = document.querySelector("#content").value;
    if (content === "") {
        alert('Please Enter your ToDo list!');
    } else {
        const newTodo = new ToDo(content);
        todos.push(newTodo);
        console.log(todos);

        localStorage.setItem('todos', JSON.stringify(todos));
        setTodoList();
        clean();
    }
}
button.addEventListener('click', save);

// if (localStorage.getItem('todos')) {
//     const existingTodos = JSON.parse(localStorage.getItem("todos"));
// }

// function setTodoList() {
//     if (todos.length > 0) {
//         const todoList = document.querySelector('ul');
//     }
//         // todos.forEach((todo) =>{
//         //     todo => {
//         //         todoList.innerHTML += `<li>${todo.content}</li>`;
//         // });
//         // }
// }

// button.addEventListener('click', (event) => {
//     event.preventDefault();
//     const content = document.querySelector('#content').value;
//     const newTodo = new ToDo(content);
//     todos.push(newTodo);

//     localStorage.setItem('todos', JSON.stringify(todos));

//     setTodoList();

//     console.log(event);
// });
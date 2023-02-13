"use strict";
// document; // TypeScript automatically knows about the document object and its type
const btn = document.getElementById('btn');
const input = document.getElementById('todoinput');
// const form = document.querySelector("#todoform")
const form = document.querySelector('form');
const list = document.getElementById('todolist');
const readTodos = () => {
    const todosJSON = localStorage.getItem('todos');
    if (todosJSON === null)
        return [];
    return JSON.parse(todosJSON);
};
const todos = readTodos();
const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
};
const handleSubmit = (e) => {
    //TypeScript does not know the type of e here
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false,
    };
    createTodo(newTodo);
    todos.push(newTodo);
    // localStorage.setItem('todos', JSON.stringify(todos));
    saveTodos();
    input.value = '';
};
const createTodo = (todo) => {
    const newTodoText = todo.text;
    const newLI = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', () => {
        todo.completed = checkbox.checked;
        saveTodos();
    });
    newLI.append(newTodoText);
    newLI.append(checkbox);
    list.append(newLI);
};
todos.forEach(createTodo);
form.addEventListener('submit', handleSubmit);
// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     console.log("submit")
// })
// TypeScript can figure out the type of e by itself when we has an inline anonymous function
///////////////////////////////////////////////////////////////////
// btn.addEventListener('click', () => {
// 	// input.value
// 	// before using (as HTMLInputElement) --> error: Property 'value' does not exist on type 'HTMLElement'
// 	// (input as HTMLInputElement).value
// 	alert(input.value);
//     input.value = '';
//     // or we can also do this:
//     (<HTMLInputElement> input).value
// });
// //////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////
// // add ? here so if btn is null, we don't addEventListener
// btn?.addEventListener('click', () => alert('CLICK!'));
// // or:
// // this is a typescript thing, js doesn't have this
// ///////// non-null assertion operator  ! /////////
// const btnn = document.getElementById('btn')!;
// // ! tell typescript to stop worrying, this is guaranteed not to be null
// // a little bit risky though
// // we only use ! when we know for sure that a value will be found or that it won't be null
// ///////// Type assertion /////////
// // Sometimes, we might have more specific info about a value's type, and we want to make sure
// // TypeScript knows it too --> we can assert a value's type by using the 'as' ketword
// // followed by the specific type we want to assert
// let mystery: unknown = 'Hello world!';
// // const len = mystery.length  //error: 'mystery' is of type 'unknown'
// const len = (mystery as string).length;

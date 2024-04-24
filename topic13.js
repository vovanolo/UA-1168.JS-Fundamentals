// fetch("https://jsonplaceholder.typicode.com/todos")
//     .then(response => response.json())
//     .then(data => {console.log(data[0].title)})

// async function getTodos(){
//     let response = await fetch("https://jsonplaceholder.typicode.com/todos");
//     let data = await response.json();
//     console.log(data[2].title);
// }

// getTodos();

// let btn = document.getElementById("button");
// let todo = document.getElementById("todo");
// let todoid = document.getElementById("todoid")

// btn.addEventListener("click", () =>{
//     // fetch("https://jsonplaceholder.typicode.com/todos")
//     // .then(response => response.json())
//     // .then(data => {console.log(data[0].title)});

//     fetch("https://jsonplaceholder.typicode.com/todos")
//     .then(response => response.json())
//     .then(data => {
//         todo.innerHTML = `Todo title: ${data[0].title}`;
//     });
// })

// btn.addEventListener("click", () =>{
//     let todoNumber = Number(todoid.value);

//     fetch("https://jsonplaceholder.typicode.com/todos")
//     .then(response => response.json())
//     .then(data => {
//         todo.innerHTML = `Todo title: ${data[todoNumber - 1].title}`;
//     });
//     // console.log(typeof todoNumber);
    
// })

// btn.addEventListener("click", () =>{
//     let todoNumber = Number(todoid.value);

//     fetch(`https://jsonplaceholder.typicode.com/todos/${todoNumber}`)
//     .then(response => response.json())
//     .then(data => {
//         todo.innerHTML = `Todo title: ${data.title}`;
//     });
//     // console.log(typeof todoNumber);
    
// })
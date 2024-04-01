// console.log(window.innerHeight);
// console.log(window.innerWidth);


// let newWindow = window.open("", "", "width=400, height=400");


// newWindow.resizeTo(200,200);


// newWindow.close();


// function handleClick(){
//     console.log("click");
// }

// let title = document.querySelector(".title");


// title.onclick = function(){
//     console.log("click");
// }


// title.addEventListener("click", function(){
//     console.log("click");
// }) -- best practice


// function handleClick(){
//     console.log("click");
// }

// title.addEventListener("click", handleClick);


// title.addEventListener("click", function(event){
    // console.log(event);
    // console.log(event.target);

    // title.style.color = 'red'; - bad practice
    // event.target.style.color = 'red'; - best practice
    // console.log(event.type);

// })

// function handleEvent(event){
//     if(event.type === "click"){
//         console.log("element was clicked");
//     }
//     if(event.type === "mouseover"){
//         console.log("mouse over element");
//     }
// }


// title.addEventListener("click", handleEvent);

// title.addEventListener("mouseover", handleEvent)

// title.addEventListener("click", function(){

// })

// let title = document.querySelector(".title");

// let btn = document.querySelector(".btn");


// btn.addEventListener('click', function(){
//     title.style.color = 'green';
// })


// let btn = document.querySelector(".btn");

// let nameInput = document.querySelector("#name-input");

// let welcome = document.querySelector(".welcome")


// btn.addEventListener("click", function(){
//     // console.log(nameInput.value);
//     welcome.textContent = `Welcome ${nameInput.value}`;
// })

// let welcome = document.querySelector(".welcome")

// let registerForm = document.querySelector("#registerForm");

// registerForm.addEventListener("submit", function(event){
//     event.preventDefault();
//     // console.log("Register finished");
//     console.log(event.target.elements.login.value);
//     console.log(event.target.elements.password.value);
//     welcome.innerHTML = `
//         <h1>Welcome ${event.target.elements.login.value}</h1>
//         <h1>Your password: ${event.target.elements.password.value}</h1>
//     `
// })

// let title = document.querySelector(".title");


// setTimeout(function(){
//     // console.log("timeout action");
//     title.style.color = "green";
// }, 4000);




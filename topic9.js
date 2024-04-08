// function changeColor(color){
//     document.body.style.backgroundColor = color;
// }


// $(function(){

//     // $("#button").on("click", function(event){
//     //     // console.log(event.target);
//     //     // event.target.style.color = 'red';
//     //    $("#button").css("color", "red");
//     // })

//     $.ajax({
//         url: "https://jsonplaceholder.typicode.com/posts",
//         dataType: 'json',
//         success: function(posts){
//             // console.log(posts);
//             $.each(posts, function(index, post){
//                 console.log(post.title);
//             })
//         }
//     })


// })

// localStorage.setItem("name", "Volodymyr");


// console.log(localStorage.getItem("name"));

// localStorage.removeItem("name");

// localStorage.clear();

// let users = [{
//     name: "Volodymyr",
//     age: 28,
// },
// {
//     name: "Ivan",
//     age: 32,
// }, {
//     name: "Petro",
//     age: 11,
// }
// ];

// localStorage.setItem("users", JSON.stringify(users));

// console.log(JSON.parse(localStorage.getItem('users')));
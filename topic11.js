// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);


// setTimeout setInterval - асинхронні, макротаски

// setTimeout(function(){
//     console.log(1);
// }, 4000);


// setTimeout(function(){
//     console.log(1);
// });


// console.log(1);

// setTimeout(function(){
//     console.log(2);
// })


// console.log(3);

// function sum(a,b){
//     return a + b;
// }

// console.log(sum(2,2));

// function sum(a,b){
//     return new Promise(function(resolve,reject){
//         resolve(a + b);
//     })
// }

// // console.log(sum(2,2));

// sum(2,2).then((result) => {
//     console.log(result);
// })


// function sum(a,b){
//     return new Promise(function(resolve,reject){
//         if(a > 0){
//             resolve(a + b);
//         }else{
//             reject("Error happened");
//         }
//     })
// }

// console.log(sum(2,2));

// sum(2,2).then((result) => {
//     console.log(result);
// }).catch(error => {
//     console.log(error);
// })

// console.log("before promise");

// sum(2,2).then((result) => {
//     console.log(result);
// },(error) => {
//     console.log(error);
// });

// console.log("after promise");

// function sum(a,b){
//     return new Promise(function(resolve,reject){
//         if(a > 0){
//             resolve(a + b);
//         }else{
//             reject("Error happened");
//         }
//     })
// }

// sum(2,2).then((result) => {
//     console.log(result);
//     return result + 2;
// }).then((result) => {
//     console.log(result);
//     return result + 2;
// }).then(result => {
//     console.log(result);
// });

// sum(2,2).then((result) => {
//     console.log(result);
//     return sum(24,5);
// }).then(result => {
//     console.log(result);
// })

// sum(2,2).then((result) => {
//     console.log(result);
//     return new Promise((resolve, reject) => {
//         resolve(2);
//     })})
// .then(result => {
//     console.log(result);
// })

// sum(-2,2).then((result) => {
//     console.log(result);
// }).catch(error => {
//     console.log(error);
//     return sum(2,2);
// }).then(result => {
//     console.log(result);
// })

// import { number, array } from "./variables.js";


// console.log(number);

// console.log(array);
// let a = 5;

// let b = 6;

// let c = a + b;

// console.log(c);

// for(let i = 0; i< 10; i++) {
//     console.log(i);
// }

// console.log();

// printMe();

// try{
//     let x = 5;
//     let y = 6;
//     console.log(x + y);
// }catch(e){
//     console.log("Error happened");
// }

// try{
//     let x = 5;
//     let y = 6;
//     console.log(x + y);
//     printMe();
// }catch(e){
//     console.log("Error happened");
// }

// try{
//     printMe();
//     let x = 5;
//     let y = 6;
//     console.log(x + y);
// }catch(e){
//     console.log("Error happened");
// }

// try{
//     printMe();
//     let x = 5;
//     let y = 6;
//     console.log(x + y);
// }catch(error){
//     // error.name
//     // error.message
//     // error.stack
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);

// }

// console.log("hello");

// try{
//     let number = +prompt("Please enter a number");
//     if(number >= 0 && number <=100){
//         console.log(number);
//     }else{
//         throw new Error("Invalid number, number must be between 0 and 100");
//     }
// }catch(error){
//     console.log(error.message);
// }


// try{
//     let number = +prompt("Please enter a number");
//     if(number >= 0 && number <=100){
//         console.log(number);
//     }else{
//         throw new RangeError("Invalid number, number must be between 0 and 100");
//     }
// }catch(error){
//     console.log(error.message);
// }

// forEach, map, reduce, filter, find

// const numbers = [1,2,3,4,5,6,7,8,9,10];

// numbers.forEach(function(element, index, array){

// })

// numbers.forEach(function(element, index){
//     // console.log(element);
//     // console.log(index);
// })

// numbers.map(function(element, index){
//     // console.log(element);
//     console.log(`${element} : ${index}`);
// })

// let newNumbers = numbers.map(function(number){
//     return number + 10;
// })

// console.log(newNumbers);

// numbers.reduce(function(accumulator,element, index, array){

// })

// const result = numbers.reduce(function(sum,element){
//     return sum + element;
// }, 0);

// console.log(result);

// filter

// const newNumbers = numbers.filter(function(number){
//     return number % 2 === 0;
// })

// console.log(newNumbers);

// const result = numbers.find(function(number){
//     return number % 2 === 0;
// })

// console.log(newNumbers);

// const numbers = [1,2,3,4,5,6,7,8,9,10];


// const result = numbers.map(function(number){
//                             return number + 10;
//                         })
//                        .filter(function(number){
//                         return number > 15;
//                        })
//                        .reduce(function(sum,number){
//                         return sum + number;
//                        })

// console.log(result);

// const numbers = [8,2,6,9,3,5,9,1];

// // numbers.sort();
// numbers.sort(function(a, b){
// //    return a - b;
//     return b - a;
// })

// console.log(numbers);



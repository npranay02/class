// console.log("Hello, World!");
// var a=5;
// console.log(a);
// a=6;
// console.log(a);

// //functions in JavaScript
// //varible declaration
// //var
// function examplevar(){
//     var a=4;
//     console.log(a); //4
//     if(true){
//         var a=5;
//         console.log(a); //5
//     }
//     console.log(a); //?
// }
// examplevar();
//  a=5;
// console.log(a); 
// //let
// function examplelet(){
//      a='hello';
//     console.log(a); 
//     if(true){
//         let a="hii";
//         console.log(a); 
//     }
//     console.log(a); 
// }
// examplelet();
// //const
// function exampleconst(){
//     const a1=5;
//     console.log(a1); //5
//     //const a=6; // This will throw an error because 'a' is already declared as a constant
    
//     if(true){
//         const a1=6;
//         console.log(a1); //6
//     }
//     console.log(a1); //5
// }
// exampleconst();

// // Data Types in JavaScript
// // Primitive Data Types
//  a="surya";
// let b=25;
// // let c=fasle;
// let d;
// let e=null;
// let big=BigInt(1234567890);
// console.log(typeof a); //string
// console.log(typeof b); //string     
// // console.log(typeof c); //boolean
// console.log(typeof d); //undefined
// console.log(typeof e); //object
// console.log(typeof big); //bigint
// console.log(a);
// console.log(b);
// // console.log(c); 
// console.log(d); 
// console.log(e); 
// console.log(big); 

// // Reference Data Types
// // Object and Array
// let obj={a:4,b:"surya"};
// console.log(obj); 
// console.log(obj.a); //4
// console.log(obj["b"]); //surya
//  b=[1,2,3,4,5];
// console.log(b);
// console.log(b[0]); //1

// //loops
// //for loop
// for(let i=0;i<=5;i++){
//     console.log(i); 
// }

//while loop
let i=5;


//do while loop
let j=5;
do{
    console.log(j);
    j++;
}while(j<=5);
/*
//for of loop
let arr=[1,2,3,4,5];
for(let value of arr){
    console.log(value); //1 2 3 4 5
}
//for in loop
let obj1={a:1,b:2,c:3};
for(let key in obj1){
    console.log(key); //a b c
    console.log(obj1[key]); //1 2 3
}
//break and continue
for(let i=0;i<=5;i++){
    if(i===3){
        continue; //skip the iteration when i is 3
    }
    console.log(i); //0 1 2 4 5
}*/
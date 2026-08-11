// //! types of printing statements in javascript
// 1. console.log()
//document.write()<-- deprecated
//document.writeln()<-- deprecated
// console.log("external js")
//0. token: smallest unit of any progrramming languge there are four types of tokens in javascript

//1. keywords: keywords are reserved words that have special meaning in javascript. example: var, let, const, if, else, for, while, function, return, etc.

//2. identifiers: identifiers are names given to variables, functions, and other user-defined items. example: myVariable, myFunction, methods, variables, etc.

//3. literals: literals are fixed values that are used in the code. example: 10, "hello", true, false, null, undefined, etc.

//4. operators: operators are symbols that perform operations on variables and values. example: +, -, *, /, %, =, ==, ===, !=, !==, >, <, >=, <=, &&, ||, !, etc.

//5. datatypes: whch are used to define the type of data that can be stored in a variable. there are two types of datatypes in javascript

//a. primitive datatypes: primitive datatypes are the most basic data types in javascript. immutable (call by value).
//  number, string, boolean,undefined, null, bigint, symbol

//b. non-primitive datatypes: non-primitive datatypes are more complex data types that can store multiple values. mutable(call by reference). 
//  array, object, function

// var v1 = 'hello'
// console.log(v1, typeof v1);

//BOOLEAN
// var v2 = true
// console.log(v2, typeof v2);

//undefined
// var v3
// console.log(v3); //UNDEFINED CAUSE WHEN WE HAVE VARIABLE BUT NOT ASSIGN ANY VALUE
//console.log(v) NOT DEFINED CAUSE VARIABLE IS NOT DEFINED

//when the system give null value for variable that is been not assign to any value 
//rest when the user defined the variable null then it is said to null datatype

//NULL
// var v4 = null
// console.log(v4, typeof v4);

//bigint: (-2^53 - 1 to 2^53 -1)
// var v5 = 9n
// console.log(v5, typeof v5);

//symbol
// var v6 = Symbol('hello')
// console.log(v6, typeof v6);
// var v7 = Symbol('elo')
// console.log(v7, typeof v7);

// console.log(v6 == v7);
// console.log("10" == 10);
// console.log("10" === 10); //strict equality operator


//!mutable vs immutable

// var arr = [10, 20, 30];
// arr[0] = 100;
// console.log(arr); // [100, 20, 30] - mutable

// var str = "hello";
// str[0] = "x";
// console.log(str); // "hello" - immutable


//!(gec:)
// global execution context: it is the default execution context in javascript. it is created when the javascript engine starts executing the code. it is created only once and it is destroyed when the code execution is completed. it has two phases: creation phase and execution phase.

//dom doument object model: it is a programming interface for web documents. it represents the page so that programs can change the document structure, style, and content. the dom represents the document as nodes and objects. that way, programming languages can interact with the page.

//types of variables
//global variable: global variables are declared outside of any function or block. they can be accessed from anywhere in the code. they are created in the global execution context and are destroyed when the code execution is completed.
//local variable: local variables are declared inside a function or block. they can only be accessed from within that function or block. they are created when the function or block is executed and are destroyed when the function or block is completed.

//! ways sto define variables in javascript
//var
// let -- introduced in es6
// const -- introduced in es6

//! difference between var, let and const

//                         var    let    const
// declare                  yes    yes     yes
// redeclare                yes    no      no
// declare& initialise      yes    yes     yes
// re declare               yes    no      no
// re initialise            yes    yes     no
// redeclare& reinitialise  yes    no      no



// var example 
// var x;
// console.log(x);

// x = 10;
// console.log(x);

// var y = 20;
// console.log(y);

// x = 30;
// console.log(x);

// let example
// let a;
// console.log(a);

// a = 10;
// console.log(a);

// let b = 20;
// console.log(b);

// a = 30;
// console.log(a);
 
// let y = 200

//const example
// const limit = 100;
// console.log(limit);
//limit = 40; // This will throw an error

//temporal dead zone (TDZ): The temporal dead zone is a behavior in JavaScript where variables declared with let and const cannot be accessed before they are declared. This means that if you try to access a variable before its declaration, you will get a ReferenceError. The TDZ exists from the start of the block until the variable is declared.
//tdz allows in let and const but not in var. var is hoisted to the top of its scope and initialized with undefined, while let and const are hoisted but not initialized. This means that if you try to access a let or const variable before its declaration, you will get a ReferenceError.

// console.log(a);//ud duw to hosting
// var a = 10;
// console.log(a); //10


// https://www.google.com/search?client=ubuntu-sn&channel=fs&q=hoisting+in+javascript



// ====================================================================
       //! SCOPES
// ====================================================================
// Global variables                                                     Local variables
//             |                                                               |
//   -------------------------                                    ----------------------------------
//   var  ||  let   ||   char                                 conditionals/loops     ||       functions 
//             |                                                       |                           |
//  --------------------------                                   --------------              --------------------- 
//  |                        |                                  |             |              |                   |
//  Global Scope           Script scope               Global variables   Local variables   Global variables   Local variables
//                                                            |               |                   |                  |
//                                                           var          let,const              None            var,let,const


// var a1 = 10;
// let a2 = 20;
// const a3 = 30;
// console.log(a1,a2,a3);
// if (100>10){
//     var b1 = 100;
//     let b2 = 200;
//     const b3 = 300;
// }
// console.log(b1);

// function demo(){
//     var c1 = 1000;
//     let c2 = 2000;
//     const c3 = 3000;
// }
// demo();
// console.log (c1) <----- undefined

// ====================================================================
     //! FUNCTIONS
// ====================================================================
// 1)NamedFunction: function which has name 
// Note --> Function hoisting is ony possible in named functions 
// greet(); <--- due to hoisting


// function greet(){
//     console.log("Welcome");
// }
// greet();


// GEC(Global Execution context)
// console.log("START");
// console.log(a);
// student();
// console.log(a);
// function student(){
//     let b=20;
//     console.log(b);
// }
// student();
// console.log(a);
// console.log("END");




// 2)AnonymousFunction: function without name 
// function (){}



// 3)Function Expression: used to call anonymous function
// let f1 = function(){
//     console.log("Hiiii")
// };
// f1()



// 4) Function with Aruguments and Parameters scope of parameter global
function sum(n1 = 0 ,n2 = 0, n3 = 0){
    console.log(arguments);
    console.log(n1 + n2);
};
sum(10,20, 30);


// arguments


// let name="Rukhsar";
// console.log(name);

//*function calling (Refrence:Thapa technical advanced javascript playlist video of this keyword)
// function greet(name){
//     console.log('hello world'+' '+ name)
//     console.log(this);
// }

// greet('rraapmonster');



//*creating function inside an object(Refrence:Thapa technical advanced javascript playlist video of this keyword)
// const object={
//     name:'Rukhsar',
//     qualif:'BscIT',

//     sum:function(){
//         let add=2+2;
//         console.log('Sum of 2 no. is '+add);

//         console.log(this);
//     }

// }

// object.sum();

//*HOISTING IN JAVASCRIPT
// function sum(num1,num2){
//     let add=num1+num2;
// console.log('Sum of 2 no. is '+add);
// }

// sum(8,10);
//*Hoisting: if a fuction is declare as varialble and call before function creation it will give error (Uncaught TypeError)
//*And if fuction call is after declaration of variable it will run properly
// sum(8,10);
// var sum= function(num1,num2){
//     let add=num1+num2;
// console.log('Sum of 2 no. is '+add);
// }

//*if the function is written inside a parantheses hosting it will throw an error of (Uncaught TypeError)
// (function sum(num1,num2){
//     let add=num1+num2;
// console.log('Sum of 2 no. is '+add);
// })
// sum(8,10);

//*Scope Chain & Lexical Scoping in Javascript

// var a="hello guys..";

// function first(){
//     var b="How are you?...";
//     second();

//     function second(){
//         var c="Myself Rukhsar Fatma";
//         console.log(a+b+c);
//         three();
//     }
// }

// function three(){
//     var d="Learn Advanced JavaScript";
//     console.log(a+b+c+d);
// }
// first();

//*Use Strict mode in javascript
// "use strict"
// function sum(a,a){
//     var add=a+20;
//     console.log(add);
// }
// sum(10,10);
//*Everthing is object in javascript function is also an object in javascript
// "use strict"
// function sum(a,b){
//     var add=a+b;
//     console.log(add);
// }
// sum(10,10);

// sum.functionisalsoobject="This function is object too";
// console.log(sum.functionisalsoobject);

// console.log(typeof function(){});

//*Everthing is object in javascript function is also an object in javascript

// const array=[1,2,3];
// console.log(array);
// console.log((Array.isArray(array)));

// const arrayobj={
//     0:1,
//     1:2,
//     2:3,

// }
// console.log(arrayobj);
// console.log((Array.isArray(arrayobj)));

//*pass by value and reference

// let a=5;
// let b=a;

// console.log(a);
// console.log(b);

// let array1=[1,2,3];
// console.log(array1);

// let array2=[].concat(array1);
// array2.push(5);
// console.log(array2);


//*ECMA 6 
function check() {
    let num1 = 10;   //*declare variable using let 
    if (true) {
        let num1 = 20;
        console.log(num1); //*let is blocked scoped matlab ye block ke andar change hua hai sirf
    }
    console.log(num1);//*yah call kiya to jo decalare kiya tha start me num1 wo hi value dikhega

}

check();
function checks() {
    var num2 = 100; //*declare variable using var
    if (true) {
        var num2 = 200;
        console.log(num2);//* var ka value change kiya yaha par 
    }
    console.log(num2);//*toh yaha par change value hi dikhta hai assign value fir wo nahi leta hai

}

checks();


//*ECMA Destructuring
// const profile={
//     name:'Rukhsar',
//     age:'22',
//     born:'Mumbai',
// }

// console.log(profile);
// console.log(profile.age);


// const {age,born,name}=profile;

// console.log(age);
//  let showProfile='My name is'+name+'My age is'+age+'I was born in'+born;

//*Template Strings in ECMA6
//  let showProfile2=`My name is ${name}. My age is ${age}. I was born in ${born}.`;
//  console.log(showProfile);
//  console.log(showProfile2);


//*Default Argument of Age
// function Age(ages=18){return ages;}


//* Object Properties we are using above object profile value in this 
// const obj={name,age,born}; //since we have alrweady declare above we can use it here bcz of ecma
// console.log(obj);

// let addsum=(a,b)=>{
//     return a+b;

// }

// console.log(addsum(9,10));

//*First Class Citizen function1
const myName = () => {
    return 'Hello fellow developer';
}

const greeting = (sayHii, Name) => {
    console.log(sayHii(), Name);

}

greeting(myName, 'Rukhsar');


//*First Class Citizen function2: returning function :key concept of functional programming 
function function1() {
    return function function2() {
        console.log("Always boost your sterotine")
    }
}

//*call a function inside a function within it
function1()();

//*2nd method to call a function inside a function:it will function2 automatically AS we have our function1 as a const c
const function3 = function1();

function3();

 //*CALLBACK Function in javascript
 //*First Example of call back
// const perOne=(friend)=>{
//     console.log(`I am busy now.I am talking to ${friend}. I will call back you late`);
// }

// const perTwo=()=>{
//     console.log(`Hey whats up. I call back you dekha.`);
// }


// perOne('salman');

// perTwo();


//*Second Example of call back with an function peopleTwo pass as an argument in function called peopleOne with setTimeout of function greet()
// const peopleOne=(friends,callfrnd)=>{
//     console.log(`hey Congratulation ${friends}.`);
//     callfrnd();
//     setTimeout(greet,3000);
   
// }

//  const peopleTwo=()=>{
//     console.log(`You get a job`);
    
// }

// const greet=()=>{
    
//     console.log(`Save Journey`);
// }


// peopleOne('salman',peopleTwo);


//*Callback hell (Nested call back)
//*API
//1: 2s student roll no.
//2: 2s 2nd name and age
//3: 2s gender


// const getRollNo=()=>{
//     setTimeout( ()=>{
// console.log('API getting roll no');
// let roll_no=[1,2,3,4,5];
// console.log(roll_no);

// setTimeout((rollno)=>{
// const biodata={
//     name:'rukhsar',
//     age:'22'
// }
// console.log(`my roll no is ${rollno} my name is ${biodata.name} and I am ${biodata.age} year old`);

// setTimeout(()=>{
//   biodata.gender='female';
//   console.log(`My name is ${biodata.name} my gender is ${biodata.gender}`);
// },2000,biodata.name);//third  gender call

// },2000,roll_no[1]); //second 2nd array name and age call
    
// },2000); //fisrt student roll no call
// }

// getRollNo();

//*promise in javascript with function constructor
const pobj1=new Promise((resolve,reject)=>{

    setTimeout(()=>{
        let roll_no=[1,2,3,4,5];
        resolve(roll_no);
        // reject('Error while communicating');
        

    },2000);
});

//*promise as an object 
const getBiodata=(indexdata)=>{
    return new Promise((resolve,reject)=>{

        setTimeout((indexdata)=>{
            let biodata={
                name:'Sahil',
                age:20
            }
            resolve(`My roll no is ${indexdata}. My name is ${biodata.name} and I am ${biodata.age} years old`);
        },2000,indexdata); //step 1: we are pass roll in indexdata
    })
}

pobj1.then((rollno)=>{
    console.log(rollno);
    return getBiodata(rollno[1]);
}).then((kuchbhi)=>{
    console.log(kuchbhi);
})
.catch((error)=>{
 console.log(error);
});



// console.log("working ho raha hai");
// let a=10;
// let b=20;
// console.log(a+b);
// let c=a+b;

// console.log(null)

// function print(){
//     console.log("Hello didi") 
// }

// function say(a){   // call back function
//     a();
//     console.log(a) 

// }

// say(print);  // high ordered function

// arrays == list 
// let arr=[10,"HELLO",12.5,'A',true];

// objects  == dic

// let dic={
//     jagu:14,
//     bheem:25,
//     indu_mati:20,
//     raju:5,
//     kalliya:25,
//     varis:{
//         sanik:12,
//         indu:15
//     },
//     a:function (){
//         return "hello"
//     }
// }
// console.log(dic.a())

// for loop 

// for(let i in dic){
//     console.log(dic[i])
// }

// console.log("1");

// setTimeout(function (){
//     console.log("Hello")
// },0);
// console.log("2");
// setTimeout(function (){
//     console.log("Hello")
// },1000);

// console.log("3");

// setTimeout(function (){
//     console.log("Hello")
// },3000);

// console.log("end");




// setInterval(function (){
//     console.log("hello")
// },2000);

// let id=setInterval(function (){
//     console.log("Hello")
// },1000);


// console.log(id);

// setTimeout(function (){ 
//     clearInterval(id);
//     console.log("Interval cleared")
// },1000);


// map function 

// let arr=[1,2,3,4,5,6];

// let newarr=arr.map(function(value){

//     if (value%2==0){
//         return value;
//     }
    
    
// })

// console.log(newarr);


// filter function


// let arr1=[1,2,3,0,4,5];

// let newarr1=arr1.filter(function(value,idx){ //falsay truthy values par depand karta hai

//     if (value%2==0){
//         return true;
//     }   
// })

// console.log(newarr1);


//Ternari opertor

// let a=10;
// let b=3;

// a<b ? console.log("Hai") : console.log("nhi hai");

// let a=document.querySelector('h1');
// console.log(a.innerText);
// console.dir(a);

// setTimeout(function(){
//     a.innerText="after 2 sec bad";

// },2000);

// a.addEventListener('click',function(){
//     a.innerText='This is not a magic It is logic';
//     a.style.color='red';
// })

// let a=document.querySelector('h1');
// function check(){
//     console.log('clicked');
//     console.log(a.innerText);
//     if (a.innerText=='X'){
//         a.innerText='0';
//     }
//     else{
//         a.innerText='X';

//     }

// }
// a.addEventListener('click',check);

// let a = document.getElementsByClassName('btn');
// console.log(a);

// let b=document.getElementsByTagName('h1');
// console.log(b);


// let arr=document.querySelectorAll('li');

// console.log(h1.innerHTML);
// console.log(h1.innerText);
// console.log(h1.textContent);
// h1[0].style.color='red';
// h1[1].style.color='pink';
// h1[2].style.color='purple';
// h1[3].style.color='blue';

// for(let idx in arr){
//     console.log(arr[idx].innerText);
// }

let a=document.querySelector(".div");
let b=document.querySelector(".btn");

function check(){
    let red = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let rgb=`rgb(${red},${blue},${green})`;
    a.style.backgroundColor=rgb;
   
   
    
}

b.addEventListener('click',check);




































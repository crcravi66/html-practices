/*const password = prompt("ENTER THE PASSWORD");

if (password.length >= 6){
  if (password.indexOf(" ") === -1){
    console.log("valid password")
  }else {
    console.log("passwod connot container space")
  }
} else  {
   console.log("your password is very short")
}*/


/*const num = 7;
const day = num;
switch (day)
{
  case 1:
    console.log("Monday!");
    break ;
  case 2:
    console.log("Tuesday!");
    break;
  case 3:
    console.log("Wednesday!");
    break;
  case 4:
    console.log("Thursday!");
    break;
  case 5:
    console.log("friday!");
    break  
  case 6:
    console.log("saturday!");
    break;
  case 7:
    console.log("sunday!");
    break;
  }*/

  /*const letters = ["a", "b", "c"];

  const alphaNumeric = letters.concat('a', 'b','c', [2, 3]);
  
  console.log(alphaNumeric);*/

  /*for (let i = 0; i < 40; i += ) {
    console.log();
}*/
     
/*for (let i = 100; i >= 0; i -= 10) {
  console.log(i);
}*/

/*let animals=['tiger','lion','bears'];

for (let i = 0; i < animals.length; i++) {
  console.log(i, animals[i] );
  for (let j = 1  ; j < 6; j++) {
    console.log( 'Name is :', j );
  } 
} */

/*let students=[
  ['hari', 'ram', 'arun', 'shantheep'],
  ['subbhu', 'raj', 'hari', 'siva'],
  ['mathvan', 'jeggi', 'kumuran', 'ram'],
  ['vijay', 'abi', 'muthu', 'raj']
]
for (let i = 0; i < students.length; i++){
  const row = students[i];
  console.log(`head ${i + 1}`);
 
  for(let j = 0; j < row.length; j++){
    console.log(  row[j] )
  }
}*/
/*
const secret ="hai";

let guess = prompt("enter the password...");
while(guess !== secret){
  guess = prompt("enter the password...")
}
console.log("congrats correct password")
*/
/*
let input = prompt("say something ");
while(true) {
  input = prompt(input);
  if (input.toLowerCase() === "stop") {
    break;
  }
}
console.log("you win");
*/

/*
let maximum = parseInt(prompt("Welcome enter your max num :"));
 while(!maximum) {
     maximum = parseInt(prompt("enter a valid num"));
  }

  const targetNum = Math.floor(Math.random() * maximum) + 1;
  console.log(targetNum);

  let guess = parseInt(prompt("enter your guess first num "));
  let atterms = 1;

  while(guess !== targetNum){
    atterms++ ;
    if(guess > targetNum){
      guess = parseInt(prompt("your guess num is high"))
    } else{
      guess = parent(prompt("you guess num is low"))
    }
    console.log("you got it")
  }*/
 
/*
  let input = prompt("what do you like to do");
  const todos = ['collect chicken eggs', 'clean latter box'];

  while(input !== 'quit' && input !== 'q') {
    if(input === 'list') {
       console.log('sdfgsdg')
       for (let i = 0; i < todos.length; i++){
          console.log(`${i} : ${todos[i]}`);
       }
       console.log('sdfgsdg')
    } else if ( input === 'new') {
        const todosNew = prompt('add a new list');
        todos.push(todosNew);
        console.log(`${todosNew} added to new list!`);
      } else if (input === 'delete') { 
          const deleteTodo = prompt("enter the delete list");
          const deletelist = todos.splice(deleteTodo, 1);
          console.log(`${deletelist[0]} is deleted`);  
      }

    input = prompt("what do you like to do") 
      
  }
  console.log("ok you quit app!")
*/

/*

function repeat(str, runTime) {
 *  let result = '';
  for (let i = 0; i < runTime; i++) {
    result += str; 
  }
  console.log(result);
}

function next(one, numTime){
  let ans = "";
  for (let  i = 0; i < numTime; i++){
    ans += one;
  }
  console.log(ans)
}*/
/*
const person = {
      first : 'arun',
      last : 'pandi',
      fullname() {
        return `${this.first}  ${this.last}` 
      }
}
person.fullname()
person.last = 'kumar' ;
person.fullname() */
/*
const id = setInterval(() => {
    console.log(Math.random())
},2000);
*/
/*
const prices = [21, 2.3, 43, 4.3, 34.4, 7];

let totalPrice = prices.reduce((total, price) => {
  return total + price
}
)
*/

// const allLi = document.querySelectorAll('ul');
//   for (let lines of allLi) {
//       lines.style.color = 'rgb(10, 250, 10)';
//       lines.style.fontSize = '3rem';
//       lines.style.textTransform = uppercase ;
//   }

// window.getComputedStyle('h1').color

// let randomNum = Math.random();
// if (randomNum < 0.5) {
//   console.log(randomNum)
//   console.log(`num is low : ${randomNum}`);
// } 
//   else if (randomNum > 0.5) {
//      console.log(`num is high : ${randomNum}`);
//     }
//     else if(randomNum === 0.5) {
//          console.log(`num is equal : ${randomNum}`);
//         }
//         else {
//           console.log(`not a num`);
//         }


let passwod = prompt("enter a password");
if (passwod.length >= 6 && passwod.indexOf(" ") === -1) {
          console.log("good job valid password")
    }
     else if (passwod.length < 6 && passwod.indexOf(" ") === -1){
      console.log("low password and no insert space")
    }
    else if (passwod.length >= 6 ) {
    console.log("low password ");
    } 
    else{
    console.log("another")
    }
   
const dateNum = parseInt(prompt("Enter the day num for 1 to 7"));
switch (dateNum) {
  case 1 :
    console.log("Week started day is  Monday ");
    break;
  case 2 :
    console.log("This is Tuseday");
    break;
  case 3 :
    console.log("Wednesday");
    break;
  case 4 :
    console.log("Thursday");
    break;
  case 5 :
    console.log("Friday");
    break;
  case 6 :
    console.log("saturday");
    break;
  case 7 :
    console.log("Happy Sunday");
  }

  const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

// function isCherries(fruit) {
//   return fruit.quantity === 5;
// }

// console.log(inventory.find(isCherries));
// { name: 'cherries', quantity: 5 }
// let fruit = 
const names = inventory.find(({name}) => name === prompt("Enter fruit name"));
console.log(names)
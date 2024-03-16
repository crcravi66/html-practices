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
 

  // let input = prompt("what do you like to do");
  // const todos = ['collect chicken eggs', 'clean latter box'];

  // while(input !== 'quit' && input !== 'q') {
  //   if(input === 'list') {
  //      console.log('sdfgsdg')
  //      for (let i = 0; i < todos.length; i++){
  //         console.log(`${i} : ${todos[i]}`);
  //      }
  //      console.log('sdfgsdg')
  //   } else if ( input === 'new') {
  //       const todosNew = prompt('add a new list');
  //       todos.push(todosNew);
  //       console.log(`${todosNew} added to new list!`);
  //     } else if (input === 'delete') { 
  //         const deleteTodo = prompt("enter the delete list");
  //         const deletelist = todos.splice(deleteTodo, 1);
  //         console.log(`${deletelist[0]} is deleted`);  
  //     }

  //   input = prompt("what do you like to do") 
  // }
  // console.log("ok you quit app!")


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

// let passwod = prompt("enter a password");
// if (passwod.length >= 6 && passwod.indexOf(" ") === -1) {
//           console.log("good job valid password")
//     }
//      else if (passwod.length < 6 && passwod.indexOf(" ") === -1){
//       console.log("low password and no insert space")
//     }
//     else if (passwod.length >= 6 ) {
//     console.log("low password ");
//     } 
//     else{
//     console.log("another")
//     }
   
// const dateNum = parseInt(prompt("Enter the day num for 1 to 7"));
// switch (dateNum) {
//   case 1 :
//     console.log("Week started day is  Monday ");
//     break;
//   case 2 :
//     console.log("This is Tuseday");
//     break;
//   case 3 :
//     console.log("Wednesday");
//     break;
//   case 4 :
//     console.log("Thursday");
//     break;
//   case 5 :
//     console.log("Friday");
//     break;
//   case 6 :
//     console.log("saturday");
//     break;
//   case 7 :
//     console.log("Happy Sunday");
//   }

//   const inventory = [
//   { name: "apples", quantity: 2 },
//   { name: "bananas", quantity: 0 },
//   { name: "cherries", quantity: 5 },
// ];

// function isCherries(fruit) {
//   return fruit.quantity === 5;
// }

// console.log(inventory.find(isCherries));
// { name: 'cherries', quantity: 5 }
// let fruit = 
// const names = inventory.find(({name}) => name === prompt("Enter fruit name"));
// console.log(names)



// let students =[
//   ['arun', 'ravi','ram'],
//   ['jeggi', 'shantheep', 'hari'],
//   ['tom', 'siva', 'mathavan', 'bharathi'],
//   ['raj', 'subbhu']
// ];


// for (let i = 0; i <= students.length; i++){
//   console.log(` groups = ${i + 1}`);
//   let studentsNames = students[i];
//     for (let j = 0; j <= studentsNames.length; j++){
//       console.log(`#${j} : ${studentsNames[j]}`)
//     } 
//}

            //total & avg

// let studentsMarks = {
//   arun : 88,
//   ram : 89,
//   jarunk: 78,
//   shandtheep : 75,
//   hari :86,
//   bharthi : 65,
//   siva : 75,
//   raj : 97,
//   subhbhu : 98,
//   mathavan : 68,
// }
// let avg = Object.values(studentsMarks);
// let total = 0 ;
// for(marks in studentsMarks){
//   console.log(`${marks} : ${studentsMarks[marks]}`)
//   total += studentsMarks[marks]; 
// }
// console.log(`Total : ${total}`);
// console.log(`AVG :${total / avg.length}`) 

                        // practices for whileloop


// let input = prompt("what would you like at ")
// let todos = ["hello there","hi there"]
// while(input !== 'quit' && input !== "q") {

//   if (input === "list"){
//     for (i = 1; i <= todos.length; i++){
//          console.log(`${i} = ${todos[i]}`);   
//     }
//   } else if(input === "new"){
//     let addlist = prompt("enter your add new Todo list")
//     todos.push(addlist);
//     console.log(`added for : ${addlist}`)
//   } else if(input === "delete"){
//     let deletedlist = parseInt(prompt("enter your deleted list"))
//     if(!Number.isNaN(deletedlist)){
//        let deleted = todos.splice(deletedlist,1)
//        console.log(`ok ${deleted}`);
//     }else{
//       console.log("unkown deleted");
//     }
//   }
//   input = prompt("what would you like at ")
  
// }
// console.log("Ok, you quit")
                                // call,bind,apply methods

// let details = {
//   name : "arun",
//   addition : function(x, y){
//     return x + y;
//   },
//   square (num){
//     return (num * num );
//   },
//   cube (num){
//     return (num ** 3);
//   },
//   callers : function (){
//     console.log(this.name);
//   }
// }
// details.callers();

// let details2 = {
//   name : "pandi"
// }

// details.callers.call(details2);


                              // for each

const movies = [
    {
      tittle : "Amadeus",
      score : 80
    },    
    {
      tittle : "Stand By Me",
      score : 90
    },
    {
      tittle : "Parasite",
      score : 95
    },
    {
      tittle : "Alien",
      score : 96
    },
    {
      tittle : "Jack Sparrow",
      score : 85
    },
    {
      tittle : "Scarlet",
      score : 75
    }
]
movies.forEach(function(movie){
  console.log(`${movie.tittle} - ${movie.score}/100`);
})

let newMovies = [];
let newMoviesList = movies.forEach((items) => {
  newMovies.push(items); 
})

            //map methods
let tittles = movies.map(function (movie) {
    return movie.tittle.toUpperCase();  
})
console.log(tittles)
        
          // Arrow function
let rating = movies.map(scores => `${scores.tittle} : ${scores.score/10}`)




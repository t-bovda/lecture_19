'use strict'


// let age = 67;
// let answer;
// if(age <= 17){
//     answer = "Do you study at school?";
// } else if (age < 25 && age > 17){
//     answer = "Do you study at university?";
// } else if (age < 65 && age >= 25){
//     answer = "“Do you have a job?";
// } else {
//     answer = "“What are you doing?";
// }
// console.log(answer);

        //   **********

// let age = prompt("How old are you", '');
// let answer;
// if(age <= 17){
//     answer = "Do you study at school?";
// } else if (age < 25 && age > 17){
//     answer = "Do you study at university?";
// } else if (age < 65 && age >= 25){
//     answer = "“Do you have a job?";
// } else {
//     answer = "“What are you doing?";
// }
// // alert(`${answer}`);
// confirm(`${answer}`)? alert("Ok") : prompt("How old are you", '');








// let valueDisplay = `none`
// switch(valueDisplay){
//     case `block`:
//         console.log(`Display:block`);
//         break;
//     case `flex`:
//         console.log(`Display:flex`);
//         break;
//     case `grid`:
//         console.log(`Display:grid`);
//         break;
//     case `inline`:
//         console.log(`Display:inline`);
//         break;
//     case `none`:
//         console.log(`Display:none`);
//         break;
//     default:
//         console.log(`Set 'display: inline-block'`);
//  }

            // ******************************

//  let valueDisplay = prompt('Name the value of CSS power Display', 0)
//  switch (valueDisplay.toLowerCase()) {
//      case `block`:
//          alert('Display:block');
//          break;
//      case `flex`:
//          alert('Display:flex');
//          break;
//      case `grid`:
//          alert("Display:grid" );
//          break;
//      case `inline`:
//          alert('Display:inline' );
//          break;
//      case `none`:
//          alert('Display:none');
//          break;
//      default:
//          alert(`Set 'display: inline-block'`);
//   }
 



                //  *********************




// let age = '1f';
// let sum = (+age * 12);
// let answer;
// if( +age){ 
//     answer = (`${age} by 12 quals ${age * 12}`);
// } else {
//     answer = "Your number is incorect, please enter corect number";
// }
// console.log(answer);           


// let age = prompt("Please enter the number", '');
// let sum = (+age * 12);
// let answer;
// if( +age){ 
//     answer = `${age}$ by 12 quals ${sum}$`;
// } else {
//     answer = "Your number is incorect, please enter corect number";
// }
// alert(`${answer}`)


let age = +prompt("Please enter the number", "");

while (!age || age < 1) {
  age = +prompt("Your number is incorect, please enter corect number", "100");
  age = +(age);
}
let sum = +age * 12;
let answer = `${age}$ by 12 quals ${sum}$`;
alert(answer);





                // ***********************




// for (let index = 2; index <= 50; index++) {
//     if(index % 2 == 0) {
//         console.log(index); 
//     }
// }

// *****

// for (let index = 2 ; index <= 50; index++) {
//     if(index % 2 == 0) {
//         alert(index)
//     }
// }

// ***

// let index = prompt("Please enter a number from 2 ", '0');
// let indexMax = prompt("Please enter a number up to 50", '50');
// for ( +index ; index <= +indexMax; index++) {
//     if(index % 2 == 0) {
//         alert(index)
//     }
// }   як вивесті всі числа разом а не по одному


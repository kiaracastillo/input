/*
Kiara Castillo magallanes
Input exercises
Greeter
10/16/2022
*/

//Greeter
/*
Create an page with an input, and a button. When the button is clicked,
 output the phrase "Hello {Name}" to the developer console, with {Name} 
 being the value the user put into the input field. */

 let inputName = document.getElementById("username");

 function greeting() {
     let greetName = inputName.value;
     console.log("hello " + greetName);
 
     inputName.value = "";
 }
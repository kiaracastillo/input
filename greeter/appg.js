/*
Kiara Castillo magallanes
Input exercises
Greeter
10/16/2022
*/

let inputName = document.getElementById("username");

function greeting() {
    let greetName = inputName.value;
    console.log("hello " + greetName);

    inputName.value = "";
}
/*
Kiara Castillo Magallanes
NUmber g
10/16/2022

*/

let txtName = document.getElementById("txtName");
let dvResult = document.getElementById("dvResult");

function generateGuess() {
    let num = 12; 
    let userNum = Number(txtName.value);
    
    if (userNum > num) {
        document.getElementById("dvResult").innerHTML = "too high!";
    } else if (userNum < num) {
        document.getElementById("dvResult").innerHTML = "too low!";
    } else if(userNum == num) {
        document.getElementById("dvResult").innerHTML = "correct!";
    }
}
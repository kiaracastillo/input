/*
Kiara Castillo Magallanes
Input exercices
Password Protected
10/16/2022


*/
inFirst = document.getElementById("first")
inSecond = document.getElementById("second")
dvOutcome = document.getElementById("outcome")
function submit(){
    if (inFirst.value == "Username" && inSecond.value == "Password"){
        dvOutcome.innerHTML = "Success"
    }else{
        dvOutcome.innerHTML = "Wrong Information"
    }
}
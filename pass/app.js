/*
Kiara Castillo Magallanes
Input exercices
Password Protected
10/16/2022


*/

/*
Create an application with two input fields and one button.

When the button is clicked, verify the user has written these 
(exact) strings in the first and second field:
First field should be  "Username"
Second field should be  "Password"
*/
//Password Protected
function password() {
    let passWord = txtWord.value;
    let word = `monkey`;
    txtWord.value = "";
  
}

function username(){
    let userName = txtName.value;
    let name = `Mmmm`;
    txtName = "";
}
if( (name == "Mmmm") && (word == "monkey") ) {
    let display = `Success`;
} else{let display = `wrong information`;}



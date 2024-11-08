
let User_Admin_Name = "Arpit";
let User_Admin_Pass = "Arpit123";


function validate(){

    user = document.getElementById("username").value;
    pass = document.getElementById("password").value;

    console.log(user)
    console.log(pass)


    if(user == User_Admin_Name && pass == User_Admin_Pass){
        window.open("http://127.0.0.1:3000/ASSESSMENT/Assessment1_MERN_CSEAIMLB/currency.html")
    }

    else{
        alert("Invalid User");
    }
}
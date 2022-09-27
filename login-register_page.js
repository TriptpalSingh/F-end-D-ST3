var info = {
    "fname":"",
    "lname":"",
    "add":"",
    "pin":"",
    "num":"",
    "email":"",
    "password":""
}

var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var add = document.getElementById("add");
var pin = document.getElementById("pin");
var num = document.getElementById("num");
var email = document.getElementById("email");
var password = document.getElementById("the_last_one");

$("#btn").click(function(){
    info["fname"] = fname.value;
    info["lname"] = lname.value; 
    info["add"] = add.value;
    info["pin"] = pin.value;
    info["num"] = num.value;
    info["email"] = email.value;
    info["password"] = password.value;

    console.log(info);

    localStorage.setItem("info", JSON.stringify(info));


})
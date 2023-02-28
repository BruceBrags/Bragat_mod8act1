var name = prompt("What is your name?")
var gnder;
var user = prompt("What is your username?")
var descrip = prompt("Describe yourself.")
var bday = prompt("What year were you born?")
var age = 2023-bday
var image;
document.getElementById('fname').innerHTML=name;
if (confirm("Press OK if male. Press cancel if female.")) {
	gnder = "Male"
	document.getElementById('gender').innerHTML=gnder
}
else{
	gnder = "Female"
	document.getElementById('gender').innerHTML=gnder
}
document.getElementById('username').innerHTML=user;
document.getElementById('desc').innerHTML=descrip;
document.getElementById('year').innerHTML=bday;
document.getElementById('age').innerHTML=age;
if (confirm("Do you want to add a custom profile picture?")){
	image = prompt("Please input the link/filepath to your image.")
	document.getElementById('ppic').src=image;
}
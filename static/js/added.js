
var newPeopleForm = document.createElement("form");
newPeopleForm.id = "newPeopleForm";
newPeopleForm.method = "post";
newPeopleForm.action = "treat.php";
document.getElementById("body").appendChild(newPeopleForm);

var nameInput = document.createElement("input");
nameInput.id = "nameInput";
nameInput.classList.add("input");
nameInput.type = "text";
nameInput.name = "nameInput";
nameInput.placeholder = "Name";
document.getElementById("newPeopleForm").appendChild(nameInput);


var firstnameInput = document.createElement("input");
firstnameInput.id = "firstnameInput";
firstnameInput.classList.add("input");
firstnameInput.type = "text";
firstnameInput.name = "firstnameInput";
firstnameInput.placeholder = "First name";
document.getElementById("newPeopleForm").appendChild(firstnameInput);

var birthdateLabel = document.createElement("label");
birthdateLabel.id = "birthdateLabel";
birthdateLabel.classList.add("label");
birthdateLabel.textContent = "Birthdate";
document.getElementById("newPeopleForm").appendChild(birthdateLabel);

var birthdate = document.createElement("input");
birthdate.id = "birthdate";
birthdate.classList.add("input");
birthdate.type = "date";
birthdate.name = "birthdate";
document.getElementById("newPeopleForm").appendChild(birthdate);

for (var elt of newPeopleForm){
    elt.outerHTML += "<br>";
}

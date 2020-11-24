
function createElt(myParent,cssBalise,cssId,type,name,placeholder,cssClass){
    var newElt = document.createElement(cssBalise);
    newElt.id = cssId;
    newElt.type = type;
    newElt.name = name;
    newElt.placeholder = placeholder;
    newElt.classList.add(cssClass);
    document.getElementById(myParent).appendChild(newElt);
    return newElt;
};

var newPeopleForm = createElt('body','form','newPeopleForm');
newPeopleForm.method = "post";
newPeopleForm.action = "treat.php";

var nameInput = createElt('newPeopleForm','input','nameInput','text','nameInput','name','input');

var firstnameInput = createElt('newPeopleForm','input','firstnameInput','text','firstnameInput','first name','input');

var birthdateLabel = createElt('newPeopleForm','label','birthdateLabel',undefined,undefined,undefined,'label');
birthdateLabel.textContent = "Birthdate";

var birthdate = createElt('newPeopleForm','input','birthdate','date','birthdate',undefined,'input');

var mother = createElt('newPeopleForm','input','mother','text','mother',"Mother's name and firstname",'input');

var father = createElt('newPeopleForm','input','father','text','father',"Father's name and firstname",'input');

var broSis = createElt('newPeopleForm','input','bro_sis','text','bro_sis',"Brother's and sister's firstnames separated by comas",'input');

for (var elt of newPeopleForm){
    elt.outerHTML += "<br>";
}

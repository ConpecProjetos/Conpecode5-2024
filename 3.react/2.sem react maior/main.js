// Variável contadora
var counter = 0;
counterDOMelementList = []

var counterDOMelement = document.getElementById("counter");
counterDOMelementList.push(counterDOMelement);
var counterDOMelement2 = document.getElementById("counter2");
counterDOMelementList.push(counterDOMelement2);
var buttonAddDOM = document.getElementById("add");
var buttonRemoveDOM = document.getElementById("remove");

function addCounter() {
    counter = counter + 1;
    for (element of counterDOMelementList) {
        updateHTML(element, counter);
    }
}
buttonAddDOM.onclick = addCounter;

function removeCounter() {
    counter = counter - 1;
    for (element of counterDOMelementList) {
        updateHTML(element, counter);
    }
}
buttonRemoveDOM.onclick = removeCounter;

function updateHTML(domElement, html) {
    domElement.innerHTML = html;
} 

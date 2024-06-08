// Variável contadora
var counter = 0;

var counterDOMelement = document.getElementById("counter");
var buttonAddDOM = document.getElementById("add");
var buttonRemoveDOM = document.getElementById("remove");

function addCounter() {
    counter = counter + 1;
    updateHTML(counterDOMelement, counter);
}
buttonAddDOM.onclick = addCounter;

function removeCounter() {
    counter = counter - 1;
    updateHTML(counterDOMelement, counter);
}
buttonRemoveDOM.onclick = removeCounter;

function updateHTML(domElement, html) {
    domElement.innerHTML = html;
} 

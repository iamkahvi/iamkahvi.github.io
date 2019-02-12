var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World';

var myImage = document.querySelector('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === '/assets/booklist2.png') {
        myImage.setAttribute ('src', '/assets/rainbow.png');
    } else {
        myImage.setAttribute ('src',  '/assets/booklist2.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('.title');

function setUserName() {
    var myName = prompt('Plz enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'This is your name, ' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'This is your name, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}
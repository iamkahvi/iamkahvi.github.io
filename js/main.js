var myImage = document.querySelector('.booklist > img');

/* myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === '/assets/booklist2.png') {
        myImage.setAttribute ('src', '/assets/rainbow.png');
    } else {
        myImage.setAttribute ('src', '/assets/booklist2.png');
    }
} */

/* myImage.onmouseover = function() {
    myImage.setAttribute ('src', '/assets/rainbow.png');
}

myImage.onmouseout = function() {
    myImage.setAttribute ('src', '/assets/booklist2.png');
} */

var myTitle = document.querySelector('.title');
var theOriginal = myTitle.innerText;

myTitle.onmouseover = function() {
    myTitle.textContent = 'hello';
}

myTitle.onmouseout = function() {
    myTitle.textContent = theOriginal;
}

/* function setUserName() {
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
} */
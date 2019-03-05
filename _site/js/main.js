var myImage = document.querySelector('.booklist > img');

var myTitle = document.querySelector('.title > span');
var theOriginal = myTitle.innerText;

myTitle.onmouseover = function() {
    myTitle.textContent = 'hello';
}

myTitle.onmouseout = function() {
    myTitle.textContent = theOriginal;
}

var myImage = document.querySelector('.booklist > img');

var myTitle = document.querySelector('.title > span');
var theOriginal = myTitle.innerText;

myTitle.onmouseover = function() {
    myTitle.textContent = 'helloo!';
}

myTitle.onmouseout = function() {
    myTitle.textContent = theOriginal;
}


searchBar.onkeyup = searchPosts;

function searchPosts() {
    var searchBar = document.querySelector('input');
    console.log("searchPosts");
    const posts = document.querySelectorAll('.c-archives__item');
    const text = searchBar.value.toLowerCase();

    document.querySelectorAll('.c-archives__year').forEach(function (year) {
        year.style.display = "none";
    });
    
    for (const post of posts) {
        var title = post.querySelector('b').innerText;
        if (title.toLowerCase().indexOf(text) > -1) {
            post.style.display = "";
            post.parentElement.previousElementSibling.style.display = "";
        } else {
            post.style.display = "none";
        }
    }
}

function searchBooks() {
    var searchBar = document.querySelector('input');
    console.log("searchBooks");
    const books = document.querySelectorAll('li');
    const text = searchBar.value.toLowerCase();
    const years = document.querySelectorAll('.c-article__main h2');
    var showTitle = false;

    years.forEach(function (year) {
        year.style.display = "none";
    });
    
    for (const book of books) {
        var title = book.querySelector('b').innerText;
        if (title.toLowerCase().indexOf(text) > -1) {
            book.style.display = "";
            book.parentElement.previousElementSibling.style.display = "";
        } else {
            book.style.display = "none";
        }
    }
}
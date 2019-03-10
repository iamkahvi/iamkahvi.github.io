var myImage = document.querySelector('.booklist > img');

var myTitle = document.querySelector('.title > span');
var theOriginal = myTitle.innerText;

myTitle.onmouseover = function() {
    myTitle.textContent = 'helloo!';
}

myTitle.onmouseout = function() {
    myTitle.textContent = theOriginal;
}

var searchBar = document.querySelector('input');

//searchBar.onclick = searchPosts;

function searchPosts() {
    const posts = document.querySelectorAll('.c-archives__item');
    const text = searchBar.value.toLowerCase();
    for (const post of posts) {
        var title = post.querySelector('b').innerText;
        if (title.toLowerCase().indexOf(text) > -1) {
            post.style.display = "";
        } else {
            post.style.display = "none";
        }
    }
}



function searchPosts() {
    var searchBar = document.querySelector('input');
    const posts = document.querySelectorAll('.c-archives__item');
    const text = searchBar.value.toLowerCase();

    if (event.keyCode == 13) {
        searchBar.blur();
    }

    document.querySelectorAll('.c-archives__year').forEach(function (year) {
        year.style.display = "none";
    });
    
    for (const post of posts) {
        var title = post.innerText;
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
    const books = document.querySelectorAll('li');
    const text = searchBar.value.toLowerCase();
    const years = document.querySelectorAll('.c-article__main h2');
    var showTitle = false;

    if (event.keyCode == 13) {
        searchBar.blur();
    }

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

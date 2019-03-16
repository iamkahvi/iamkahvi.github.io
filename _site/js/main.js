function search() {
	var searchBar = document.querySelector('input');

	if (event.keyCode == 13 || searchBar.value === "") {
		if (searchBar.className === "posts") {
			searchPosts(searchBar);
		} 

		if (searchBar.className === "books") {
			searchBooks(searchBar);
		} 
	}
		
}

function searchPosts(searchBar) {
    //var searchBar = document.querySelector('input');
    const posts = document.querySelectorAll('.c-archives__item');
    const text = searchBar.value.toLowerCase();
	const years = document.querySelectorAll('.c-archives__year'); 

    years.forEach(function (year) {
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

    if (event.keyCode == 13) {
        searchBar.blur();
    }

}

function searchBooks(searchBar) {
    //var searchBar = document.querySelector('input');
    const books = document.querySelectorAll('li');
    const text = searchBar.value.toLowerCase();
    const years = document.querySelectorAll('.c-article__main h2');

    years.forEach(function (year) {
        year.style.display = "none";
    });
    
    for (const book of books) {
        var title = book.innerText;
        if (title.toLowerCase().indexOf(text) > -1) {
            book.style.display = "";
            book.parentElement.previousElementSibling.style.display = "";
        } else {
            book.style.display = "none";
        }
    }

    if (event.keyCode == 13) {
        searchBar.blur();
    }


}

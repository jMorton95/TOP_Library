let myLibrary = [];

function book(author, title, pages, read = false) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

function newBook() {
        //myLibrary.push(book1 = new book(/*"George R.R Martin", "A Song of Ice and Fire", 750, true*/));
}

function createBooks() {

    let target = document.querySelector(".container");
    for (x = myLibrary.length + 9; x > 1; x--){

        let newBook = document.createElement("div");
        newBook.classList.add("bookCard");
        let newAuthor = document.createElement("p");
        newAuthor.classList.add("author");
        let newTitle = document.createElement("p");
        newTitle.classList.add("title")
        let newMidSection = document.createElement("div");
        newMidSection.classList.add("midSection");
        let newPages = document.createElement("p");
        newPages.classList.add("pages");
        let newRead = document.createElement("div");
        newRead.classList.add("read");
        let newUpdate = document.createElement("div");
        newUpdate.classList.add("update");

        target.appendChild(newBook);
        newBook.append(newAuthor, newTitle, newMidSection, newUpdate);
        newMidSection.append(newPages, newRead);
    }
}

//Default Library entry to display on the page.
myLibrary.push(book1 = new book("George R.R Martin", "A Song of Ice and Fire", 750, true));




createBooks();
document.querySelector(".author").textContent = myLibrary[0].author;
document.querySelector(".title").textContent = myLibrary[0].title;
document.querySelector(".pages").textContent = myLibrary[0].pages;
document.querySelector(".read").textContent = myLibrary[0].read;
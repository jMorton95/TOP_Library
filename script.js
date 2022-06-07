let myLibrary = [];

function book(author, title, pages, read = false) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

function newBook(author, title, pages, read) {
        myLibrary.push(book1 = new book(author, title, pages, read));
}
function openAddForm(){
    document.getElementById("addBookForm").style.display = "block";
}
function closeForm(){
    document.getElementById("addBookForm").style.display = "none";
}

function createBooks() {

    let target = document.querySelector(".container");
    for (x = myLibrary.length + 5; x > 1; x--){

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

//Anonymous function that adjusts default CSS based on if a book has been read or not.
(() => {
    for (i = myLibrary.length - 1; i > -1; i--){
    if (myLibrary[i].read === true) {
        document.querySelector(".read").classList.add('readTrue');
    };}
})();

const readStatus = document.querySelectorAll(".read");  

readStatus.forEach(readStatus => {
    readStatus.addEventListener('click', () => {
         readStatus.classList.toggle('readTrue'); }
    )});
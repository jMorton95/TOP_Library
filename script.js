let myLibrary = [];
//Default Library entry to display on the page.
myLibrary[0] = new book("George R.R Martin", "A Song of Ice and Fire", 750, true);

//Object constructor for our library.
function book(author, title, pages, read = false) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

 //Return the status of our Checkbox.
function isChecked() {
    let x = document.getElementById('readCheck');
    if ((x.checked) == true) {
        return true;
    }   else    {
        return false;
    }
}

//Select all our form elements, remove their values and specifically uncheck the checkbox.
function resetForm(){
    const formItems = document.querySelectorAll('.formItem');
    formItems.forEach(formItem => {
        formItem.value = "";
    });
    formItems[3].checked = false;
}

function newBook() {
    //Declare temporary variables to pass as constructor parameters from our form.
    let a = document.getElementById('authorBot').value;
    let t = document.getElementById('titleBot').value;
    let p = document.getElementById('pagesBot').value;
    let r = isChecked();
    //Create new Book object from our form, store it in our library.
    myLibrary[myLibrary.length] = new book(a, t, p, r);
    //Reset our form.
    resetForm();
    //Hide our Form.
    document.getElementById("addBookForm").style.display = "none";
}

function openAddForm(){
    document.getElementById("addBookForm").style.display = "block";
}

function closeForm(){
    document.getElementById("addBookForm").style.display = "none";
}

function createBooks() {
    let target = document.querySelector(".container");
    for (x = myLibrary.length; x > 1; x--){

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
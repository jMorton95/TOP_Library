
//Object constructor for our library.
function book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;

    this.readStatus = function(){
        if (read == true){
            read == false;
        } else {
            read == true;
        } 
        this.classList.toggle("readTrue");
    }
}

//Return the status of our Checkbox.
function isChecked(){
    let x = document.getElementById('readCheck');
    if ((x.checked) == true) {
        return true;
    } else {
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

function storeBook(){
    //Declare temporary variables to pass as constructor parameters from our form.
    let a = document.getElementById('authorBot').value;
    let t = document.getElementById('titleBot').value;
    let p = document.getElementById('pagesBot').value;
    let r = isChecked();
    //Create new Book object from our form, store it in our library.
    myLibrary[myLibrary.length] = new book(a, t, p, r);

    //Reset and hide our form, create a card from new Object.
    resetForm(); closeForm(); createCard();
}

function openAddForm(){
    document.getElementById("addBookForm").style.display = "block";
}

function closeForm(){
    document.getElementById("addBookForm").style.display = "none";
}

function createCard(){
    let cardContainer = document.querySelector(".container");

    let newBook = document.createElement("div");
    let newAuthor = document.createElement("p");
    let newTitle = document.createElement("p");
    let newMidSection = document.createElement("div");
    let newPages = document.createElement("p");
    let newRead = document.createElement("div");
    let newUpdate = document.createElement("div");
        
    newBook.classList.add("bookCard");
    newAuthor.classList.add("author");
    newTitle.classList.add("title");
    newMidSection.classList.add("midSection");
    newPages.classList.add("pages");
    newRead.classList.add("read");
    newUpdate.classList.add("update");

    cardContainer.appendChild(newBook);
    newBook.append(newAuthor, newTitle, newMidSection, newUpdate);
    newMidSection.append(newPages, newRead);

    newRead.textContent = "Read Y/N?";
    newUpdate.textContent = "Update";
    newAuthor.textContent = myLibrary[numOfCards].author;
    newTitle.textContent = myLibrary[numOfCards].title;
    newPages.textContent = myLibrary[numOfCards].pages;
    if (myLibrary[numOfCards].read == true){
        newRead.classList.add("readTrue");
    }
    numOfCards++;
    
}

let myLibrary = [];
let numOfCards = 0;
//Default Library entry to display on the page.
myLibrary[0] = new book("George R.R Martin", "A Song of Ice and Fire", 750, true);


createCard();

//Deprecated Anonymous function that adjusted default CSS based on if a book has been read or not.
/*(() => {
    for (i = myLibrary.length - 1; i > -1; i--){
    if (myLibrary[i].read === true) {
        document.querySelector(".read").classList.add('readTrue');
    };}
})();*/

const readStatus = document.querySelectorAll(".read");  

readStatus.forEach(readStatus => {
    readStatus.addEventListener('click', () => {
         readStatus.classList.toggle('readTrue'); }
)});

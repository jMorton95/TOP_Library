let myLibrary = [];
let indexNumber;

//Object constructor for our library.
class Book {

  constructor (author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
  }

  readStatus(e) {
    if (this.read === false){
      this.read = true;
  } else {
      this.read = false;
  }
  e.target.classList.toggle("readTrue");
  }
}

function openAddForm() {
  document.getElementById("addBookForm").style.display = "block";
  document.getElementById("add").textContent = "Add";
}

function closeForm() {
  document.getElementById("addBookForm").style.display = "none";
  resetForm();
}

//Select all our form elements, remove their values and specifically uncheck the checkbox.
function resetForm() {
  const formItems = document.querySelectorAll(".formItem");
  formItems.forEach((formItem) => {
    formItem.value = "";
  });
  formItems[3].checked = false;
}

//Return the status of our Checkbox.
function isChecked() {
  let checkbox = document.getElementById("readCheck");
  if (checkbox.checked == true) {
    return true;
  } else {
    return false;
  }
}

//Create Book Objects from Inputs
function storeBook(author, title, pages, read) {
  myLibrary[myLibrary.length] = new Book(author, title, pages, read);

  //Reset and hide our form, create a card from new Object.
  resetForm();
  closeForm();
  createCard();
}

//Create new HTML and assign Object properties to HTML.
function createCard() {
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
  newRead.title = 'Click To Change Status';
  newUpdate.classList.add("update");

  cardContainer.appendChild(newBook);
  newBook.append(newAuthor, newTitle, newMidSection, newUpdate);
  newMidSection.append(newPages, newRead);

  newRead.textContent = "Read Y/N?";
  newUpdate.textContent = "Update";
  newAuthor.textContent = myLibrary[myLibrary.length - 1].author;
  newTitle.textContent = myLibrary[myLibrary.length - 1].title;
  newPages.textContent = myLibrary[myLibrary.length - 1].pages;
  if (myLibrary[myLibrary.length - 1].read == true) {
    newRead.classList.add("readTrue");
  }
}


//Conditional statement that decides which function is called depending on the state of our form button.
function decideAction(btnText) {
  if (
    btnText === "Add"
      ? storeBook(
          form.elements[0].value,
          form.elements[1].value,
          form.elements[2].value,
          isChecked()
        )
      : updateParse()
  ); 
}

/*Open our Form, and select the index where our HTML reflects our stored object.
 Then display the whole object in our Form, ready for editing.*/
function updateLoad(e) {
  openAddForm();
  updateIndex(e.target.parentElement.querySelector('.title').textContent);
  document.getElementById("add").textContent = "Update";
  form.elements[0].value = myLibrary[indexNumber].author;
  form.elements[1].value = myLibrary[indexNumber].title;
  form.elements[2].value = myLibrary[indexNumber].pages;
  if (myLibrary[indexNumber].read == true) {
    document.getElementById("readCheck").checked = true;
}}

//Updates Object Properties to match our new Form Elements.
function saveUpdates() {
    myLibrary[indexNumber].author = form.elements[0].value;
    myLibrary[indexNumber].title = form.elements[1].value;
    myLibrary[indexNumber].pages = form.elements[2].value;
    myLibrary[indexNumber].read = isChecked();
}

//Pushes our Updated Object to HTML.
function pushUpdates() {
    const cards = document.querySelectorAll('.bookCard');
    cards[indexNumber].children[0].textContent = myLibrary[indexNumber].author;
    cards[indexNumber].children[1].textContent = myLibrary[indexNumber].title;
    const cardsMid = document.querySelectorAll('.midSection');
    cardsMid[indexNumber].children[0].textContent = myLibrary[indexNumber].pages;
    if (myLibrary[indexNumber].read == true) { cardsMid[indexNumber].children[1].classList.add("readTrue"); }
}

//Contains function calls that are required when we finalize a Card Update.
function updateParse() {
    saveUpdates();
    pushUpdates();
    resetForm();
    closeForm();
    indexNumber = undefined;
}

//Used to find the index number of targetted Cards for Updating their contents
function updateIndex (title) {
  indexNumber = myLibrary.findIndex((obj) => {
    return obj.title === title;
  });
};

function loadRemoveWindow(){
    document.getElementById('removeWindow').style.display = 'grid';
    for (x = myLibrary.length - 1; x > -1; x--)
    {
        container = document.querySelector('.windowContent')
        let option = document.createElement('div');
        option.classList.add('remDisplay');
        option.textContent = myLibrary[x].title;
        container.appendChild(option);
    }
}
//Closees our poppup Remove window and clears all entries.
function closeWindow(){
    const del = document.querySelectorAll('.remDisplay');
    del.forEach(remDisplay => {
        remDisplay.remove();
    })
    document.getElementById('removeWindow').style.display = 'none';
}

function removeBook(e){
    updateIndex(e.target.textContent);
    myLibrary.splice(indexNumber, 1);

    const container = document.querySelector('.container');
    const removeElement = container.children[0];
    removeElement.parentNode.removeChild(removeElement);

    closeWindow();
    loadRemoveWindow();

    
}



//Push Update Functionality when Update card sections are clicked.
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("update")) updateLoad(e);
});

//Update readStatus when clicked.
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("read")){
    updateIndex(e.target.parentElement.parentElement.querySelector('.title').textContent);
    myLibrary[indexNumber].readStatus(e);
    indexNumber = undefined;
  }
});

window.addEventListener("click", (e) => {
    if (e.target.classList.contains('remDisplay')){
        removeBook(e);
        indexNumber = undefined;
    }
});

//Cheaty method of including HTML5 Form Validation and DOM HTML attribute retrieval of form element data as function parameters.
const form = document.querySelector(".formContainer");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  decideAction(document.getElementById("add").textContent);
});


//Deprecated Anonymous function that adjusted CSS based on if my default book has been read or not, used during construction.
/*(() => {
    for (i = myLibrary.length - 1; i > -1; i--){
    if (myLibrary[i].read === true) {
        document.querySelector(".read").classList.add('readTrue');
    };}
})();*/

//Deprecated ForEach Event Handler that toggled CSS classes to HTML elements.
/*let readStatus = document.querySelectorAll(".read");  
readStatus.forEach(readStatus => {
    readStatus.addEventListener('click', () => {
         readStatus.classList.toggle('readTrue'); }
)});*/

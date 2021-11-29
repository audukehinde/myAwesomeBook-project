let bookTitle, bookAuthor; 
let bookList = [];

function getValues() {
  bookTitle = document.querySelector('#title').value;
  bookAuthor = document.querySelector('#author').value;
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
}

function displayBooks() {
  document.getElementById('display').innerHTML = '';
  bookList.forEach((book, index) => {
    document.getElementById('display').innerHTML += `
    <div class="books">
      <p class="title">${book.title}</p>
      <p class="authir">${book.author}</p>
      <button class="remove" onClick = 'removeItem(${index})'>Remove</button>
      <hr> 
    </div>`
  })
}
if(localStorage.getItem('Books')) {
  bookList = JSON.parse(localStorage.getItem('Books'));
  displayBooks();
}

let addBooks = (e) => {
  e.preventDefault();
  getValues();
  let data = {
    title:  bookTitle,
    author: bookAuthor
  }
  bookList.push(data);
  bookTitle = '';
  bookAuthor = '';
  localStorage.setItem('Books', JSON.stringify(bookList));
  displayBooks();
}

document.querySelector('.btnadd').addEventListener('click', addBooks);
function removeItem(index) {
  bookList.splice(index, 1);
  localStorage.setItem('Books', JSON.stringify(bookList));
  displayBooks();
}



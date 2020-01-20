/* jshint esversion: 6 */
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book, isAddToBooks = false) {

        const books = Store.getBooks();
        let isISBNNotAvailable  = false;
        let bookISBN = book.isbn;
        const ui = new UI();

        if (isAddToBooks) {
            for (let i =0; i < books.length; i++) {
                let lsBook = books[i];

                if (lsBook.isbn === bookISBN) {
                    isISBNNotAvailable = true;
                    break;
                }
            }
        }

        if (isISBNNotAvailable) {

            ui.showAlert('ISBN already exist, please enter another ISBN', 'error');

        } else {
            const list = document.getElementById('book-list');

            // Create tr element
            const row = document.createElement('tr');

            // insert cols
            row.innerHTML = `
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.isbn}</td>
                <td><a href='#' class='delete'>X</a></td>
            `;

            list.appendChild(row);

            if (isAddToBooks) {
                // Add to localStorage
                Store.addBook(book);

                // Show Success
                ui.showAlert('Book Added!', 'success');

                // Clear field`
                ui.clearFields();
            }
        }
    }

    showAlert(message, className) {
        // Create div
        const div = document.createElement('div');

        // Add classes
        div.className = `alert ${className}`;

        // Add Text
        div.appendChild(document.createTextNode(message));

        // Get Parent
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');

        // inser alert
        container.insertBefore(div, form);

        // Timeout after 3sec
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 2000);
    }

    deleteBook(target) {
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove();
            Store.removeBook(target.parentElement.previousElementSibling.textContent);
            return true;
        } else {
            return false;
        }
    }

    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}

// local storage class
class Store {

    static getBooks() {
        let books;

        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
    }

    static displayBooks() {
        const books = Store.getBooks();
        const ui = new UI();

        books.forEach(book => {
             // Add book to list
            ui.addBookToList(book);
        });
    }

    static addBook(book) {
        const books = Store.getBooks();

        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn) {
        // console.log(isbn);

        let books = Store.getBooks();

        books.forEach((book, index) => {
            if (book.isbn === isbn) {
                books.splice(index, 1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));
    }
}


// load all event listeners
loadEventListeners();

function loadEventListeners() {

    // DOM Load Event
    document.addEventListener('DOMContentLoaded', Store.displayBooks());
}

// Event listeners
document.getElementById('book-form').addEventListener('submit', function (e) {

    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value;

    // Instantiate book
    const book = new Book(title, author, isbn);

    // Instantiate UI
    const ui = new UI();

    // validate
    if (title === '' || author === '' || isbn === '') {
        // Error Alert
        ui.showAlert('Please fill in all fields', 'error');
    } else {
         // Add book to list
        ui.addBookToList(book, true);
    }

    e.preventDefault();
});

// Event listener for delete
document.getElementById('book-list').addEventListener('click', function(e) {

    // Instantiate UI
    const ui = new UI();

    const isDeleted = ui.deleteBook(e.target);

    if (isDeleted) {
        // Show message
        ui.showAlert('Book Removed!', 'warning');
    }

    e.preventDefault();
});
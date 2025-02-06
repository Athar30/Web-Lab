var Library = /** @class */ (function () {
    function Library() {
        this.books = new Map();
    }
    Library.prototype.addBook = function (id, title, author) {
        var bookMetadata = [title, author, true];
        this.books.set(id, bookMetadata);
        this.updateBookList();
    };
    Library.prototype.performAction = function (id, action) {
        var book = this.books.get(id);
        if (!book) {
            alert("Book with ID ".concat(id, " not found."));
            return;
        }
        var title = book[0], author = book[1], isAvailable = book[2];
        switch (action) {
            case 'borrow':
                if (isAvailable) {
                    book[2] = false; // Mark book as borrowed
                    alert("You borrowed: ".concat(title, " by ").concat(author));
                }
                else {
                    alert("".concat(title, " is already borrowed."));
                }
                break;
            case 'return':
                if (!isAvailable) {
                    book[2] = true; // Mark book as available again
                    alert("You returned: ".concat(title, " by ").concat(author));
                }
                else {
                    alert("".concat(title, " was not borrowed."));
                }
                break;
            case 'reserve':
                alert("".concat(isAvailable ? 'You reserved' : 'Sorry, you cannot reserve', ": ").concat(title));
                break;
            default:
                alert("Invalid action.");
        }
        this.updateBookList();
    };
    Library.prototype.updateBookList = function () {
        var bookListDiv = document.getElementById('book-list');
        bookListDiv.innerHTML = ''; // Clear current list
        if (this.books.size === 0) {
            bookListDiv.innerHTML = 'No books in the library.';
            return;
        }
        this.books.forEach(function (metadata, id) {
            var title = metadata[0], author = metadata[1], isAvailable = metadata[2];
            var status = isAvailable ? 'Available' : 'Not Available';
            bookListDiv.innerHTML += "<p>ID: ".concat(id, " | Title: ").concat(title, " | Author: ").concat(author, " | Status: ").concat(status, "</p>");
        });
    };
    return Library;
}());
var library = new Library();
function addBook() {
    var id = document.getElementById('book-id').value;
    var title = document.getElementById('book-title').value;
    var author = document.getElementById('book-author').value;
    if (id && title && author) {
        library.addBook(id, title, author);
        document.getElementById('book-id').value = '';
        document.getElementById('book-title').value = '';
        document.getElementById('book-author').value = '';
    }
    else {
        alert("Please fill in all fields.");
    }
}
function performAction() {
    var id = document.getElementById('action-book-id').value;
    var action = document.getElementById('action-select').value;
    if (id && action) {
        library.performAction(id, action);
    }
    else {
        alert("Please provide both book ID and action.");
    }
}

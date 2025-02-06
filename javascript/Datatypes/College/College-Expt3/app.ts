type BookMetadata = [string, string, boolean]; // [title, author, isAvailable]
type UserAction = 'borrow' | 'return' | 'reserve';

class Library {
    private books: Map<string, BookMetadata>;

    constructor() {
        this.books = new Map();
    }

    addBook(id: string, title: string, author: string): void {
        const bookMetadata: BookMetadata = [title, author, true];
        this.books.set(id, bookMetadata);
        this.updateBookList();
    }

    performAction(id: string, action: UserAction): void {
        const book = this.books.get(id);

        if (!book) {
            alert(`Book with ID ${id} not found.`);
            return;
        }

        const [title, author, isAvailable] = book;

        switch (action) {
            case 'borrow':
                if (isAvailable) {
                    book[2] = false; // Mark book as borrowed
                    alert(`You borrowed: ${title} by ${author}`);
                } else {
                    alert(`${title} is already borrowed.`);
                }
                break;
            case 'return':
                if (!isAvailable) {
                    book[2] = true; // Mark book as available again
                    alert(`You returned: ${title} by ${author}`);
                } else {
                    alert(`${title} was not borrowed.`);
                }
                break;
            case 'reserve':
                alert(`${isAvailable ? 'You reserved' : 'Sorry, you cannot reserve'}: ${title}`);
                break;
            default:
                alert("Invalid action.");
        }

        this.updateBookList();
    }

    updateBookList(): void {
        const bookListDiv = document.getElementById('book-list')!;
        bookListDiv.innerHTML = ''; // Clear current list

        if (this.books.size === 0) {
            bookListDiv.innerHTML = 'No books in the library.';
            return;
        }

        this.books.forEach((metadata, id) => {
            const [title, author, isAvailable] = metadata;
            const status = isAvailable ? 'Available' : 'Not Available';
            bookListDiv.innerHTML += `<p>ID: ${id} | Title: ${title} | Author: ${author} | Status: ${status}</p>`;
        });
    }
}

const library = new Library();
function addBook(): void {
    const id = (document.getElementById('book-id') as HTMLInputElement).value;
    const title = (document.getElementById('book-title') as HTMLInputElement).value;
    const author = (document.getElementById('book-author') as HTMLInputElement).value;

    if (id && title && author) {
        library.addBook(id, title, author);
        (document.getElementById('book-id') as HTMLInputElement).value = '';
        (document.getElementById('book-title') as HTMLInputElement).value = '';
        (document.getElementById('book-author') as HTMLInputElement).value = '';
    } else {
        alert("Please fill in all fields.");
    }
}
function performAction(): void {
    const id = (document.getElementById('action-book-id') as HTMLInputElement).value;
    const action = (document.getElementById('action-select') as HTMLSelectElement).value as UserAction;

    if (id && action) {
        library.performAction(id, action);
    } else {
        alert("Please provide both book ID and action.")  }}

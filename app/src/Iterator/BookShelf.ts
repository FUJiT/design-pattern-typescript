import Aggregate from './Aggregate';
import Book from './Book';
import Iterator from './Iterator';
import BookShelfIterator from './BookShelfIterator';

export default class BookShelf implements Aggregate {
    private _books: Book[];
    private _last: number = 0;

    constructor() {
        this._books = [];
    }

    getBookAt(index: number): Book {
        return this._books[index];
    }

    appendBook(book: Book): void {
        this._books[this._last++] = book;
    }

    get length(): number {
        return this._last;
    }

    iterator(): Iterator {
        return new BookShelfIterator(this);
    }
}
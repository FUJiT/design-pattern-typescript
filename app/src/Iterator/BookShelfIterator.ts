import { Iterator } from './Iterator';
import { BookShelf } from './BookShelf';

export class BookShelfIterator implements Iterator {
    private _bookShelf: BookShelf;
    private _index: number;
    constructor(bookShelf: BookShelf) {
        this._bookShelf = bookShelf;
        this._index = 0;
    }

    hasNext(): boolean {
        return this._index < this._bookShelf.length;
    }

    next(): Object {
        return this._bookShelf.getBookAt(this._index++);
    }
}
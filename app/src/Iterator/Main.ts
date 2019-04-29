import BookShelf from './BookShelf';
import Book from './Book';
import Iterator from './Iterator';

const bookShelf = new BookShelf(4);
bookShelf.appendBook(new Book('Around the world in 80 Days'));
bookShelf.appendBook(new Book('Bible'));
bookShelf.appendBook(new Book('Cinderella'));
bookShelf.appendBook(new Book('Daddy-Long-Legs'));

const it: Iterator = bookShelf.iterator();
while (it.hasNext()) {
    const book: Book = <Book>it.next();
    console.log(book.name);
}
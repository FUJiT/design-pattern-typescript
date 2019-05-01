import { BookShelf } from '../../Iterator/BookShelf';
import { Book } from '../../Iterator/Book';

describe('BookShelf', () => {
    let bookShelf: BookShelf;
    beforeEach(() => {
        bookShelf = new BookShelf();
    });

    describe('test of count', () => {
        it('初期値', () => {
            expect(bookShelf.length).toBe(0);
        });

        it('1冊追加', () => {
            // TODO: ここのnewはモック化した方が良い??
            bookShelf.appendBook(new Book('foobar'));
            expect(bookShelf.length).toBe(1);
        });
    });

    describe('test of book', () => {
        it('1冊追加', () => {
            bookShelf.appendBook(new Book('RobinsonCrusoe'));
            expect(bookShelf.getBookAt(0)).toMatchObject({ _name: 'RobinsonCrusoe' });
        });
    });
});
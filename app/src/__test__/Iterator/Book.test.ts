import { Book } from '../../Iterator/Book';

describe('Book', () => {
    it('1冊追加', () => {
        const book: Book = new Book('Java言語で学ぶデザインパターン');
        expect(book.name).toBe('Java言語で学ぶデザインパターン');
    });
});
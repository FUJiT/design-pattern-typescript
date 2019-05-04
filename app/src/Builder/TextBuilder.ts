import { Builder } from './Builder';

export class TextBuilder extends Builder {
    /**
     * 文書
     */
    private _buffer: string = '';

    makeTitle(title: string): void {
        this._buffer += '==============================\n';
        this._buffer += `『${title}』\n\n`;
    }

    makeString(str: string): void {
        this._buffer += `■${str}\n\n`;
    }

    makeItems(items: string[]): void {
        for (let i: number = 0, len: number = items.length; i < len; i++) {
            this._buffer += ` ・${items[i]}\n`;
        }
        this._buffer += '\n';
    }

    close(): void {
        this._buffer += '==============================\n';
    }

    /**
     * 構築した文書を返す
     */
    get result(): string {
        return this._buffer;
    }
}
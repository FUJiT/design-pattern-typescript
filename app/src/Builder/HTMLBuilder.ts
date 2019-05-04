import { Builder } from './Builder';
import * as fs from 'fs';

export class HTMLBuilder extends Builder {
    private _filename!: string;
    private stream!: fs.WriteStream;

    makeTitle(title: string) {
        this._filename = `${title}.html`;

        this.stream = fs.createWriteStream(`${__dirname}/${this._filename}`);
        this.stream.write(`<html>\n<head>\n<title>${title}</title>\n</head>\n`);
        this.stream.write(`<h1>${title}</h1>\n`);
    }

    makeString(str: string) {
        this.stream.write(`<p>${str}</p>`);
    }

    makeItems(items: string[]) {
        this.stream.write('<ul>\n');
        for (let i = 0, len = items.length; i < len; i++) {
            this.stream.write(`<li>${items[i]}</li>\n`);
        }
        this.stream.write('</ul>\n');
    }

    close(): void {
        this.stream.write('</body>\n</html>');
    }

    get result(): string {
        return this._filename;
    }
}
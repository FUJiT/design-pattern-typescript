import { AbstractDisplay } from './AbstractDisplay';

export class StringDisplay extends AbstractDisplay {
    private string: string;
    private width: number;

    constructor(string: string) {
        super();
        this.string = string;
        this.width = string.length;
    }

    open(): void {
        this.printLine();
    }

    print(): void {
        process.stdout.write(`|${this.string}|\n`)
    }

    close(): void {
        this.printLine();
    }

    printLine(): void {
        process.stdout.write('+');
        for (let i: number = 0; i < this.width; i++) {
            process.stdout.write('-');
        }
        process.stdout.write(`+\n`);
    }
}
import { Product } from './Product';
import clone from 'clone';

export class MessageBox implements Product {
    private decochar: string;
    constructor(decochar: string) {
        this.decochar = decochar;
    }

    use(s: string): void {
        const length = s.length;

        for (let i = 0; i < length; i++) {
            process.stdout.write(this.decochar);
        }

        process.stdout.write(`\n${this.decochar} ${s} ${this.decochar}\n`);

        for (let i = 0, len: number = s.length; i < len + 4; i++) {
            process.stdout.write(this.decochar);
        }

        process.stdout.write("\n");
    }

    createClone(): Product {
        return <Product>clone(this);
    }
}
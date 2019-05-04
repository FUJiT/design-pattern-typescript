import { Product } from './Product';
import clone from 'clone';

export class UnderlinePen implements Product {
    private ulchar: string;
    constructor(ulchar: string) {
        this.ulchar = ulchar;
    }

    use(s: string): void {
        process.stdout.write(`"${s}"\n `);
        for (let i: number = 0, len: number = s.length; i < len; i++) {
            process.stdout.write(this.ulchar);
        }
        process.stdout.write("\n");
    }

    createClone(): Product {
        return <Product>clone(this);
    }
}
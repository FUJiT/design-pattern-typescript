import { Product } from './Product';

export class IDCard extends Product {
    private _owner: string;
    constructor(owner: string) {
        super();
        console.log(`${owner}のカードを作ります`);
        this._owner = owner;
    }

    use(): void {
        console.log(`${this._owner}のカードを使います`);
    }

    get owner(): string {
        return this._owner;
    }
}
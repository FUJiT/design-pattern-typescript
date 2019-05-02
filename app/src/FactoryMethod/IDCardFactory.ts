import { Factory } from './Factory';
import { IDCard } from './IDCard';
import { Product } from './Product';

export class IDCardFactory extends Factory {
    private _owners: string[] = [];

    protected createProduct(owner: string): Product {
        return new IDCard(owner);
    }

    protected registerProduct(product: Product): void {
        this.owners.push((<IDCard>product).owner);
    }

    get owners(): string[] {
        return this._owners;
    }
}
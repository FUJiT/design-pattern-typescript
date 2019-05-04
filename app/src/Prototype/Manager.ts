import { Product } from './Product';

export class Manager {
    private showcase = new Map<string, Product>();

    register(name: string, proto: Product): void {
        this.showcase.set(name, proto);
    }

    create(protoname: string): Product {
        const p: Product = <Product>this.showcase.get(protoname);
        return p.createClone();
    }
}
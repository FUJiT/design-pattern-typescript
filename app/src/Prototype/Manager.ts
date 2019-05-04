import { Product } from './Product';

export class Manager {
    private showcase = new Map<string, Product>();

    /**
     * 「インスタンスの名前」と「インスタンス」を登録する
     * @param name インスタンスの名前
     * @param proto インスタンス
     */
    register(name: string, proto: Product): void {
        this.showcase.set(name, proto);
    }

    /**
     * インスタンスを生成する
     * @param protoname 生成するインスタンスの名前
     */
    create(protoname: string): Product {
        const p: Product = <Product>this.showcase.get(protoname);
        return p.createClone();
    }
}
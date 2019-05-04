import { Product } from './Product';
import clone from 'clone';

export class MessageBox implements Product {
    private decochar: string;
    constructor(decochar: string) {
        this.decochar = decochar;
    }

    /**
     * MessageBoxを使う
     * @param s 出力する文字
     */
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

    /**
     * クローンを生成する
     * @returns 生成したクローン
     */
    createClone(): Product {
        return <Product>clone(this);
    }
}
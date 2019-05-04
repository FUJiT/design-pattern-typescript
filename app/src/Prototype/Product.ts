export interface Product {
    /**
     * インスタンスを使用して文字列を表示させる
     * @param s 表示させる文字列
     */
    use(s: string): void;
    /**
     * クローンを生成する
     */
    createClone(): Product
}
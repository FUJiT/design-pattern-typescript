export abstract class Builder {
    /**
     * タイトルを文書中に構築する
     * @param title タイトル
     */
    abstract makeTitle(title: string): void;

    /**
     * 文字列を文書中に構築する
     * @param str 文字列
     */
    abstract makeString(str: string): void;

    /**
     * 箇条書きを文書中に構築する
     * @param items 箇条書き
     */
    abstract makeItems(items: string[]): void;

    /**
     * 文書を完成させる
     */
    abstract close(): void;
}
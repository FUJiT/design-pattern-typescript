import { Builder } from './Builder';

export class Director {
    private builder: Builder;
    constructor(builder: Builder) {
        this.builder = builder;
    }

    /**
     * 文書を構築する
     */
    construct(): void {
        this.builder.makeTitle('Greeting');
        this.builder.makeString('朝から昼にかけて');
        this.builder.makeItems(['おはようございます。', 'こんにちは。',]);
        this.builder.makeString('夜に');
        this.builder.makeItems([
            'こんばんは。',
            'おやすみなさい。',
            'さようなら。',
        ]);
        this.builder.close();
    }
}
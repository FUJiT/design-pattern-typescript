export class Singleton {
    private static _singleton: Singleton = new Singleton();

    private constructor() {
        console.log('インスタンスを生成しました');
    }

    static get instance(): Singleton {
        return this._singleton;
    }
}
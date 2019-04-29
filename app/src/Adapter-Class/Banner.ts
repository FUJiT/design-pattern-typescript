export class Banner {
    private _string: string;
    constructor(string: string) {
        this._string = string;
    }

    showWithParen(): void {
        console.log(`(${this._string})`);
    }

    showWithAster(): void {
        console.log(`*${this._string}*`);
    }
}
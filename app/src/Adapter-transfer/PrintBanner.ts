import { Print } from './Print';
import { Banner } from './/Banner';

export class PrintBanner extends Print {
    private _banner: Banner;
    constructor(string: string) {
        super();
        this._banner = new Banner(string);
    }

    printWeak(): void {
        this._banner.showWithParen();
    }

    printStrong(): void {
        this._banner.showWithAster();
    }
}
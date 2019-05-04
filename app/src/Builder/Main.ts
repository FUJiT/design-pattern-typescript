import { TextBuilder } from './TextBuilder';
import { Director } from './Director';
import { HTMLBuilder } from './HTMLBuilder';

const usage = () => {
    console.log('Usage node Main.ts plain      プレーンテキストで文書生成');
    console.log('Usage node Main.ts html       HTMLファイルで文書作成');
}

if (process.argv.length < 2) {
    usage();
    process.exit(1);
}

if (process.argv[2] === 'plain') {
    const textBuilder: TextBuilder = new TextBuilder();
    const director: Director = new Director(textBuilder);
    director.construct();

    const result: string = textBuilder.result;
    console.log(result);
} else if (process.argv[2] === 'html') {
    const htmlBuilder: HTMLBuilder = new HTMLBuilder();
    const director: Director = new Director(htmlBuilder);
    director.construct();

    const filename: string = htmlBuilder.result;
    console.log(`${filename}が作成されました`);
} else {
    usage();
    process.exit(1);
}


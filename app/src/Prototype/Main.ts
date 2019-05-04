import { Manager } from './Manager';
import { UnderlinePen } from './Underline';
import { MessageBox } from './MessageBox';
import { Product } from './Product';

// 準備
const manager: Manager = new Manager();
const upen: UnderlinePen = new UnderlinePen('~');
const mbox: MessageBox = new MessageBox('*');
const sbox: MessageBox = new MessageBox('/');

manager.register('strong message', upen);
manager.register('warning box', mbox);
manager.register('slash box', sbox);

// 生成
const p1: Product = manager.create('strong message');
p1.use('Hello, World');

const p2: Product = manager.create('warning box');
p2.use('Hello, World.');

const p3: Product = manager.create('slash box');
p3.use('Hello, World!');
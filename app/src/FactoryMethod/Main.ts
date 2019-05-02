import { Factory } from './Factory';
import { IDCardFactory } from './IDCardFactory';

const factory: Factory = new IDCardFactory();
const card1 = factory.create('結城浩');
const card2 = factory.create('比企谷八幡');
const card3 = factory.create('雪ノ下雪乃');

card1.use();
card2.use();
card3.use();
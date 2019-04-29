import Singleton from './Singleton';

console.log('start');

const obj1: Singleton = Singleton.instance;
const obj2: Singleton = Singleton.instance;

const message: string = (obj1 === obj2) ? 'obj1とobj2は同じインスタンスです。' : 'obj1とobj2は同じインスタンスではありません。';
console.log(message);

console.log('End');

"use strict";
//
// const str = 'string';
// const num = 2;
// const nan = NaN;
// const obj = {};
// const arr = [];
// const nul = null;
// const sym = Symbol();
// const und = undefined;
// const _void = void 0;
// const bool = true;
// const fn = () =>{};
//
// let tsStr ='asd';//тс автоматом определил тип, так что не обязательно припысывать :string
// function sumJS(arr) {
//     return arr.concat([1]);
// }
//
// function sumTS(arr: number[]){
//     return arr.reduce((a,v) => a + v);
// }
// function sumTSConcat(a:string[]) {
//     return a.concat('Hello ', 'World');
// }
//
// const tsNumber = 2;
// const tsString = 'str';
//
// const result = tsString + tsNumber;
// const resultTwo = parseInt(tsString) - tsNumber;
//
// // if (typeof tsString === 'number') {
// //     const resultTwo = tsString - tsNumber;
// // }
//
// // Union type
// const strOrNumber: string | number = '2';
//
// // Type alias
// type StrOrNumber = string | number;
//
// const strOrNumber1: StrOrNumber = '2';
// const strOrNumber2: StrOrNumber = '2';
// const strOrNumber3: StrOrNumber = '2';
// const strOrNumber4: StrOrNumber = '2';
//
// type AllJSSimpleTypes = string | number | [] | object | undefined | null | boolean | symbol | void;
//
// // Array
// const tsArray: number[] = [1,2,3];
// const tsArrayGeneric: Array<number> = [];
//
// const unionArray: (string | number)[] = [1,2,'2'];
// const unionArray2: Array<string | number> = [1,2,'2'];
//
// // Tuple
// const myTuple: [number, string] = [1, '2'];
// const [value1, value2] = myTuple;
//
// // const [state, setstate] = useState();
//
// // Object
// type MyObjType = { a: number, b: string };
// const myObj: MyObjType = {a: 1, b: '2'};//тс автоматом определит тип, так что не обязательно припысывать ":MyObjType" (const myObj= {a: 1, b: '2'};)
//
// interface MyFirstInterface {
//     readonly a: number;
//     b: string;
//     c?: number[];//optional type. ?. Либо нумбер либо ундефинед. Не желательно делать. Нужна чистота.
//     e: number | undefined;
// }
//
// const value =  myObj.b;
//
// const myObj2: MyFirstInterface = {
//     a: 2,
//     b: '123',
//     c: [1],
//     e: undefined,//нужно написать хоть пока и не известно.
// };
//
// const val = myObj2.c;
// const val2 = myObj2.e;
//
// // Object.keys(myObj2);
//
// interface IndexInterface {//если будет приходить 1000000 ключей то чтобы не писать кажд отдельно, применяется индекс сигнатура.
//     [N: string]: string;
// };
// const ApiAnswer: IndexInterface = { key: 'asd', key2: 'asd'};
// const val3 = ApiAnswer.randomkey;//увидит тип string
//
// //типизация функций
//
// enum Methods {//способ ограничить колво методов. Будем использовать в Redux actions.
//     add = 0,
//     sub = 1,
// }
//
// function calculate(method: Methods, left: number, right: number): number{//либо method:'add' | 'sub'. Тжсм.
//     switch(method){
//         case Methods.add: return left + right;
//         case Methods.sub: return left - right;
//     }
// }
//
// const sum = calculate(Methods.add, 2, 2);
//
// type TypeFn = () => number;
// const ArrowFn: TypeFn =()=> 2;//либо FnInterface вместо TypeFn
//
// interface FnInterface {
//     (a: number): void;
// }
//
// type StrangeTsTypes = any | unknown | never;//можно не использовать
//
// const some: any = '2';//any не желательно
// some.reduce();
//
// const un: unknown = '2';
//
// if (typeof  un === 'string'){
//     un.concat();
// }
//
// function neverFn(): never {// ф кот никогда не завершится
//     throw new Error('my exception');
// }
//
// const someValue = neverFn();
//
//
//# sourceMappingURL=examples.js.map
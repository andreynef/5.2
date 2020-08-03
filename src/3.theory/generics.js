"use strict";
// // Generics (<>)
// const myArray: MyArray<number> = [1,2,3];//определили свой тип (по умолчанию Array<>). Определили в кач generic число. Теперь стандартные методы массива не работают.
//
// interface MyArray<T> {// декларируем некий тип Т  (как декларируем аргументы от функций). Этот тип определяется уже в самой работе (см строку выше)
//     [N: number]: T// передаем его в кач выходного типа.Устанавливает его в индекс сигнатуру.
//     map<U>(fn:(el:T, index: number, arr: MyArray<T>) => U) : MyArray<U>// Настройки по умолчанию у Array<>. Определили свой метод map со своим generic, он будет возвращать по значению с типом U, в итоге массив из значений с типом U.
// }
//
// [1,2,3].map((f) => f + 1);//Напоминание метода map ->[2,3,4]
// ['1','2','3'].map((f) => f + 1);
//
// myArray.map((f, index, arr) => f + 1);
//
// //--
// function identity<T>(arg:T):T {//т.о. тс правильно разрезолвит входящий тип (см 1 стр ниже). То что агрументом придет то и выведет.
//     return arg
// }
//
// let result10 = identity(12);
//
// function getLen<T extends Array<any>>(arr: T): number{//просто <Т> нельзя тк не у кажд типа есть метод length а только у массивов и строк, поэтому пишем extends. Типа нам нужет только тот тип Т кот расширяет массив.
//     return arr.length
// }
//
// getLen([1,2,3,'4']);
//
// interface IValueWithType<T>{//венгерская нотация, начинается с I, обозначающ интерфейс. Если просто с больш буквы то можно спутать с классом.
//     type: string;
//     value: T;
// }
// function withType<U>(arg: U): IValueWithType<U>{//главная декларация ф. В ней передается входной тип аргумента U (=> выходной), кот принимает Т в интерфейсе.
//     return {
//         type: typeof arg,
//         value: arg
//     }
// }
// const result11 = withType(123)//главный вызов ф. Передаем арг тип => определяется U как number => interface определился T=U=number
//
// // Встроенные generics (omit, pick, partial)
//
//  interface IExample<T> {//для примера рандомный интерфейс
//     type: string;
//     value: T;
//     isEmpty: boolean;
//  }
//
//  const omittedObject: Omit<IExample<string>, 'isEmpty' | 'value'> = {//выкинуть некот ключи из интерфейса IExample. <откуда, что>
//     type: 'asd'//останется только type.
//  }
//
//  const picked: Pick<IExample<number>, 'isEmpty' | 'value'> = {// выбрать некот ключи из интерфейса IExample. <откуда, что>
//     isEmpty : true,
//     value: 123,
//  }
//
// const partial: Partial<IExample<object>> = {//добавляет к каждому ключу "?", поэтому можно писать любой ключ. Но при неумелом использовании может привести к множеству "if"ов.
//
// }
//
//# sourceMappingURL=generics.js.map
"use strict";
// const mistake = [] as Array<number>;// As - type casting, приведение к типу. Было Any, стало Array number.
// mistake.push(1);
// mistake.push('1');//нельзя ибо тип определен только как number.
//
// let bigObject = {
//   "name": "js-frameworkreact",
//   "version": "1.0.0",
//   "description": "",
//   "main": "index.js",
//   "scripts": {
//     "build:dev": "cross-env NODE_ENV=development webpack --config webpack.config.js",
//     "build:prod": "cross-env NODE_ENV=production webpack --config webpack.config.js",
//     "dev": "cross-env NODE_ENV=development node ./bin/dev.js",
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
//   "author": "",
//   "license": "ISC",
//   "dependencies": {
//     "cross-env": "^7.0.2",
//     "express": "^4.17.1",
//     "nodemon": "^2.0.4",
//     "react": "^16.13.1",
//     "react-dom": "^16.13.1"
//   },
// };
// bigObject.author = 1;//присвоить число неполучится тк надо строку (TS сам определил предыдущий тип).
//
// type TMyBigObject = typeof bigObject;//TS вымет типы из константного обьекта и присвоит их TMyBigObject.
// const typedBigObject: Readonly<TMyBigObject> = bigObject; //переложили перем bigObject в перем typedBigObject но при этом указали тип Readonly. Только первый уровень.
// typedBigObject.dependencies = '23';//не смогло изменить тк Readonly раб только с 1 уровнем (внешними ключами).
// typedBigObject.dependencies.express = '23';//смогло изменить
//
//
// type TObjKeys = keyof TMyBigObject;//определить все типы ключей из типового обьекта.
// type TAuthorType = TMyBigObject['author'];//определить конкретный тип по ключу (определенный тип значения ключа "author" (тип правой части))
//
// //mapped types (in keyof) - типы кот перебирают др типы. Подобно for (let N of ['1', '2']){}
//
// type MyReadonly<T> = {//тжсм что и Readonly.
//   readonly [N in keyof T]: T[N] //берем все ключи (N) входного типового обьекта T, перебирая их как в for, назначаем им обратно типы их значений (T[N]) и приписываем к кажд строке readonly. T[N] = TMyBigObject['author']
// }
//
// // const some2000: MyReadonly<TMyBigObject> = {
// //     license: '2'
// //
// // }
//
// type MyPartial<T> = {//аналог типа Partial. Делает все ключи необязательными
//   [N in keyof T]?: T[N];//  Перебор типов от T и добавление к ним знака "?"
// }
//
// type MyPick<T, K extends keyof T> = {//аналог типа Pick. Extends keyof T пот что без оного в typed picked (ниже) можно указать левый ключ что не есть гуд. Extends ограничивает К всеми ключами кот нахся в Т.
//   [N in K]: T[N];//Не 'in keyof' а только 'in' тк нужны только те ключи К кот указали. И указываем их значение T[N].
// }
// type picked = Pick<TMyBigObject, 'license' | 'author'>;//забирает из интерфеса TMyBigObject (1й арг) только значения выбранных ключей (2й арг).
//
//
//
// type MyReadonlyDeep<T> = {//тип кот раб по всей глубине а не только 1 ур.
//   readonly [N in keyof T]: T[N] extends object ? MyReadonlyDeep<T[N]> : T[N]//если значение (T[N]) не простое а содержит обьект, то и те данные тоже делаем Readonly повторным прогоном его через MyReadonlyDeep, а если нет то просто вернуть значение T[N].
// }
// const typedBigObjectDeep: MyReadonlyDeep<TMyBigObject> = bigObject; //переопределить тип обьекта на Readonly. Но уже на все уровни.
// typedBigObjectDeep.dependencies.express = '23';//не может изменить тк установлено Readonly уже и на 2м уровне.
// typedBigObjectDeep.dependencies = '23';//не может изменить как и с просто Readonly 1го ур.
//
// // Резюме.
// // let bigObject - Есть обьект
// // type TMyBigObject = typeof bigObject; - Берем тип этого обьекта
// // type TObjKeys = keyof TMyBigObject; - Берем все ключи нашего типового обьекта. Можно пропустить и писать сразу keyof TMyBigObject.
// // type MyReadonlyDeep<T> = {}; - Мапим этот типовой обьект превращая его в Readonly.
//
// //а теперь переделываем Readonly обратно в изменяемые.
//
// //type inference
//
// type TSomeType = MyReadonlyDeep<TMyBigObject>;//есть какой-то тип с Readonly
//
// type RemoveReadonly<T> = T extends MyReadonlyDeep<infer E> ? E : T;//если тот тип кот я преобразую (Т) расширяет MyReadonlyDeep (Infer E вычисляет аргумент generic'a = TMyBigObject) то назначить этот арг Е, иначе оставить Т. Расширяет ли один тип другой тип, если да то найди аргумент генерика и верни его, тобишь оригинал кот был.
// type TTest = RemoveReadonly<TSomeType>;//Итог. yes, TSomeType extends MyReadonlyDeep<TMyBigObject>, so "type TTest = TMyBigObject" (original).
//
// //проверим результат
// function greaterThanZero(a: number, b: string) {// есть какая-то ф возвращающая boolean
//   return a > 0;
// }
//
// type FnReturnType<T> = T extends ((...args: any[]) => infer R) ? R : never;//это действие выводит всю инфу о типе даже не видя сам оригинал (он в библиотеке итд). Оно уже встроено в ТС так что можно просто писать ReturnType (ниже)
// type FnParameters<T> = T extends ((...args: infer R) => any) ? R : never;// -=- Parameters
// //=
// type TReturnType = ReturnType<typeof greaterThanZero>;//встроен в TS
// type TArgsType = Parameters<typeof greaterThanZero>;//встроен в TS
// //type Parameters
// //type ConstructorParameters
// //type ReturnType
// //type InstanceType
// //...
//
//
//# sourceMappingURL=mappedTypes.js.map
"use strict";
// // Old constructor example
// // function OldConstructor(fieldValue) {
// //     this.field = fieldValue || 123;
// // }
// //
// // OldConstructor.prototype.method = function() {
// //     return this.field;
// // }
// //
// // const instance = new OldConstructor();
// // instance.method();// -> 123
//
// //new ES6 version
// class Constructor {
//     public field: number = 123;
//     private privateField: number = 123;
//
//     constructor(arg:number) {
//         this.field = arg;
//     }
//
//     public publicMethod(): number {//тжсм что и без надписи public, тобишь доступно снаружи класса.
//         return this.field;
//     }
//
//     private privateMethod(): number {//недоступно снаружи класса
//         return this.field + 1;
//     }
//
//     protected protectedMethod(): number {//тжсм что и private но доступен наследникам которые extends от этого класса
//         return this.field + 2;
//     }
// }
//
// const instance = new Constructor(123);
//
// class Child extends Constructor {
//     public childMethod() {
//     }
//
//     public protectedMethod(): number {
//         return super.protectedMethod();
//     }
//
//     public publicMethod(): number {
//         return super.publicMethod();
//     }
// }
// //абстрактные классы
//
// abstract class AbstractClass {// класс кот нельзя инстанс'илизировать. От них можно только унаследоваться. (const smth = new AbstractClass не сработает.)
//     public abstract abstractField: number;
//
//     public abstract abstractMethod(): number;
//
//     protected protectedMethod() {
//         return this.abstractField;
//     }
// }
//
// class NewChild extends AbstractClass {//alt+Enter на NewChild и webstorm предложит заполнить автоматом то что должно содержаться тут.
//     public abstractField: number = 123;
//
//     public abstractMethod(): number {
//         return this.protectedMethod();
//     }
// }
//
// interface MyInterface {
//     field: string;
//     method(): string;
// }
//
// class NewClass<T> implements MyInterface<T> {//alt+Enter на NewClass и webstorm предложит заполнить автоматом то что должно содержаться тут.
//     public field: string = '123';
//     public conf?: T;
//
//     method(): string {
//         return "";
//     }
// }
//
// class MyComponent extends React.Component<{prop1: number }, {state1: string }> {
//     constructor(props:{prop1: number }) {
//         super(props);
//         this.state = {
//             state1: '123'
//         }
//     }
//
//     public render() {
//         return(
//             <div>{this.props.prop1}</div>
//         )
//     }
// }
//
//# sourceMappingURL=classExample.js.map
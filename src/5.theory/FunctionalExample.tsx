//
// import {preventDefault} from "../utils/react/preventDefault";
// import {stopPropagation} from "../utils/react/stopPropagation";
// import {getChecked} from "../utils/react/getChecked";
// import {getValue} from "../utils/react/getValue";
// import {withKey} from "../utils/react/withKey";
// import React from "react";
//
//
// //Карирование - вычисление аргумента функции по мере того как мы ее вызываем
//
// const add = (first:number) =>//ф кот возвращает...
//   (second:number) => first + second;//...др ф, кот в свою очередь возвращает результат вычесленный с участием своего аргумента (second) и предыдущего (first) который был использован ранее и остался в замыкании.
//
// add(1)(2);// -> 3
// //Т.е, работа идет слева направо - сначала срабатывает add(1) и возвращает какой-то результат 'result', который будет использоваться в следующем шаге как первый агрумент add(result,2).
//
// const addOne = add(1);// создание фиксиров обертки равной значению первого шага кот в дальнейшем будет применяться к след шагам ("к чему-то прибавлять 1")
// addOne(100);// -> 101
//
//
// window.addEventListener('resize', ()=>{})//пример, тоже ф высш порядка тк это ф возвр ф listener
//
// // function addEventListenerWithDispose(element, name, handler){
// //   element.addEventListener(name, handler);
// //   return ()=> element.removeEventListener(name, handler);
// // }
//
// // const dispose = addEventListenerWithDispose(window, 'resize', ()=>{
// //   console.log('resized');
// //   dispose();
// // })
//
// //-------пример 1--------
//
// interface IBlockProps {
//   title: string;
//   id: string;
// }
// function Feed(props:{blocks:IBlockProps[]}){//компонент Feed рендерит множество блоков
//    return (
//      <div>
//        {props.blocks.map(withIdKey(Block))}//размапить компоненты, предварительно прогнав их через ф присваивающую к кажд компоненте Id как ключ.
//      </div>
//      // <div>
//      //   {props.blocks.map((block:IBlockProps) =>//рендеринг в цикле. Размапить компоненты.
//      //    <Block
//      //     key={block.id}//при рендере компонентов нужно указ key
//      //     {...block}
//      //    />
//      //   )}
//      // </div>
//
//    );
//  }
// function Block(props:IBlockProps) {
//   return (
//     <div>{props.title}</div>
//   )
// }
//
// const withIdKey = withKey('id');//ф кот возвр др ф с переданным указанием/аргументом что этот аргумент будет испся как ключ.
// const withIndexKey = withKey();//ф WithKey помогает разгрузить код и сделать его более расширяемым.
//
// //-------пример 2--------
//
// function Input({onChange, value}: {onChange: (value: string) => void, value: string}) {
//   return (
//     <input value={value} onChange={getValue(onChange)} />
//   )
// }
//
// function Checkbox(props: {onChange:(value:boolean)=> void, value:boolean}) {
//   return (
//     <input type="checkbox" checked={props.value} onChange={getChecked(props.onChange)} />
//     // тжсм
//     // <input type="checkbox" checked={props.value} onChange={(e)=>props.onChange(e.currentTarget.checked)} />
//   )
// }
//
// //-------пример 3--------
//
// interface InputProps {
//   onChange: (value: string) => void;
//   value: string;
// }
//
// function Input2({value, onChange}: InputProps) {
//   return (
//     <input value={value} onChange={preventDefault(stopPropagation(getValue(onChange)))}/>//композиция
//   )
// }
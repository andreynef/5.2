// import React from "react";
//
// //что нужно от ф withKey? Чтобы она взяла из массива данных (props.blocks кот приходят пропсами для Feed) определенный атрибут ('id') и назначить его в кач ключа нашему компоненту Block.
//
// export function withKey(key?: string) {//ф принимающая строковый ключ...
//   return <E, T extends React.ComponentType<E>>(component: T) =>//...и кот возвращает ф 2го шага 'будет withIdKey(Block)', понимая через типизацию что это реакт комп Block и вытаскивая его пропы с интерфейсом IBlockProps. Эта ф withIdKey(Block) возвращает 3ю ф(callback) кот примет в себя map "map(result)"
//     (props: E, index: number) =>//map принимает этот callback и передаст ему наши св-ва props и index каждого элемента в массиве props.blocks. 3 аргумент(массив) пропущен.
//       React.createElement(//рендерим элемент используя наши пропы и наш нов ключ кот мы изготовим из id. Ф рендера React.createElement(attr)
//         component,//1й арг это компонент
//         {...props, key: key ? props[key as keyof E] : index},//2й арг это св-ва кот берем из пришедших сверху props (деструктурируя их), добавляя к ним prop "key". Если есть key то вставляем его, а если нет то вставляем туда значение индекса.
//         [],//3й арг это массив детей кот нет.
//         //Ф рендера React.createElement(attr) тжсм <Block {...props} />. Обычно исп так но здесь в ф
//       );
// }
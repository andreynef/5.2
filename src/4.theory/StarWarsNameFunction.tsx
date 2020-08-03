// import React from 'react';
// import {starWars, uniqueNamesGenerator} from "unique-names-generator";
//
// interface IStarWarsNameFunctionState {
//   name: string;
//   count: number;
// }
//
// export function StarWarsNameFunction{
//  const randomName = () => uniqueNamesGenerator({dictionaries: [starWars], length: 1});
//
//  // 1 вариант используя атомарное состояние
//
//  // const [name, setName] = React.useState(randomName);//атомарное состояние
//  // const [count, setCount] = React.useState(0);//атомарное состояние
//  // const handleClick = () => {
//  //   setName(randomName);
//  //   setCount((prevCount)=> prevCount + 1);
//  //   //setCount(count +1 ); //WRONG!
//  // }
//  // console.log('>', count);
//
//
//  // 2 вариант используя сложные обьекты
//
//  const [state, setState] = React.useState<IStarWarsNameFunctionState>({name: RandomName(), count: 0});
//  const handleClick = () => {
//    setState((prevState) => ({...prevState, name: randomName()}));
//    setState((prevState) => ({...prevState, count: prevState.count + 1}));
//    setState((prevState) => ({...prevState, count: prevState.count + 1}));
//  };
//
//  console.log('>>', state.count);
//
//  return (
//    <section>
//      <span>{this.state.name}</span>
//      <div/>
//      <button onClick={handleClick}> I need a name!</button>
//    </section>
//  );
// }
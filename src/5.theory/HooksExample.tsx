import React from "react";

//Какие бывают хуки: (Не работают на сервере)

// 1. useState
// 2. useEffect
// 3. useMemo
// 4. useRef
// 5. useReducer
// 6. useContext
// 7. useCallback
// 8. useImperativeHandele
// 9. useLayoutEffect
// 10. useDebugValue

// 1. useState. Взято из 4.Theory StarWarsNameFunction

// const [state, setState] = React.useState({name: 'Andrey', count: 0});//установка первоначального state таким вот образом [state, setState].
// const handleClick = () => {
//   setState((prevState) => ({...prevState, name: 'someoneElse'}));//установка нов состояния. SetState((что было)=>(что будет))
//   setState((prevState) => ({...prevState, count: prevState.count + 1}));
// };
// console.log('>>', state.count);

// 2. useEffect.

// React.useEffect(). Всегда вызывается при первом рендере. Принимает в себя 2 аргумента (effect,deps),тобишь ф и за чем следить.

// export function MyHooks({title, id}: {title:string, id?: string}) {
//   // React.useEffect(()=>{//вариант без 2го арг deps. Выполняется кажд раз при изм title.
//   //   console.log('componentDidMount');
//   //   console.log('componentWillUpdate');
//   // })
//   //
//   // React.useEffect(()=>{
//   //   console.log('componentDidMount');
//   // return ()=>{//если указать return то оно б вызываться перед unmount.
//   //   console.log('componentWillUnmount');
//   //  }
//   // }, [])//говорим что мы следим за чем-то, соотв componentWillUpdate не выполняется
//
//   // React.useEffect(()=>{
//   //   console.log('componentWillReceiveProps:', title);
//   // }, [title])//теперь useEffect б срабть кажд раз при изм в title
//   //
//
//   const [isMounted]= useIsMounted();
//   React.useEffect(()=>{
//     console.log('isMounted', isMounted);
//   }, [isMounted])//следит за этим состоянием. Если без deps, то будет рендериться при любом изменении. С ним же, он меняется только тогда когда он Mounted или unMounted.
//
//   return (
//     <div>{title} {id}</div>
//   )
// }
//
// function useIsMounted() {//кастомный Hook, кот будет возвращать true когда комп примонтирован
//   const [isMounted, setIsMounted] = React.useState(false);
//
//   React.useEffect(()=> {
//     setIsMounted(true);
//   }, [])//указываем пустую зависимость и б срабатывать на didMount
//
//   return [isMounted];//можно без [] но так использует React.
// }

// 3. useMemo
////запоминает вычисление и не выполняется кажд раз. Используется для сложных вычислений

function calculate(items: number, multiplier:number) {
  return new Array(items).fill(1).reduce((a,v)=> a*multiplier)
}

export function MyHooks({title, id}: {title:string, id?: string}) {
  const items = 10;
  const multiplier = 5;
  const result = React.useMemo(
    ()=> {
      console.log('CALC')
      calculate(items,multiplier)
    },
    [items,multiplier]
  )


  return (
    <div>{title} {id} {result}</div>
  )
}


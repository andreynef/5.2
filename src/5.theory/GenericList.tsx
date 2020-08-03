import React from "react";

interface IItem {
  id: string;
  // value: string;
  text: string;
  onClick?: (id:string)=> void;//кажд item будет иметь свой метод клтка. Удалить при глобальном онклике
  className?: string;// у кажд эл свой уник класс
  As ?: 'a' | 'li' | 'button' | 'div';
  href ?: string;
}

interface IItemOld {
  id: string;
  value: string;
  onClick?: (id:string)=> void;//кажд item будет иметь свой метод клтка. Удалить при глобальном онклике
}

interface IMyListProps {
  list: IItemOld[];
  // onClick: (id:string)=>void;//глобальный онклик. Добавить к MyList еще onClick MyList({list, onClick}
}

export function MyList({list}: IMyListProps) {
  return(
    <ul>
      {list.map((item)=>(
        // <li onClick={()=> onClick(item.id)} key={item.id}> {item.value}</li>//вариант с глобальным онкликом. Указываем id в онклике
        <li onClick={()=>item.onClick(item.id)} key={item.id}> {item.value}</li>//каждому эл соотв свой онклик, поэтому не нужно указывать id.
      ))}
    </ul>
  )
}

interface IGenericListProps {
  list: IItem[];
}

const noop = ()=>{};

export function GenericList({list}: IGenericListProps) {//компонент кот можен рендерить люб списки
  return (
    <>
      {list.map(({As= 'div', text, onClick= noop, className, id, href})=>(
        <As className={className}
            onClick={()=>onClick(id)}
            key={id}
            href={href}
        >
          {text}
        </As>
      ))}
    </>
  )
}
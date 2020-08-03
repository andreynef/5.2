import React from 'react';
import './main.global.css';
import {hot} from "react-hot-loader/root";
import {Layout} from "./shared/Layout";
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";
import {CardList} from "./shared/CardList";
import {MyHooks} from "./5.theory/HooksExample";
import {getValue} from "./utils/react/getValue";
import {assignId, generateID, generateRandomString} from "./utils/react/generateRandomId";
import {MyList, GenericList} from './5.theory/GenericList';
import {merge} from "./utils/js/merge";
import {Dropdown} from "./shared/Dropdown";


const LIST = [//какой-то приходящий лист со стороны.
  { text: 'some1'},
  { text: 'some2'},
  { text: 'some3'},
  { text: 'some4'},
].map(generateID)//к кажд элементу будет добавлен 'id'


function AppComponent() {//Компонент layout создан с помощью генератора (npm install -g yo ;  npm install -g generator-react-ts-component-dir). Он создает весь комплект нужный для компонента. В консоли набрать: yo react-ts-component-dir layout. Пример 'yo react-ts-component-dir [component_name] [path] [--styles] [--less] [--sass]'
  // const [isVisible, setIsVisible] = React.useState(false);
  // const [title, setTitle] = React.useState('empty');
  const [list, setList] = React.useState(LIST);

  const handleItemClick = (id:string)=> {
    setList(list.filter((item)=>item.id !== id));
  }

  // const handleAdd = ()=>{//push мутирует состояние, поэтому concat.
  //   setList(list.concat(generateID({text: generateRandomString()})));
  // }

  return (
    <Layout>
      {/*<Header />*/}
      <Content>
        <CardList />
        {/*<button onClick={()=>setIsVisible(!isVisible)}>Change me!</button>*/}
        {/*<input type={'text'} onChange={getValue(setTitle)}/>*/}
        {/*{isVisible &&*/}
        {/*<MyHooks title={title} id='12'/>*/}
        {/*}*/}
        {/*<MyList list={LIST} onClick={console.log} /> //вариант с глоб онкликом. Выводится id при онклике*/}
        <MyList list={LIST.map(merge({ onClick:handleItemClick }))}  />{/*вариант с индивид онкликом*/}
        {/*<GenericList list={LIST.map(merge({ onClick:handleItemClick }))}  />/!*вариант с индивид онкликом*!/*/}
        {/*<button onClick={handleAdd}>Add element</button>*/}
        <br />
        <Dropdown isOpen button={<button>testButton</button>}>{/* Контейнер с логикой дропа. Указано в интерфейсе button = React.ReactDom. */}
          <CardList />
        </Dropdown>
      </Content>
    </Layout>
  );
}

export const App = hot(()=> <AppComponent/>);// HOC. Если исп Hooks.
// export const App = hot(AppComponent);

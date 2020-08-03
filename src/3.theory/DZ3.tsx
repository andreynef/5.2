// 1.Напишите тип функции, конкатенирующей две строки
// concat('Hello ', 'World') // -> Hello World;

// Ответ:
type TsConcat = (...args:string[]) => string;

// 2. Работа с интерфейсами
// Напишите интерфейс для описания следующих данных

const MyHometask: IMyHomeTask = {
  howIDoIt: "I Do It Well",
  someArray: ["string one", "string two", 42],
  withData: [{ howIDoIt: "I Do It Well", someArray: ["string one", 23] }],
}
// Ответ:
interface IMyHomeTask {
  howIDoIt: string;
  someArray: (string | number)[];
  withData?: IMyHomeTask[];
}

// 3. добавьте типизацию для метода reduce

interface MyArray<T> {
  [N: number]: T;
  // Ответ:
  reduce<U>(fn:(accumulator:T, value:T) => U): MyArray<U>;//хз
}

// 4. Работа с MappedTypes. Напишите такой MyPartial чтобы создание объекта homeTask стало возможным

interface IHomeTask {
  data: string;
  numbericData: number;
  date: Date;
  externalData: {
    basis: number;
    value: string;
  }
}
const homeTask: MyPartial2000<IHomeTask> = {
  externalData: {
    value: 'win'
  }
}

// Ответ:
type MyPartial2000<T> = {
  [N in keyof T]?: T[N] extends object ? MyPartial2000<T[N]> : T[N]
}

// 5*. Работа с Generic, Mapped Types, Type inference №1
// Напишите такой тип, который извлечет тип props из этого или любого другого React компонента. Подсказка: любой реакт компонент расширяет React.ComponentType<Props>

function HomeComponent(props:{firstProp: string;}) {
  return (
    <div>
      { props.firstProp }
    </div>
  )
}
type TProps= TMyType<typeof HomeComponent>;

// Ответ:
type TMyType<T> = T extends React.ComponentType<(infer E)> ? E : T;

// 6*. Работа с Generic, Mapped Types, Type inference №2
// Напишите такой тип TGetJSXPropsProp, который извлекает все HTML свойства, доступные для любого jsx элемента.
type TDivElement = JSX.IntrinsicElements['div'];// Этот тип описывает все свойства, доступные для HTMLDivElement.

// Ответ:

type TTargetDiv = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;// тжсм TDivElement
// вынимаю React.HTMLAttributes<HTMLDivElement> ( он же 'T<>' в схеме xxx<T<yyy>, yyy>;)
type TGetJSXPropsProp<T extends keyof JSX.IntrinsicElements> =//<тип ключа 'div' расширяющий все ключи JSX элементов в базе
  JSX.IntrinsicElements[T] extends React.DetailedHTMLProps<infer E, any> ? E : never;//этот тип ключа 'div' расширяет свой источник? (конечно да ибо показал сам себя) то заглядываем в угловые скобки ('<T<yyy>, yyy>') обозначаем заводской функцией 'infer E' первый аргумент, а второй 'any' (тк он не важен, но должен быть указан тк в источнике 2 аргумента), и возвращаем то что ищем 'E' (= 'T<yyy>' он же React.HTMLAttributes<HTMLDivElement>) иначе 'never' тк оно никогда не случится ибо ответ условия очевиден и не существует др ответов кроме как 'да'.

type TDivProps = TGetJSXPropsProp<'div'>;
const props: TDivProps = {
  // some: '1233', // throw error потому что не содержится в атрибутах div
  className: 'handler', // не выкидывает ошибку так как валидно для div элемента
}

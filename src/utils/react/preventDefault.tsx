export function preventDefault<T extends (e: any) => void>(fn: T) {//ф высш порядка. Эта ф принимает ф...
  return <E extends React.SyntheticEvent<any>>(e: E) => {//...кот возвращ ф с принимающим event'ом кот в свою очередь...
    e.preventDefault();//...выполняет превент...
    fn(e);// и передает в наш начальный callback наш event дальше
  }
}
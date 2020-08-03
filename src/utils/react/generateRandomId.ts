//nanoid

import {assoc} from "../js/assoc";

export const generateRandomString = ()=> Math.random().toString(36).substring(2,15);

export const assignId = assoc('id', generateRandomString());//добавит к люб входящему обьекту доп ключ 'id' со значением generateRandomId().
//оно выполнится только 1 раз тк указся сразу вызов. Поэтому нужно создать генератор (ф выз ф).

export const generateID = <O extends object>(someObj: O) =>
  assoc('id', generateRandomString()
  //assignId(obj); //либо так, используя предыдущ ф.
  );
import React from 'react';
import styles from './dropdown.css';

interface IDropdownProps {
  button: React.ReactNode;//на что жмем
  children: React.ReactNode;//что будет выпадать
  isOpen?: boolean;//список будет контролироваться "сверху"
  onOpen?: ()=> void;
  onClose?: ()=> void;
}

export function Dropdown({button, children, isOpen, onClose, onOpen}: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);//изначальное состояние указано "сверху".

  const handleOpen =()=>{
    if (isOpen === undefined) {//если не указан то действие по умолчанию
      setIsDropdownOpen(!isDropdownOpen)
    }
  }

  return (
    <div className={styles.container}>
      <div onClick={handleOpen}>{/*handler на переключение обьекта*/}
        {button}
      </div>
      {isDropdownOpen && (
        <div className={styles.listContainer}>{/*контейнер для нашего списка*/}
          <div className={styles.list} onClick={()=>setIsDropdownOpen(false)}>{/*handler на нажатие на список. Закрывается при нажатии*/}
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

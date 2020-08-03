import React from 'react';
import styles from './layout.css';

interface ILayoutProps {
  children?: React.ReactNode;
}

export function Layout({children}: ILayoutProps) {
  return (//children это удобн способ рендерить одни комп в др комп не привязывая их к др др с пом imports
    <div className={styles.layout}>
      {children}
    </div>
  );
}




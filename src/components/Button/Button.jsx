import React from 'react';
import AddIcon from '../AddIcon/AddIcon';
import styles from './Button.module.scss';

const Button = ({ add, children, ...restProps }) => {
  return (
    <button className={styles.button} {...restProps}>
      {add ? <AddIcon /> : ''}
      <span>{children}</span>
    </button>
  );
};

export default Button;

import React from 'react';
import styles from './Button.module.scss';

const Button = ({ children, ...restProps }) => {
  return (
    <button className={styles.button} {...restProps}>
      {children}
    </button>
  );
};

export default Button;

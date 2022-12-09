import React from 'react';
import styles from './Button.module.scss';

const Button = ({ ...restProps }) => {
  return <button className={styles.button} {...restProps}></button>;
};

export default Button;

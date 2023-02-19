import React from 'react';
import styles from './AddIcon.module.scss';

const AddIcon = () => {
  return (
    <div className={styles.iconContainer}>
      <svg
        width='9'
        height='9'
        viewBox='0 0 8 9'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M1 4.5H7M4 1.5L4 7.5'
          stroke='#5A70FA'
          strokeWidth='1.5'
          strokeLinecap='round'
        />
      </svg>
    </div>
  );
};

export default AddIcon;

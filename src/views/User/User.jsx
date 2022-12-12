import React from 'react';
import Button from '../../components/Button/Button';
import styles from './User.modules.scss';

const User = () => {
  return (
    <>
      <div className={styles.title}>You have logged in!</div>
      <p>Site in process...</p>
      <Button>Logout</Button>
    </>
  );
};

export default User;

import React from 'react';
import Button from '../../Button/Button';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navigation}>
        <Button add>Create new workspace</Button>
        <div className={styles.profile}></div>
      </div>
    </div>
  );
};

export default Navbar;

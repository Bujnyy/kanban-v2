import React from 'react';
import styles from './Layout.module.scss';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';

const Layout = ({ children, ...props }) => {
  return (
    <>
      <Navbar />
      <div className={styles.mainWrapper}>
        <Sidebar />
        {children}
      </div>
    </>
  );
};

export default Layout;

import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AddIcon from '../../components/AddIcon/AddIcon';
import Button from '../../components/Button/Button';
import Navbar from '../../components/Layout/Navbar/Navbar';
import Task from '../../components/Board/Task/Task';
import { AuthContext } from '../../context/AuthContext';
import TasksColumn from '../../components/Board/BoardColumn/BoardColumn';
import TaskSection from '../../components/Board/Board';
import styles from './User.modules.scss';

const User = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authContext?.user?.token) {
      navigate('/signup');
    }
  }, [authContext]);

  const handleLogout = async (event) => {
    event.preventDefault();
    authContext.signOutAction();
  };

  return (
    <>
      <Navbar />
      <div className={styles.mainSection}>
        <div className={styles.sidebar}></div>
        <TaskSection />
      </div>

      <div className={styles.title}>You have logged in!</div>
      <p>Site in process...</p>
      <form onSubmit={handleLogout}>
        <Button>Logout</Button>
      </form>
    </>
  );
};

export default User;

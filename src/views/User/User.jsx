import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AddIcon from '../../components/AddIcon/AddIcon';
import Button from '../../components/Button/Button';
import Navbar from '../../components/Navbar/Navbar';
import Task from '../../components/TaskSection/Task/Task';
import { AuthContext } from '../../context/AuthContext';
import styles from './User.modules.scss';
import TasksColumn from '../../components/TaskSection/TasksColumn/TasksColumn';
import TaskSection from '../../components/TaskSection/TaskSection';

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
      <TaskSection />

      {/* <div className={styles.title}>You have logged in!</div>
      <p>Site in process...</p>
      <form onSubmit={handleLogout}>
        <Button>Logout</Button>
      </form> */}
    </>
  );
};

export default User;

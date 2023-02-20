import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AddIcon from '../../components/AddIcon/AddIcon';
import Button from '../../components/Button/Button';
import Task from '../../components/Board/Task/Task';
import { AuthContext } from '../../context/AuthContext';
import TasksColumn from '../../components/Board/BoardColumn/BoardColumn';
import TaskSection from '../../components/Board/Board';
import styles from './User.modules.scss';
import Layout from '../../components/Layout/Layout';

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
      <Layout>
        <TaskSection />
      </Layout>
      {/* <div className={styles.mainSection}>
        
      </div> */}

      {/* <div className={styles.title}>You have logged in!</div>
      <p>Site in process...</p>
      <form onSubmit={handleLogout}>
        <Button>Logout</Button>
      </form> */}
    </>
  );
};

export default User;

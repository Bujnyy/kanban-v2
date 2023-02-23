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
import Input from '../../components/Input/Input';

const User = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authContext?.user?.token) {
      navigate('/signup');
    }
  }, [authContext]);

  // const handleLogout = async (event) => {
  //   event.preventDefault();
  //   authContext.signOutAction();
  // };

  const handleCreateTask = async (event) => {
    event.preventDefault();
    console.log(new FormData(event.currentTarget));
    const data = new FormData(event.currentTarget);
    console.log(authContext);

    authContext?.createTaskAction({
      title: data.get('title'),
      description: data.get('description'),
      difficulty: data.get('difficulty'),
    });
  };

  return (
    <>
      <Layout>
        <TaskSection />
        {/* <div className={styles.mainSection}>
        
      </div> */}

        {/* <div className={styles.title}>You have logged in!</div>
      <p>Site in process...</p>
      <form onSubmit={handleLogout}>
        <Button>Logout</Button>
      </form> */}

        {/* <form onSubmit={handleCreateTask}> */}
        <form method='post' onSubmit={handleCreateTask}>
          <Input type='text' name='title' placeholder='Enter title' />
          <Input
            type='text'
            name='description'
            placeholder='Enter description'
          />
          <Input type='text' name='difficulty' placeholder='Enter difficulty' />
          <Button>add</Button>
        </form>
      </Layout>
    </>
  );
};

export default User;

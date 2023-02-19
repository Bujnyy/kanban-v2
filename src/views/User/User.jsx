import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AddIcon from '../../components/AddIcon/AddIcon';
import Button from '../../components/Button/Button';
import Navbar from '../../components/Navbar/Navbar';
import Task from '../../components/Task/Task';
import { AuthContext } from '../../context/AuthContext';
import styles from './User.modules.scss';
import macbook from '../../../public/meeting.jpeg';

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
      <Task
        title='Research competition’s product design'
        description='Make research about other kanban projects to make sure that our
        product is the best'
        difficulty='LOW'
        date='Sept 22, 2022'
        image={macbook}
      />
      <Task
        title='Research competition’s product design'
        description='Make research about other kanban projects to make sure that our
        product is the best'
        difficulty='LOW'
        date='Sept 22, 2022'
      />
      <Task
        title='Research competition’s product design'
        description='Make research about other kanban projects to make sure that our
        product is the best'
        difficulty='LOW'
        date='Sept 22, 2022'
      />
      <Task
        title='Research competition’s product design'
        description='Make research about other kanban projects to make sure that our
        product is the best'
        difficulty='LOW'
        date='Sept 22, 2022'
      />

      {/* <div className={styles.title}>You have logged in!</div>
      <p>Site in process...</p>
      <form onSubmit={handleLogout}>
        <Button>Logout</Button>
      </form> */}
    </>
  );
};

export default User;

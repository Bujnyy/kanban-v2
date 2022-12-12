import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Home = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (AuthContext?.user?.token) {
      navigate('/user');
    } else {
      navigate('/signin');
    }
  }, [authContext]);
  return <div></div>;
};

export default Home;

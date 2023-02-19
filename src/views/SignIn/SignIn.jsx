import React, { useContext, useEffect } from 'react';
import styles from './SignIn.module.scss';
import classnamesBind from 'classnames/bind';
import { useState } from 'react';
import { signIn } from '../../api/sessionsApi';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input/Input';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';

const classnames = classnamesBind.bind(styles);

const SignIn = () => {
  const [isColorRed, setIsColorRed] = useState(false);

  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (authContext?.user?.token) {
      navigate('/user');
    }
  }, [authContext]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(authContext);

    authContext?.signInAction({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <div className={styles.main}>
      <div className={styles.formMain}>
        <div className={styles.formContainer}>
          <div className={styles.formTitle}>
            <div className={styles.header}>Welcome back</div>
            <div className={styles.subtitle}>Please enter your details</div>
          </div>
          <div className={styles.formWrapper}>
            <form onSubmit={handleSubmit}>
              <Input type='text' name='email' placeholder='Enter your e-mail' />
              <Input
                type='password'
                name='password'
                placeholder='Enter your password'
                autoComplete='on'
              />
              <Button>Continue</Button>
            </form>
            <div className={styles.subtitle}>
              Don't have an account?{' '}
              <b>
                <Link to='/signup'>Sign up</Link>
              </b>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.imageMain}>
        <div className={styles.imageTitle}>
          A simple, efficient and easy way to collaborate
        </div>
        <div className={styles.image}>
          {/* <img src='../../../public/macbook.png' /> */}
        </div>
      </div>
    </div>
  );
};

export default SignIn;

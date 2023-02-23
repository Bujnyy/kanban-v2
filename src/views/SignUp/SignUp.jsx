import React, { useContext } from 'react';
import { useEffect } from 'react';
import { signUp } from '../../api/sessionsApi.js';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import styles from './SignUp.module.scss';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';

const SignUp = () => {
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

    authContext?.signUpAction({
      email: data.get('email'),
      password: data.get('password'),
    });

    navigate('/signin');
  };

  // authContext.signUpAction({email: "test", password: "test"})

  return (
    <div className={styles.main}>
      <div className={styles.formMain}>
        <div className={styles.formContainer}>
          <div className={styles.formTitle}>
            <div className={styles.header}>Register account</div>
            <div className={styles.subtitle}>Please enter your details</div>
          </div>
          <div className={styles.formWrapper}>
            <form method='post' onSubmit={handleSubmit}>
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
              Already have an account?{' '}
              <b>
                <Link to='/signin'>Sign in</Link>
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

export default SignUp;

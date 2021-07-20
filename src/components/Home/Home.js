import React from 'react';
import Card from '../UI/Card/Card';
import styles from './Home.module.css';
import Button from '../UI/Button/Button';

const Home = ({ onLogout }) => {
  return (
    <Card className={styles.home}>
      <h1>Welcome back!</h1>
      <Button onClick={onLogout}>
        Log Out
      </Button>
    </Card>
  );
};

export default Home;

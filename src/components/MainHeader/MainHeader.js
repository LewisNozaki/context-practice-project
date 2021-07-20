import React from 'react';
import Navigation from './Navigation';
import styles from './MainHeader.module.css';

const MainHeader = ({ isAuthenticated, onLogout }) => {
  return (
    <header className={styles['main-header']}>
      <h1>GingerLily</h1>
      <Navigation onLogout={onLogout} />
    </header>
  );
};

export default MainHeader;

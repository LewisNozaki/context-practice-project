import React from 'react';
import styles from './Navigation.module.css';
import AuthContext from '../../store/auth-context'; // <-- our context state store.

const Navigation = ({ isLoggedIn, onLogout }) => {
  return (
    <AuthContext.Consumer>
      {(contextData) => {
        return (
          <nav className={styles.nav}>
            <ul>
              {contextData.isLoggedIn && (
                <li>
                  <a href="/">Users</a>
                </li>
              )}
              
              {contextData.isLoggedIn && (
                <li>
                  <a href="/">Admin</a>
                </li>
              )}
              
              {contextData.isLoggedIn && (
                <li>
                  <button onClick={onLogout}>Logout</button>
                </li>
              )}
            </ul>
          </nav>
        )
      }}
    </AuthContext.Consumer>
  );
};

export default Navigation;

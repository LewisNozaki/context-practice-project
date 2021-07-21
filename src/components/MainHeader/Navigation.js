import React, { useContext } from 'react';
import styles from './Navigation.module.css';
import AuthContext from '../../store/auth-context'; // <-- our context state store.

const Navigation = () => {
  // the useContext hook 
  // Save the return value into a new variable. 
  // the useContext takes in the store we imported and returns an object of the store's value.
  const contextData = useContext(AuthContext);

  return (
    // Using the .Consumer method
    // <AuthContext.Consumer>
    //   {(contextData) => {
    //     return (
    //       <nav className={styles.nav}>
    //         <ul>
    //           {contextData.isLoggedIn && (
    //             <li>
    //               <a href="/">Users</a>
    //             </li>
    //           )}
              
    //           {contextData.isLoggedIn && (
    //             <li>
    //               <a href="/">Admin</a>
    //             </li>
    //           )}
              
    //           {contextData.isLoggedIn && (
    //             <li>
    //               <button onClick={onLogout}>Logout</button>
    //             </li>
    //           )}
    //         </ul>
    //       </nav>
    //     )
    //   }}
    // </AuthContext.Consumer>
    
    // Using the hooks method
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
            <button onClick={contextData.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;

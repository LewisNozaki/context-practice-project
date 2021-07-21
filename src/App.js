import React, { useContext } from 'react';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

const App = () => {
  const contextData = useContext(AuthContext);
  
  return (
    <>
      <MainHeader /> 
      <main>
        {!contextData.isLoggedIn && <Login onLogin={contextData.onLogin} />}
        {contextData.isLoggedIn && <Home onLogout={contextData.onLogout} />}
      </main>
    </>
  );
}

export default App;

import React, { useState, useEffect } from "react";

// This initiates the context store. Place the initial state in between the parenthesis.
const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {}
});

// Named export
export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // useEffect
  useEffect(() => {
    const LSisLoggedIn = localStorage.getItem("isLoggedIn");

    if (LSisLoggedIn) {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    console.table({
      email: email, 
      password: password
    });
    
    localStorage.setItem("isLoggedIn", "1");

    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");

    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler
      }}
    >
      {children}
    </AuthContext.Provider>
  )
};

export default AuthContext;

// Providing: 
// After creating the context with the initial state, we export it and then we wrap the context
// component around any component that may need access to the state store. For this project, 
// all components need access because we are using a simple authentication. So, we will go to App.js
// and wrap it with the context component. <AuthContext.Provider>

// Listening: 
// After we provide the state store to our components, we need a way for the components to listen the state
// and make changes to it accordingly. We can do that in two ways. We can use hooks or we can use the built in 
// consumer method. <AuthContext.Consumer>. Look at the Navigation.js file for an example using the consumer method.
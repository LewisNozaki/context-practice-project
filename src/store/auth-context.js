import React from "react";

// This initiates the context store. Place the initial state in between the parenthesis.
const AuthContext = React.createContext({
  isLoggedIn: false,
});

export default AuthContext;

// After creating the context with the initial state, we export it and then we wrap the context
// component around any component that may need access to the state store. For this project, 
// all components need access because we are using a simple authentication. So, we will go to App.js
// and wrap it with the context component. 
import React from "react";

// This initiates the context store. Place the initial state in between the parenthesis.
const AuthContext = React.createContext({
  isLoggedIn: false,
});

export default AuthContext;
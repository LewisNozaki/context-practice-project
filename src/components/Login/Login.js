import React, { useState, useReducer, useEffect, useContext } from 'react';
import Card from '../UI/Card/Card';
import styles from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Input from "../UI/Input/Input";

// Reducer function
const emailReducer = (latestState, action) => {
  if (action.type === "USER_EMAIL_INPUT") {
    let isValid = null;

    if (action.val.length > 0 && action.val.includes("@")) {
      isValid = true;
    }

    return {
      value: action.val,
      isValid: isValid
    };
  }

  if (action.type === "INPUT_BLUR") {
    return {
      value: latestState.value,
      isValid: latestState.value.includes("@")
    }
  }

  // default return
  return {
    value: "",
    isValid: null
  };
};

const passwordReducer = (latestState, action) => {
  if (action.type === "USER_PW_INPUT") {
    let isValid = null;
    
    if (action.val.length > 0 && action.val.trim().length > 6) {
      isValid = true;
    }

    return {
      value: action.val,
      isValid: isValid
    };
  }

  if (action.type === "INPUT_BLUR") {
    return {
      value: latestState.value,
      isValid: latestState.value.trim().length > 6
    }
  }

  // default return
  return {
    value: "",
    isValid: null
  }
}

let initialState = {
  value: "",
  isValid: null
};

///////////////
// Component //
///////////////

const Login = ({ onLogin }) => {
  // useState
  const [formIsValid, setFormIsValid] = useState(false);

  // useContext
  const contextData = useContext(AuthContext);

  // useReducer
  const [emailState, dispatchEmail] = useReducer(emailReducer, initialState);
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, initialState);

  // Object destructuring - alias assignments
  const { isValid: emailIsValid } = emailState;
  const { isValid: pwIsValid } = passwordState;

  // useEffect
  useEffect(() => {
    const validityTimer = setTimeout(() => {
      setFormIsValid(emailIsValid && pwIsValid);
    }, 200);
    
    return () => {
      clearTimeout(validityTimer);
    };
  }, [emailIsValid, pwIsValid]);
  
  const emailChangeHandler = e => {
    dispatchEmail({
      type: "USER_EMAIL_INPUT",
      val: e.target.value
    });
  };

  const passwordChangeHandler = e => {
    dispatchPassword({
      type: "USER_PW_INPUT",
      val: e.target.value
    })
  };
  
  const validateEmailHandler = () => {
    dispatchEmail({
      type: "INPUT_BLUR"
    });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({
      type: "INPUT_BLUR"
    });
  };
  
  const submitHandler = e => {
    e.preventDefault();

    if (formIsValid) {
      contextData.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      
    } else {

    }
  };

  return (
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>
      <Input 
          type="email"
          id="email"
          htmlFor="email"
          label="E-mail"
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          isValid={emailState.isValid}
        />
        <Input 
          type="password"
          id="password"
          htmlFor="password"
          label="Password"
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          isValid={passwordState.isValid}
        />
        <div className={styles.actions}>
          <Button 
            type="submit" 
            // disabled={!formIsValid}
          >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;

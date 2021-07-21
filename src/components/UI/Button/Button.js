import React from 'react';
import styles from './Button.module.css';

const Button = ({ type, onClick, disabled, children }) => {
  return (
    <button
      type={type || 'button'}
      className={`${styles.button}`}
      onClick={onClick || null}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;

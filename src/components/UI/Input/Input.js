import React, { useRef } from "react";
import styles from "./Input.module.css";

const Input = ({ type, id, value, onChange, onBlur, isValid, htmlFor, label }) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  }
  
  return (
    <div
      className={`${styles.control} ${isValid === false ? styles.invalid : ""}`}
    >
      <label htmlFor={htmlFor}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        autoComplete="off"
      />
    </div>
  )
}

export default Input;
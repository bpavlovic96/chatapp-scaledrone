import styles from "./Input.module.css";
import { useState } from "react";

function Input({ onSendChange }) {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" && onSendChange) {
      onSendChange(value);
      setValue("");
    }
  };

  const onButtonPress = () => {
    if (onSendChange) {
      onSendChange(value);
      setValue("");
    }
  };

  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.input}
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={value}
        placeholder="Enter your message..."
        type="text"
      />
      <button className={styles.button} onClick={onButtonPress}>
        Send
      </button>
    </div>
  );
}

export default Input;

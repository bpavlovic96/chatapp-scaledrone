import styles from "./Input.module.css";
import { useState } from "react";

function Input({ onSendChange }) {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onButtonPress = () => {
    if (onSendChange) {
      onSendChange(value);
    }
  };

  return (
    <div className="Input">
      <input
        onChange={onChange}
        value={value}
        placeholder="Enter your message"
        type="text"
      />
      <button onClick={onButtonPress}>Send</button>
    </div>
  );
}

export default Input;

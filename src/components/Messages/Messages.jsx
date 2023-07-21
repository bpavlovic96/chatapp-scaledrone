import styles from "./Messages.module.css";
import Message from "../Message/Message";
import { useEffect, useRef } from "react";

function Messages({ name, messages, currentMember }) {
  const ref = useRef(null);

  useEffect(() => {
    if (messages) {
      ref.current?.lastElementChild?.scrollIntoView();
    }
  }, [messages]);

  return (
    <ul className={styles.list} ref={ref}>
      {messages?.map((m) => (
        <Message
          message={m}
          currentMember={currentMember}
          key={m.uuid}
          name={name}
        />
      ))}
    </ul>
  );
}

export default Messages;

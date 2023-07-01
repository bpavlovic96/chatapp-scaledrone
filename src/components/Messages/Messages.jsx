import styles from "./Messages.module.css";
import Message from "../Message/Message";

function Messages({ messages, currentMember }) {
  return (
    <ul className={styles.list}>
      {messages?.map((m) => (
        <Message message={m} currentMember={currentMember} key={m.uuid} />
      ))}
    </ul>
  );
}

export default Messages;

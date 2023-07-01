import styles from "./Message.module.css";

function Message({ message, currentMember }) {
  const { member, text } = message;
  const messageFromMe = member?.id === currentMember;
  const className = messageFromMe
    ? `${styles.currentMember} ${styles.messagesMessage}`
    : `${styles.messagesMessage}`;

  return (
    <li className={className}>
      <span
        className={styles.avatar}
        style={{ backgroundColor: member.clientData.color }}
      />
      <div className={styles.messageContent}>
        <div className={styles.username}>{member.clientData.username}</div>
        <div className={styles.text}>{text}</div>
      </div>
    </li>
  );
}

export default Message;

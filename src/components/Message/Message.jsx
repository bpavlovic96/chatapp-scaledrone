import styles from "./Message.module.css";

function Message({ message, currentMember, name }) {
  const { member, text } = message;
  const messageFromMe = member?.id === currentMember;
  const className = messageFromMe
    ? `${styles.currentMember} ${styles.messagesMessage}`
    : `${styles.messagesMessage}`;

  return (
    <li className={className}>
      <div className={styles.avatarWrapper}>
        <span className={styles.username}>
          {messageFromMe ? name : member.clientData.name}
        </span>
        <span
          className={styles.avatar}
          style={{ backgroundColor: member.clientData.color }}
        />
      </div>
      <div className={styles.messageContent}>
        <div
          className={styles.text}
          style={{ backgroundColor: member.clientData.color }}
        >
          {text}
        </div>
      </div>
    </li>
  );
}

export default Message;

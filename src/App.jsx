import "./App.css";
import Messages from "./components/Messages/Messages";
import Input from "./components/Input/Input";
import { useState } from "react";

const msgs = [
  {
    member: {
      clientData: {
        color: "red",
        username: "Marko",
      },
      id: 1,
    },
    text: "Lorem",
  },
  {
    member: {
      clientData: {
        color: "blue",
        username: "Ivan",
      },
      id: 2,
    },
    text: "Ipsum",
  },
  {
    member: {
      clientData: {
        color: "green",
        username: "Josip",
      },
      id: 3,
    },
    text: "Dorem",
  },
];

const cm = {
  id: 1,
};

function App() {
  const [messages, setMessages] = useState(msgs);
  const [currentMember, setCurrentMember] = useState(cm);

  const onSendChange = (messageText) => {
    setMessages((old) => {
      const user = {
        member: {
          clientData: {
            color: "red",
            username: "Marko",
          },
          id: 1,
        },
        text: messageText,
      };
      return [...old, user];
    });
  };

  return (
    <>
      <Messages messages={messages} currentMember={currentMember} />
      <Input onSendChange={onSendChange} />
    </>
  );
}

export default App;

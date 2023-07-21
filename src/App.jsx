import "./App.css";
import Messages from "./components/Messages/Messages";
import Input from "./components/Input/Input";
import { useState, useEffect } from "react";
import { randomColor } from "./random";
import { v4 as uuidv4 } from "uuid";
import Modal from "./components/Modal/Modal";

function App() {
  const channelID = import.meta.env.VITE_CHANNEL_ID;
  const [drone, setDrone] = useState(null);

  const [messages, setMessages] = useState([]);
  const [currentMember, setCurrentMember] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const scaledrone = new window.Scaledrone(channelID, {
      data: { name: name, color: randomColor() },
    });
    setDrone(scaledrone);
    return () => {
      scaledrone.close();
    };
  }, [channelID, name]);

  useEffect(() => {
    if (drone) {
      drone.on("open", (error) => {
        if (error) {
          return console.error(error);
        }
        setCurrentMember(drone.clientId);
      });
      const room = drone.subscribe("observable-room");
      room.on("data", (data, member) => {
        setMessages((old) => {
          const msgs = [...old];
          msgs.push({
            text: data,
            member,
            uuid: uuidv4(),
          });
          return msgs;
        });
      });
    }
  }, [drone]);

  const onSendChange = (messageText) => {
    drone.publish({
      room: "observable-room",
      message: messageText,
    });
  };

  return (
    <div className="app">
      <div className="chat-container-outer">
        <div className="chat-container">
          <Messages
            messages={messages}
            currentMember={currentMember}
            name={name}
          />
          <Input onSendChange={onSendChange} />
        </div>
      </div>
      <Modal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        setName={setName}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
    </div>
  );
}

export default App;

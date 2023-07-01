import "./App.css";
import Messages from "./components/Messages/Messages";
import Input from "./components/Input/Input";
import { useState, useEffect } from "react";
import { randomColor, randomName } from "./random";
import { v4 as uuidv4 } from "uuid";

function App() {
  const channelID = import.meta.env.VITE_CHANNEL_ID;
  const [drone, setDrone] = useState(null);

  const [messages, setMessages] = useState([]);
  const [currentMember, setCurrentMember] = useState();

  useEffect(() => {
    const scaledrone = new window.Scaledrone(channelID, {
      data: { name: randomName(), color: randomColor() },
    });
    setDrone(scaledrone);
  }, [channelID]);

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
    <>
      <Messages messages={messages} currentMember={currentMember} />
      <Input onSendChange={onSendChange} />
    </>
  );
}

export default App;

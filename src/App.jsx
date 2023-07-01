import "./App.css";
import Messages from "./components/Messages/Messages";

const messages = [
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

const currentMember = {
  id: 1,
};

function App() {
  return (
    <>
      <Messages messages={messages} currentMember={currentMember} />
    </>
  );
}

export default App;

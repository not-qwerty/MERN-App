import React, { useState, useEffect, useContext } from "react";
import io from "socket.io-client";
import API from "../utils/httpService";
import UserContext from '../context/UserContext';

const socket = io.connect(API);

export default function App() {
  const [state, setState] = useState({ message: ""});
  const [chat, setChat] = useState([]);

  const userContext = useContext(UserContext);

  useEffect(() => {
    socket.on("message", ({ name, message }) => {
      setChat([...chat, { name, message }]);
    });
  });

  const onTextChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onMessageSubmit = (e) => {
    e.preventDefault();
    const { message } = state;
    const { name } = userContext.user;
    socket.emit("message", { name, message });
    setState({ message: ""});
  };

  const renderChat = () => {
    return chat.map(({ name, message }, index) => (
      <div key={index}>
        <h3>
          {name}: <span>{message}</span>
        </h3>
      </div>
    ));
  };

  return (
    <div className="container">
      <form onSubmit={onMessageSubmit}>
        <h1>Messanger</h1>

        <div>
          <input
            autoFocus
            name="message"
            onChange={(e) => onTextChange(e)}
            value={state.message}
            label="Message"
          />
        </div>
        <button>Send Message</button>
      </form>
      <div className="render-chat">
        <h1>Chat Log</h1>
        {renderChat()}
      </div>
    </div>
  );
}

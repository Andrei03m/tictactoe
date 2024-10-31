import React, { useState } from "react";
import useGameStore from "../context/store";

const Chat = ({ player }) => {
  const { chat, sendMessage } = useGameStore();
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim()) {
      sendMessage(message, player);
      setMessage("");
    }
  };

  return (
    <div className="chat">
      <h3>{player} Chat</h3>
      <div className="chat-messages">
        {chat.map((msg, idx) => (
          <div
            key={idx}
            className={`message ${msg.player === player ? "mine" : ""}`}
          >
            <span>{msg.message}</span>
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default Chat;

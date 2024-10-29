import { useState } from "react";

const Chat = () => {
  const [message, setMessage] = useState("");

  return (
    <div className="chat-container">
      <div className="messages">
        <div>
          <strong>Message</strong>
        </div>
      </div>
      <input
        type="text"
        className="text-input"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="sendButton">Send</button>
      <button className="reset">Reset All</button>
    </div>
  );
};

export default Chat;

import React, { useRef } from "react";
import { Input } from "./ChatInput.styles";

const ChatInput = () => {
  const messageRef = useRef(null);

  const sendMessage = (e) => {
    e.preventDefault();
    alert("message sent");
    messageRef.current.value = "";
  };

  return (
    <form>
      <Input placeholder="enter your message" ref={messageRef} />
      <button hidden type="submit" onClick={sendMessage}>
        SEND
      </button>
    </form>
  );
};

export default ChatInput;

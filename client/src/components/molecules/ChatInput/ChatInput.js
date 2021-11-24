import React, { useRef } from "react";
import { Input } from "./ChatInput.styles";
import { useParams } from "react-router-dom";
import { db } from "../../../firebase";
import { collection, addDoc } from "firebase/firestore";
import firebase from "firebase/compat/app";

const ChatInput = () => {
  const messageRef = useRef(null);
  const { channelName } = useParams();

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("rooms").doc(channelName).collection("messages").add({
      message: messageRef.current.value,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

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

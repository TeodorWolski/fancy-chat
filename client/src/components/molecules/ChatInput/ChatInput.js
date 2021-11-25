import React, { useRef } from "react";
import { Input } from "./ChatInput.styles";
import { useParams } from "react-router-dom";
import { db } from "../../../firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import firebase from "firebase/compat/app";

const ChatInput = () => {
  const messageRef = useRef(null);
  const { channelName } = useParams();

  const sendMessage = (e) => {
    e.preventDefault();
    try {
      db.collection("rooms").doc(channelName).collection("messages").add({
        message: messageRef.current.value,
        timestamp: serverTimestamp(),
        user: "twolsh",
        userImage:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.hfy7d_l9m73S-MjcnRNkSQHaIx%26pid%3DApi&f=1",
      });
    } catch (e) {
      console.log(e);
    }

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

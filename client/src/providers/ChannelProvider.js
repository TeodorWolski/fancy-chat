import React, { useState, useContext, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";

const ChannelContext = React.createContext();

export const useChannel = () => useContext(ChannelContext);

export const ChannelProvider = ({ children }) => {
  const [channels, loading, error] = useCollection(collection(db, "rooms"));
  const [channelInfo, setChannelInfo] = useState();

  useEffect(() => {
    channels?.docs.map((doc) => setChannelInfo(doc.data()));
  }, []);

  return (
    <ChannelContext.Provider value={{ channelInfo }}>
      {children}
    </ChannelContext.Provider>
  );
};

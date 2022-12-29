import { doc, onSnapshot } from "firebase/firestore";
import React from "react";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { db } from "../Firebase";

const styles = {
  userChat: "flex mt-2 pl-4 py-2 gap-4 hover:bg-blue-600",
  userChatInfo: "",
};

export default function Chats() {
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });
      return () => {
        unsub();
      };
    };
    currentUser.uid && getChats();
  }, [currentUser.uid]);
  console.log(Object.entries(chats));
  return (
    <div>
      {Object.entries(chats)?.map((chat) => (
        <div className={styles.userChat} key={chat[0]}>
          <img
            src={chat[1].userInfo.photoURL}
            alt="user avatar"
            className="w-[45px] h-[45px] rounded-[50%] object-cover"
          />
          <div className={styles.userChatInfo}>
            <span className="font-bold text-white text-[18px] mt-[5px]">
              {chat[1].userInfo.displayName}
            </span>
            <p className="text-[14px] text-gray-800 ">
              {chat[1].userInfo.lastMessage?.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

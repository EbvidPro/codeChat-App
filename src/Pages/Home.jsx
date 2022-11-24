import React from "react";
import Sidebar from "../Components/Sidebar";
import Chat from "../Components/Chat";

const styles = {
  home: "flex items-center justify-center bg-black h-screen text-white ",
  chatContainer:
    "flex border border-blue-400 rounded-[10px] lg:w-[65%] w-[90%] h-[80%]",
};

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.chatContainer}>
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

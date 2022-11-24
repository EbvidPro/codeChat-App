import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";

const styles = {
  sideBar:
    "flex-[1] sm:relative text-black border border-blue-200 bg-blue-400 rounded-l-[7.8px]",
};

export default function Sidebar() {
  return (
    <div className={styles.sideBar}>
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
}

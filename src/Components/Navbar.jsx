import React from "react";
import userImage from "../images/user.jpg";

const styles = {
  Navbar:
    "flex justify-between bg-blue-600 items-center h-[50px] p-[10px] rounded-tl-[7.8px]",
  user: "flex",
  userImage: "bg-white w-[24px] h-[24px] object-cover rounded-[50%] mt-[3px]",
};

export default function Navbar() {
  return (
    <div className={styles.Navbar}>
      <h1 className="text-lg">
        code
        <span className="text-2xl text-white font-bold">Chat</span>
      </h1>
      <div className={styles.user}>
        <img src={userImage} alt="user Avatar" className={styles.userImage} />
        <span className="mt-[3px] ml-[5px]">John</span>
        <button className="ml-2 p-[3px] px-[8px] text-[12px] text-black rounded-2xl bg-blue-400 hover:font-bold hover:text-blue-800 text-white font-md">
          Log Out
        </button>
      </div>
    </div>
  );
}

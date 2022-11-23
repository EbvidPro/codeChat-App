import React from "react";
import userImage from "../images/user.jpg";

const styles = {
  userChat: "flex mt-2 pl-4 py-2 gap-4 hover:bg-blue-600",
  userChatInfo: "",
};

export default function Chats() {
  return (
    <div>
      <div className={styles.userChat}>
        <img
          src={userImage}
          alt="user avatar"
          className="w-[50px] h-[50px] rounded-[50%] object-cover"
        />
        <div className={styles.userChatInfo}>
          <span className="font-bold text-white text-[18px]">Peter</span>
          <p className="text-[14px] text-gray-800 ">Hello</p>
        </div>
      </div>
    </div>
  );
}

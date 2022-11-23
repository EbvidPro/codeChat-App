import React from "react";
import userImage from "../images/user.jpg";

const styles = {
  message: "flex gap-[20px] text-black mb-[20px]",
  messageInfo: "flex flex-col ",
  messageContent: "flex max-w[80%] flex-col gap-4",
};

export default function Message() {
  return (
    <div className={styles.message}>
      <div className={styles.messageInfo}>
        <img
          src={userImage}
          alt="user avatar"
          className="w-[40px] h-[40px] rounded-[50%] object-cover"
        />
        <span>just now</span>
      </div>
      <div className={styles.messageContent}>
        <p className="p-2 bg-white rounded-md">Hello</p>
        <img
          src={userImage}
          alt=""
          className="w-[50px] h-[50px] object-contain"
        />
      </div>
    </div>
  );
}

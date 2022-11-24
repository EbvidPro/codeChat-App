import React from "react";
import userImage from "../images/user.jpg";

const styles = {
  message: "flex gap-[20px] text-black mb-[20px]",
  owner: "flex flex-row-reverse gap-[20px] text-black mb-[20px] items-end",
  messageInfo: "flex flex-col ",
  messageContent: "flex max-w[80%] flex-col gap-4",
  receiverMessage: "p-2 bg-white rounded-r-lg rounded-bl-lg max-w-max",
  senderMessage: " p-2 bg-blue-400 text-white rounded-l-lg rounded-br-lg",
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
        <span className="text-[12px] italic">just now</span>
      </div>
      <div className={styles.messageContent}>
        <p className={styles.receiverMessage}>Hello</p>
        <img
          src={userImage}
          alt=""
          className="  w-[150px] h-[150px] object-contain"
        />
      </div>
    </div>
  );
}

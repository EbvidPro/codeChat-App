import React from "react";
import attach from "../images/attachments.png";
import image from "../images/image.png";

const styles = {
  input:
    "flex justify-between items-center h-[50px] bg-white p-[10px] text-black rounded-br-[10px]",
  messageInput: "w-[70%] outline-none text-blue-800 overflow-y-scroll",
  sendButtons: "flex items-center gap-4",
  imgButtons: "w-[20px] h-[20px] object-contain cursor-pointer",
};

export default function Input() {
  return (
    <div className={styles.input}>
      <input
        type="text"
        placeholder="Send your message"
        className={styles.messageInput}
      />
      <div className={styles.sendButtons}>
        <img
          src={attach}
          alt="attachement icon"
          className={styles.imgButtons}
        />
        <input type="file" id="file" className="hidden" />
        <label htmlFor="file">
          <img src={image} alt="Send Photos" className={styles.imgButtons} />
        </label>
        <button className="text-white font-bold py-[4px] px-[8px] bg-blue-400">
          Send
        </button>
      </div>
    </div>
  );
}

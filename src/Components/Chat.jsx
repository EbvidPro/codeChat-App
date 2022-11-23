import React from "react";
import cam from "../images/camera.png";
import add from "../images/add.png";

const styles = {
  chat: "flex-auto bg-white rounded-r-[10px] ",
  chatInfo:
    "flex items-center justify-between h-[50px] p-[10px] bg-blue-400 rounded-tr-[7.8px]",
  chatIcons: "flex gap-2",
  imgIcons: "w-[30px] h-[30px] object-contain pl-2 cursor-pointer",
};

export default function Chat() {
  return (
    <div className={styles.chat}>
      <div className={styles.chatInfo}>
        <span>Jane</span>
        <div className={styles.chatIcons}>
          <img src={cam} alt="camera icon" className={styles.imgIcons} />
          <img src={add} alt="add friends icon" className={styles.imgIcons} />
        </div>
      </div>
    </div>
  );
}

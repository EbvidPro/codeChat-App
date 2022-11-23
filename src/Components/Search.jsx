import React from "react";
import userImage from "../images/user.jpg";

const styles = {
  searchForm: "m-4",
  searchInput:
    "border-b-2 bg-transparent placeholder-gray-800 text-bold w-[100%]",
  userChat: "flex mt-6 pl-4 py-2 gap-4 hover:bg-blue-600",
};

export default function Search() {
  return (
    <div>
      <div className={styles.searchForm}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Find a user . . ."
        />
      </div>
      <div className={styles.userChat}>
        <img
          src={userImage}
          alt="user avatar"
          className="w-[50px] h-[50px] rounded-[50%] object-cover"
        />
        <div className={styles.userChatInfo}>
          <span className="font-bold text-white text-[18px]">Jane</span>
          <p className="text-[14px] text-gray-800 ">Hello</p>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import userImage from "../images/user.jpg";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const styles = {
  Navbar:
    "flex justify-between bg-blue-600 items-center h-[50px] p-[10px] rounded-tl-[7.8px]",
  user: "flex",
  userImage: "bg-white w-[24px] h-[24px] object-cover rounded-[50%] mt-[3px]",
};

export default function Navbar() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className={styles.Navbar}>
      <h1 className="text-l lg:block hidden">
        code
        <span className="text-xl text-white font-bold">Chat</span>
      </h1>
      <div className={styles.user}>
        <img
          src={currentUser.photoURL}
          alt="user Avatar"
          className={styles.userImage}
        />
        <span className="mt-[3px] ml-[5px]">{currentUser.displayName}</span>
        <button
          onClick={() => signOut(auth)}
          className="ml-2 p-[3px] px-[8px] text-[12px] text-black rounded-2xl bg-blue-400 hover:font-bold hover:text-blue-800 text-white"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}

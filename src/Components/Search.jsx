import React from "react";
import { useState } from "react";
import { db } from "../Firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const styles = {
  searchForm: "m-4",
  searchInput:
    "border-b-2 bg-transparent placeholder-gray-800 text-bold w-[100%] outline-none text-blue-800",
  userChat: "flex mt-6 pl-4 py-2 gap-4 hover:bg-blue-600",
};

export default function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    // Check whether the group(chats in firestore) exists, if not create a new one
    const combinedID =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedID));

      if (!res.exists()) {
        await setDoc(doc(db, "chats", combinedID), {
          messages: [],
        });

        // Updating userChats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedID + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedID + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedID + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedID + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {}

    setUser(null);
    setUsername("");
  };

  return (
    <div>
      <div className={styles.searchForm}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Find a user . . ."
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      {err && <span>User not Found</span>}
      {user && (
        <div className={styles.userChat} onClick={handleSelect}>
          <img
            src={user.photoURL}
            alt="user avatar"
            className="w-[50px] h-[50px] rounded-[50%] object-cover"
          />
          <div className={styles.userChatInfo}>
            <span className="font-bold text-white text-[18px]">
              {user.displayName}
            </span>
            <p className="text-[14px] text-gray-800 ">Hello</p>
          </div>
        </div>
      )}
    </div>
  );
}

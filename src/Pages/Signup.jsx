import React, { useState } from "react";
import image from "../images/image.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../Firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc, collection } from "firebase/firestore";

const styles = {
  container: "bg-black h-full py-[10%] ",
  formContainer:
    "flex flex-col justify-center m-auto bg-white max-w-[275px] py-10 rounded-lg",
  formHeader: "text-center mb-4",
  formStyle: "px-8",
  textInput: "border-b-2 border-blue-200 p-1 mb-4 bg-transparent max-w-[100%]",
  signUp:
    "relative border-6 bg-black py-2 px-5 rounded-md text-white mt-4 float-right hover:text-blue-400 hover:font-bold focus:ring focus-ring-blue-400",
};

export default function Signup() {
  const [err, setErr] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res);
      const storageRef = ref(storage, displayName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      // Register three observers:
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          const fixedProgress = progress.toFixed(1);
          console.log("Upload is " + fixedProgress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
          }
        },
        (error) => {
          setErr(true);
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(collection(db, "users"), res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
            await setDoc(doc(collection(db, "userChats"), res.user.uid), {});
          });
        }
      );
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.formHeader}>
          <h1 className="text-xl">
            code
            <span className="text-2xl text-blue-400 font-bold">Chat</span>
          </h1>
          <p className="text-sm italic">Register</p>
        </div>
        <form className={styles.formStyle} onSubmit={handleSubmit}>
          <br />
          <input
            className={styles.textInput}
            type="text"
            placeholder="Display Name"
            autoFocus
            required
          />
          <input
            className={styles.textInput}
            type="email"
            placeholder="E-mail"
            required
          />
          <input
            className={styles.textInput}
            type="password"
            placeholder="Password"
            minLength="6"
            required
          />
          <input className="hidden" type="file" id="file" />
          <label htmlFor="file" className="flex cursor-pointer ">
            <img src={image} alt="Add an Avatar" className="w-[15%] h-[15%]" />{" "}
            <span className="text-gray-600 text-sm pt-1 hover:text-blue-400 hover:font-bold">
              Add Avatar
            </span>
          </label>
          <button className={styles.signUp}>Sign Up</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p className="text-sm mt-4 px-8">
          Already have an account?
          <a className="text-blue-400 hover:font-bold" href="/">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
}

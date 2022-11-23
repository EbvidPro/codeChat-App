import React from "react";
import image from "../images/image.png";

const styles = {
  container: "bg-black h-screen py-[10%] ",
  formContainer:
    "flex flex-col justify-center m-auto bg-white max-w-[275px] py-10 rounded-lg",
  formHeader: "text-center mb-4",
  formStyle: "px-8",
  textInput: "border-b-2 border-blue-200 p-1 mb-4 bg-transparent max-w-[100%]",
  signUp:
    "relative border-6 bg-black py-2 px-5 rounded-md text-white mt-4 float-right hover:text-blue-400 hover:font-bold focus:ring focus-ring-blue-400",
};

export default function Signup() {
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
        <form className={styles.formStyle} action="">
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

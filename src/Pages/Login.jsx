import React from "react";

const styles = {
  container: "bg-black h-screen pt-[10%]",
  loginContainer:
    "flex flex-col justify-center m-auto bg-white max-w-[275px] py-10 rounded-lg ",
  loginHeader: "text-center mb-4",
  loginStyle: "px-8",
  textInput: "border-b-2 border-blue-200 mb-4 bg-transparent max-w-[100%]  p-2",
  signIn: "border-6 bg-black py-2 px-5 rounded-md text-white mt-4 ",
};

export default function Signup() {
  return (
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <div className={styles.loginHeader}>
          <h1 className="text-xl">
            code
            <span className="text-2xl text-blue-400 font-bold">Chat</span>
          </h1>
          <p className="text-sm italic">Log In</p>
        </div>
        <form className={styles.loginStyle} action="">
          <br />
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
            required
          />
          <button className={styles.signIn}>Sign in</button>
          <p className="text-sm mt-4">
            Don't have an account?
            <a className="text-blue-400 hover:font-bold" href="/signup">
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { auth } from "../Firebase";
import { useNavigate, Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const styles = {
  container: "bg-black h-full py-[10%]",
  loginContainer:
    "flex flex-col justify-center m-auto bg-white max-w-[275px] py-10 rounded-lg ",
  loginHeader: "text-center mb-4",
  loginStyle: "px-8",
  textInput: "border-b-2 border-blue-200 mb-4 bg-transparent max-w-[100%]  p-2",
  signIn: "border-6 bg-black py-2 px-5 rounded-md text-white mt-4 ",
};

export default function Login() {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (err) {
      setErr(true);
    }
  };
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
        <form className={styles.loginStyle} onSubmit={handleSubmit} action="">
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
          {err && <p className="italic">Something went wrong</p>}
          <p className="text-sm mt-4">
            Don't have an account?
            <Link className="text-blue-400 hover:font-bold" to="/signup">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

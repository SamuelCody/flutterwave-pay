import React, { useRef } from "react";
import { useAlert } from "react-alert";
import "./Login.css";

function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const alert = useAlert();

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = userRef.current.value.toLowerCase();
    const password = passwordRef.current.value.toLowerCase();

    if (username !== "sam" && password !== "1234") {
      return alert.error("Invalid Login.");
    }
    window.location.replace("/payment");
  };
  return (
    <div className="center">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="inputbox">
          <input ref={userRef} type="text" required="required" />
          <span>Username</span>
        </div>
        <div className="inputbox">
          <input ref={passwordRef} type="password" required="required" />
          <span>Password</span>
        </div>
        <div className="inputbox">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default Login;

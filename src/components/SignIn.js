import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";

const SignIn = () => {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signin">
      <form className="signin_form" onSubmit={handleSubmit}>
        <h3>User Id</h3>
        <input
          type="text"
          ref={inputRef}
          placeholder="Email-id"
          value={email}
          onChange={(e) => {
            SetEmail(e.target.value);
          }}
        />
        <h3>Password</h3>
        <input
          type="password"
          ref={inputRef}
          placeholder="Password"
          value={password}
          onChange={(e) => SetPassword(e.target.value)}
        />
        <button className="signin_button" type="submit">
          Login
        </button>
        <p>
          Don't have an account <Link to="/signup">Click here</Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;

import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const inputRef = useRef(null);

  const handleRegister = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signup">
      <form className="signup_form" onSubmit={handleRegister}>
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
        <button className="signup_button" type="submit">
          Sign Up
        </button>
        <p>
          Already have an account <Link to="/signin">Click here</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../UserContext";
import "./SignUp.css";

const SignUp = () => {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [error, SetError] = useState("");
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    SetError("");
    try {
      await createUser(email, password);
      navigate("/signin");
    } catch (e) {
      SetError(e.message);
      alert(e);
      console.log(e.message);
      console.log(error);
    }
  };

  return (
    <div className="signup">
      <form className="signup_form" onSubmit={handleRegister}>
        <h3>User Id</h3>
        <input
          type="text"
          placeholder="Email-id"
          value={email}
          onChange={(e) => {
            SetEmail(e.target.value);
          }}
        />
        <h3>Password</h3>
        <input
          type="password"
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

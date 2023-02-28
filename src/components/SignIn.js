import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../UserContext";
import "./SignIn.css";

const SignIn = () => {
  const { loginUser } = UserAuth();
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [error, SetError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    SetError("");
    try {
      await loginUser(email, password);
      navigate("/");
    } catch (e) {
      SetError(e.message);
      alert(e);
      console.log(e.message);
    }
  };

  return (
    <div className="signin">
      <form className="signin_form" onSubmit={handleSubmit}>
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

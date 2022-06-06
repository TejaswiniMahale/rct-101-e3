import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [loginCreds, setLoginCreds] = useState({
    email: "teju@o.in",
    password: "cityslicka",
  });
  const { login } = useContext(AuthContext);

  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginCreds.email && loginCreds.password) {
      login();
    }
  };
  return (
    <div className="login">
      <h1 style={{marginBottom:"30px"}}>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="secDiv">
        <input
          data-cy="login-email"
          name="email"
          type="email"
          placeholder="Enter Email"
          value={loginCreds.email}
          onChange={hanldeChange}
          style={{marginBottom:"30px"}}
          className="inputOF"
        /><br/>
        <input
          data-cy="login-password"
          name="password"
          type="password"
          placeholder="Enter Password..."
          value={loginCreds.password}
          onChange={hanldeChange}
          className="inputOF"
          style={{marginBottom:"30px"}}
        />
        
        <button data-cy="login-submit" type="submit" className="inButton">
          Login
        </button>
        </div>
      </form>
    </div>
  );
};

export default Login;

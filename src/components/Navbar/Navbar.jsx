import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { isAuth, logout } = useContext(AuthContext);
  
  const navigate = useNavigate();
  const handleLoginClick = () => {
    // login screen
    if (isAuth) {
      logout();
      // he wants to logout
    } else {
      // he wants to login
      navigate("/login");
    }
  };
  return (
    <div data-cy="navbar" className="navbar">
     
        <Link data-cy="navbar-home-link" to="/"></Link>
      
     
        <div data-cy="navbar-cart-items-count" style={{marginLeft:"1000px"}}>
          Cart:0
        </div>
        <button style={{marginLeft:"100px",width:"100px"}} data-cy="navbar-login-logout-button" onClick={handleLoginClick}>
          {isAuth ? "Logout" : "Login"}
        </button>
      
    </div>
  );
};

export default Navbar;

import React, { createContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const login = () => {
    localStorage.setItem("token", "");
    setIsAuth(true);
  };
  const logout = () => {
    localStorage.setItem("token", "");
    setIsAuth(false);
  };

  useEffect(() => {
    if (isAuth) {
      navigate(from, { replace: true });
    } else {
      navigate("/login");
    }
  }, [isAuth, from, navigate]);

  return (
    <AuthContext.Provider value={{ isAuth,login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

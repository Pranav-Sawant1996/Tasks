import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");
  const [userDetails, setUserDetails] = useState(
    JSON.parse(localStorage.getItem("userDetails")) || {}
  );
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    if (isLoggedIn) {
      // console.log("mm");
      const user = JSON.parse(localStorage.getItem("userDetails"));
      setUserDetails(user);
    }
  }, [isLoggedIn]);

  const login = (userDetails) => {
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    localStorage.setItem("isLoggedIn", true);
    setIsLoggedIn(true);
  };

  const logout = () => {
    // console.log("logout")
    setIsLoggedIn(false);
    localStorage.removeItem("userDetails");
    localStorage.setItem("isLoggedIn", false);
  };

  const values = {
    isLoggedIn,
    setIsLoggedIn,
    login,
    logout,
    userDetails,
    setUserDetails,
    todo,
    setTodo,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

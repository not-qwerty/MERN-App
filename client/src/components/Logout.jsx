import React, { useEffect, useContext } from "react";
import UserContext from "../context/UserContext";

export default function Logout() {
  const userContext = useContext(UserContext)
  console.log(userContext);
  useEffect(() => {
    localStorage.removeItem("token");

    window.location = '/api/posts';
  }, []);
  return null;
}

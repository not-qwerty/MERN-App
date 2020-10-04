import React, { useState, useEffect } from "react";

import jwtDecode from "jwt-decode";

// Components
import Navbar from "./components/Navbar";
import Provider from './provider';

// Styles
import "react-toastify/dist/ReactToastify.css";

// Context
import UserContext from "./context/UserContext";

export default function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    try {
      const jwt = localStorage.getItem("token");
      const jwtUser = jwtDecode(jwt);

      setUser(jwtUser);
    } catch (err) {
      // ignoring that
    }
  }, []);

  return (
    <UserContext.Provider value={{ user }}>
      <div>
        <Navbar />
        <Provider />
      </div>
    </UserContext.Provider>
  );
}

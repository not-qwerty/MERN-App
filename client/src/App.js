import React, { Suspense, useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import jwtDecode from "jwt-decode";

// Components
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import CreatePost from "./components/CreatePost";
import Chat from "./components/Chat";
import Login from "./components/Login";
import Register from "./components/Register";
import Spinner from "./components/common/Spinner";
import Pomodoro from "./containers/Pomodoro";
import Logout from "./components/Logout";

// Styles
import "react-toastify/dist/ReactToastify.css";

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
    <div>
      <Navbar user={user} />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/api/posts" exact component={Posts} />
          <Route path="/api/create" exact component={CreatePost} user={user} />
          <Route path="/api/login" exact component={Login} />
          <Route path="/api/logout" exact component={Logout} />
          <Route path="/api/register" exact component={Register} />
          <Route path="/api/chat" exact component={Chat} />
          <Route path="/api/pomodoro/" exact component={Pomodoro} />
          <Redirect to="/api/posts" />
        </Switch>
        <ToastContainer />
      </Suspense>
    </div>
  );
}

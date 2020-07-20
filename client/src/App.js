import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// Components
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import CreatePost from "./components/CreatePost";
import Chat from "./components/Chat";
import Login from "./components/Login";
import Register from "./components/Register";

// Containers
import Pomodoro from "./containers/Pomodoro";

// Styles
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route path="/api/posts" exact component={Posts} />
        <Route path="/api/create" exact component={CreatePost} />
        <Route path="/api/login" exact component={Login} />
        <Route path="/api/register" exact component={Register} />
        <Route path="/api/chat" exact component={Chat} />
        <Route path="/api/pomodoro/" exact component={Pomodoro} />
        <Redirect to="/api/posts" />
      </Switch>
      <ToastContainer />
    </div>
  );
}

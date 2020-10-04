import React, { Suspense } from 'react'

import { Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Posts from "./components/Posts";
import CreatePost from "./components/CreatePost";
import Chat from "./components/Chat";
import Login from "./components/Login";
import Register from "./components/Register";
import Spinner from "./components/common/Spinner";
import Pomodoro from "./containers/Pomodoro";
import Logout from "./components/Logout";

export default function provider() {
  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/api/posts" exact component={Posts} />
          <Route path="/api/create" exact component={CreatePost} />
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
  )
}

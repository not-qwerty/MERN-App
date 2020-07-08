import React from 'react';
import { 
  Link,
  Switch, 
  Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Posts from './components/Posts';
import CreatePost from './components/CreatePost';


export default function App() {

  // (async () => {
  //     


  //   for (let post of data) {
  //       const div = document.createElement('div');
  //       div.classList.add('post');
  //       div.innerHTML = `<h2>${post.postHeader}</h2><p>${post.postBody}</p>`;
  //       document.querySelector('#posts').appendChild(div)
  //   }

  // })();

  return (
      <div>
        <Navbar />


        <Switch>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/create">
            <CreatePost />
          </Route>
        </Switch>
      </div>
  );
}

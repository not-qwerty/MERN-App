import React from 'react';


export default function App() {

  // (async () => {
  //   const posts = await fetch('http://localhost:5000/posts');
  //   const data = await posts.json();    


  //   for (let post of data) {
  //       const div = document.createElement('div');
  //       div.classList.add('post');
  //       div.innerHTML = `<h2>${post.postHeader}</h2><p>${post.postBody}</p>`;
  //       document.querySelector('#posts').appendChild(div)
  //   }

  // })();
  return (
    <div classNameName="App">
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">BlogPost</a>
          </div>
          <ul className="nav navbar-nav">
            <li className="active"><a href="index.html">Home</a></li>
            <li><a href="./createpost.html">Create a Post</a></li>
            <li><a href="#">Our Chat</a></li>
            <li><a href="#">Pomodoro Clock</a></li>
          </ul>
        </div>
      </nav>
    <div id='posts'></div>
    </div>
  );
}

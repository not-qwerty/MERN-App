import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  async function getPosts() {
    try {
      axios.get("http://localhost:5000/posts").then((res) => {
        setPosts(res.data);
      });
    } catch (err) {
      console.error(err.message || err);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post._id} className="container-post">
            <div>
              <div>
                <h2>{post.title}</h2>
              </div>
              <div>
                <div className="row">
                  <div className="col-xs-1"></div>
                  <div className="col-xs-10">
                    <div className="post-body">{post.postBody}</div>
                  </div>
                  <div className="col-xs-1"></div>
                </div>
              </div>
              <p>Written by {post.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

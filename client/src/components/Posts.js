import React, { useState, useEffect } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  async function getPosts() {
    const posts = await fetch("http://localhost:5000/posts");
    const data = await posts.json();

    setPosts(data);
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post._id}>
            <div>
              <h2>{post.postHeader}</h2>
            </div>
            <div>
              <p>{post.postBody}</p>
            </div>
            <p>Written by {post.name}</p>
          </div>
        );
      })}
    </div>
  );
}

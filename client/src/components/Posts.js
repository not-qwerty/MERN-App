import React, { useState, useEffect } from "react";
import Pagination from "./common/Pagination";
import { Link } from 'react-router-dom';
import { paginate } from '../utils/paginate';
import httpService from "../utils/httpService";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 5;

  async function getPosts() {
    try {
      httpService.get("posts").then((res) => {
        setPosts(res.data);
      });
    } catch (err) {
      console.error(err.message || err);
    }
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const pagePosts = paginate(posts, currentPage, pageSize);

  return (
    <div>
      {posts.length === 0 ? (
        <div className='container'><p>There are no posts yet.</p>
        <Link to='create'>Create a Post</Link></div>
      ) : (
        pagePosts.map((post) => {
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
        })
      )}

      <Pagination
        itemsCount={posts.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

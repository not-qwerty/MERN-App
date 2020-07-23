import React, { useState, useContext } from "react";
import httpService from "../utils/httpService";
import { toast } from "react-toastify";
import UserContext from "../context/UserContext";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [postBody, setBody] = useState("");

  const userContext = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { name } = userContext.user;
      await httpService.post("posts", { name, title, postBody });

      toast("Post was submitted");

      setTitle("");
      setBody("");
    } catch (err) {
      toast(err.message);
      console.error(err);
    }
  };

  const handleBodyChange = (e) => {
    e.preventDefault();
    setBody(e.target.value);
  };

  const handleTitleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <br />
        <label>
          Post title:
          <input type="text" value={title} onChange={handleTitleChange} />
        </label>
        <br />

        <label>
          Write a post here:
          <input type="text" value={postBody} onChange={handleBodyChange} />
        </label>
        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

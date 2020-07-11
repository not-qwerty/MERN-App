import React, { useState } from "react";

export default function CreatePost() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [postBody, setBody] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const bodyRes = { name, title, postBody };
      const response = await fetch("http://localhost:5000/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyRes),
      });
      console.log(response);
      alert("A post was sumbited");
    } catch (err) {
      console.error(err);
    }
  };

  const handleBodyChange = (e) => {
    e.preventDefault();
    setBody(e.target.value);
  };

  const handleNameChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleTitleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  return (
    <div style={{alignItems: 'center'}}>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name: 
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
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

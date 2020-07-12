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
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <label>
          <div className="row">
            <div className="col-xs-3">Enter your name:</div>
            <div className="col-xs-6">
              <input type="text" value={name} onChange={handleNameChange} />
            </div>
            <div className="col-xs-3"></div>
          </div>
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

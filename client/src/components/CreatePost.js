import React, { useState } from "react";

export default function CreatePost() {
  const [name, setName] = useState("");
  const [postBody, setBody] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const bodyRes = { name, postBody };
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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <label>
          Post text:
          <input type="text" value={postBody} onChange={handleBodyChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

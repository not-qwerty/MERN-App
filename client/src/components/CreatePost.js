import React from "react";

export default function CreatePost() {
  return (
    <div>
      <form>
        <label>
          Post name: <input type="text"></input>
        </label>
        <br></br>
        <label>
          body: <input type="text"></input>
        </label>
        <button className="btn btn-primary" type="submit">
          Post
        </button>
      </form>
    </div>
  );
}

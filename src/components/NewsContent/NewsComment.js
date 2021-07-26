import React from "react";
import "bootstrap/dist/css/bootstrap.css";

function NewsComment() {
  const handleChannge = () => {};

  const handleSubmit = (e) => {};

  return (
    <div>
      <form className="mx-auto">
        <h1 className="mt-3" style={{ fontSize: "14px" }}>
          Write a Comment
        </h1>
        <input
          type="text"
          placeholder="username"
          className="ps-2 p-2 mb-2 w-75 mt-3"
          style={{ borderRadius: "4px", border: "1px solid" }}
          onChange={handleChannge}
        />
        <textarea
          type="text"
          placeholder="comment"
          className="ps-2 p-2 w-75"
          style={{ borderRadius: "4px", border: "1px solid" }}
          onChange={handleChannge}
        ></textarea>
      </form>
    </div>
  );
}

export default NewsComment;

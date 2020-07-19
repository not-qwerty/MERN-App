import React, { useEffect, useRef } from "react";

export default function Login() {

  const emailRef = useRef();

  useEffect(() => {
    emailRef.current.focus();
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    console.log(email);


};

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            ref={emailRef}
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

import React, { useEffect, useRef, useState } from "react";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const emailRef = useRef();
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const updateField = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = form;
    console.log(email, password);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            name="email"
            value={form.email}
            ref={emailRef}
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            onChange={updateField}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            value={form.password}
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            onChange={updateField}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

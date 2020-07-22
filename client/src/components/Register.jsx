import React, { useEffect, useRef, useState } from "react";
import httpService from "../utils/httpService";
import { toast } from "react-toastify";

export default function Login(props) {
  const [form, setForm] = useState({
    name: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { name, email, password } = form;

      const response = await httpService.post("users", {
        name,
        email,
        password,
      });

      localStorage.setItem("token", response.headers["x-auth-token"]);

      props.history.push("/api/posts");
    } catch (err) {
      console.error(err.message);
      if (err.response && err.response.status === 400) {
        toast.error("Invalid credentials");
        toast.error(err.response.data);
      } else {
        toast.error(err.response.data);
      }
    }
  };

  return (
    <div className="container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Username</label>
          <input
            name="name"
            value={form.name}
            type="name"
            className="form-control"
            id="name"
            placeholder="Enter username"
            onChange={updateField}
          />
        </div>

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

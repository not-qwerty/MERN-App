import React, { useEffect, useRef, useState } from "react";
import httpService from "../utils/httpService";
import { toast } from "react-toastify";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { email, password } = form;

      httpService.post("users", { email, password });
    } catch (err) {
      console.error(err.message || err);
      toast(err.message);
    }
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

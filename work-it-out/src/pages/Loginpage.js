import React, { useState } from "react";

export default function LoginPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    console.log("USER", user);
    fetch(" http://localhost:8080/users/login", {
      method: "POST",
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <input
        name="email"
        type="text"
        placeholder="Email"
        onChange={handleChange}
        value={user.email}
      ></input>
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
        value={user.password}
      ></input>
      <button type="button" onClick={handleSubmit}>
        Log in
      </button>
    </div>
  );
}

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
      <button>Log in</button>
    </div>
  );
}

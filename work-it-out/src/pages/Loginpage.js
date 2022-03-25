import React, {useState} from "react";

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
      <input className="in-control"
        name="email"
        type="text"
        placeholder="Email"
        onChange={handleChange}
        value={user.email}
      ></input>
      <input className="in-control"
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
        value={user.password}
      ></input>
      <button className="btn-prime">Log in</button>
    </div>
  );
}

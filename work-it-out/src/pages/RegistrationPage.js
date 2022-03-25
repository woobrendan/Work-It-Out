import React, {useState} from "react";

// Make an axis post req to that URL

// In the rq body, body will contain obj called user {email, pw, birthday and name}

export default function RegistrationPage() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    birthdate: "",
  });

  const handleChange = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    console.log("USER", user);
    fetch("localhost:8080/test", {
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
      <input className="in-control"
        name="name"
        type="text"
        placeholder="Name"
        onChange={handleChange}
        value={user.name}
      ></input>
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
      <input className="in-control"
        name="birthdate"
        type="text"
        placeholder="Birthdate"
        onChange={handleChange}
        value={user.birthdate}
      ></input>
      <button type="button" onClick={handleSubmit} className="btn-prime">
        Sign up!
      </button>
    </div>
  );
}

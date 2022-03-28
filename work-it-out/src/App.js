import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NavBar from "./components/NavBar";
import ExercisePage from "./pages/Exercisepage";
import LoginPage from "./pages/Loginpage";
import ExerciseDetails from "./pages/ExerciseDetails";
import ProfilePage from "./pages/ProfilePage";
import RegistrationPage from "./pages/RegistrationPage";
import WorkoutsNew from "./components/workouts_new";
import { UserContext } from "./helpers/UserContext";
import LandingPage from "./components/LandingPage";
import jwt_decode from "jwt-decode";

function App() {
  const [user, setUser] = useState({
    id: null,
    name: "",
    email: "",
    password: "",
    birthdate: "",
  });
  useEffect(() => {
    let token = localStorage.getItem("accessToken");

    if (!token) {
      return;
    }

    let decoded = jwt_decode(token);

    if (decoded) {
      setUser({ ...user, ...decoded });
    }
  }, []);

  const providerValue = { user, setUser };

  return (
    <Router>
      <UserContext.Provider value={providerValue}>
        <NavBar />

        <div className="App">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/muscleGroups" element={<Homepage />} />
            <Route path="/workout/:id" element={<ExercisePage />} />
            <Route path="/exercises/:id" element={<ExerciseDetails />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/workouts/new" element={<WorkoutsNew />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;

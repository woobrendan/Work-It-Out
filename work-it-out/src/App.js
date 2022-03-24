import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NavBar from "./components/NavBar";
import ExercisePage from "./pages/Exercisepage";
import LoginPage from "./pages/Loginpage";
import ExerciseDetails from "./pages/ExerciseDetails";
import ProfilePage from "./pages/ProfilePage";
import RegistrationPage from "./pages/RegistrationPage";
import WorkoutsNew from "./components/workouts_new";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/workout/:id" element={<ExercisePage />} />
          <Route path="/exercises/:id" element={<ExerciseDetails />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/workouts/new" element={<WorkoutsNew />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

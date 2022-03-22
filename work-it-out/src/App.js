import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NavBar from "./components/NavBar";
import ExercisePage from "./pages/Exercisepage";
import LoginPage from "./pages/Loginpage";
import ProfilePage from "./pages/Profile";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<ProfilePage />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
        <Routes>
          <Route path="/exercises/:id" element={<ExercisePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

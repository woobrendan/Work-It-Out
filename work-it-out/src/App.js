
import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NavBar from "./components/NavBar";
import ExercisePage from "./pages/Exercisepage";
import LoginPage from "./pages/Loginpage";
import ExerciseDetails from './pages/ExerciseDetails';
import ProfilePage from "./pages/ProfilePage";
import RegistrationPage from "./pages/RegistrationPage";


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Routes></Routes>
        <Routes></Routes>

        <Routes>

          
        
        <Routes>
         <Route path="/" element={<Homepage />} />
         <Route path='/workout/:id' element={<ExercisePage />} />
         <Route path='/exercises/:id' element={<ExerciseDetails />} />
        
         <Route path="/profile" element={<ProfilePage />} />
         <Route path="/register" element={<RegistrationPage />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;

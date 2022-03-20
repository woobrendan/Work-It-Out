
import './App.css';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import Homepage from './pages/Homepage';
import NavBar from './components/NavBar';
import ExercisePage from './pages/Exercisepage';


function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>
        <Routes>
          <Route path='/exercises/:id' element={<ExercisePage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;

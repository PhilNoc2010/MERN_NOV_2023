import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Main from './components/Main';
import OneMovie from './components/OneMovie';

function App() {
  return (
    <div className="App">
      <h1>MOVIES 🍿🎥🎞️</h1>

      <Routes>

        {/* DASHBOARD */}
        <Route path='/' element={<Main />} />

        {/* READ ONE */}
        <Route path='/movies/:id' element={<OneMovie />} />


      </Routes>


    </div>
  );
}

export default App;

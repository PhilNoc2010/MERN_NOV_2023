import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Hero from './components/Hero';
import Form from './components/Form';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <div className="App">
      <h1>routing with heroes 🦸‍♂️🦸‍♀️</h1>
      <Link to="/hero">go to hero page</Link> |
      <Link to="/hero/form">FORM</Link>

      <hr />
      <Routes>
        {/* HERO */}
        <Route path='/hero/:heroId' element={<Hero />} />

        {/* FORM */}
        <Route path='/hero/form' element={<Form />} />

        {/* ERROR */}
        <Route path="/error" element={<ErrorPage />} />


      </Routes>
    </div>
  );
}

export default App;

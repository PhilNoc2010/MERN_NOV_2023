import './App.css';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Cool from './components/Cool';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <h1>REACT Routing</h1>
      {/* <a href="/cool">😎😎😎</a> |
      <a href="/cool/hero">hero</a> */}

      <Link to="/">go home</Link> |
      <Link to={"/cool/hero"}>hero page</Link>

      {/* THEATER STAGE */}
      <Routes>

        {/* ACT I - HOME */}
        <Route path="/" element={<Navigate to={"/cool"} />} />

        {/* ACT II - Cool 😎 */}
        <Route path='/cool' element={
          <>
            <Home />
            <Cool />
            <p>hello</p>
          </>
        } />

        {/* ACT III - Hero  */}
        <Route path="/cool/hero/:heroNumber/" element={<Hero />} />

        {/* ERROR catch all routes */}
        <Route path="*" element={<p>404 not found</p>} />

      </Routes>
    </div>
  );
}

export default App;

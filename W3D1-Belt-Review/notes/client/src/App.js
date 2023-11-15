import './App.css';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Create from './components/Create';
import Update from './components/Update';
import ShowOne from './components/ShowOne';

function App() {
  return (
    <div className="App">
      <h1>Notes</h1>
      <Link to="/">HOME</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/notes/create">create</Link>
      <hr />

      <Routes>
        <Route path='/' element={<Navigate to="/notes" />} />

        {/* READ ALL */}
        <Route path='/notes' element={<Dashboard />} />

        {/* CREATE */}
        <Route path="/notes/create" element={<Create />} />

        {/* UPDATE */}
        <Route path="/notes/:id/edit" element={<Update />} />

        {/* READ ONE */}
        <Route path='/notes/:id' element={<ShowOne />} />

      </Routes>

    </div>
  );
}

export default App;

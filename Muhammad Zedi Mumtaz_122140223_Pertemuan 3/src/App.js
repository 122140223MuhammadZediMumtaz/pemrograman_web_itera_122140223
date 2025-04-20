import React from 'react';
import { BookProvider } from './context/BookContext';
import { Link, Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home/Home.jsx';
import Stats from './pages/Stats/Stats.jsx';
import './App.css';

function App() {
  return (
    <BookProvider>
      <div className="min-h-screen bg-gray-100 p-4">
        {/* Navigation bar */}
        <nav className="mb-4 flex justify-between">
          <Link to="/" className="text-blue-600 font-bold">Home</Link>
          <Link to="/stats" className="text-blue-600 font-bold">Stats</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </div>
    </BookProvider>
  );
}

export default App;

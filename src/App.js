import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReviewShowScene from './ReviewShowScene';
import ReviewForm from './ReviewForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ReviewShowScene />} />
        <Route path="/review" element={<ReviewForm />} />
      </Routes>
    </Router>
  );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfilePage from './ProfilePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/profile-page" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;

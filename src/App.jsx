import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BoardPage from './pages/boardpage/BoardPage';

const App = () => {
  return (
    <Routes>
      <Route path="/board/*" element={<BoardPage />} />
    </Routes>
  );
};

export default App;
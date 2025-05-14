
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TicketingPage from './pages/ticketingpage/TicketingPage.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<TicketingPage />} />
    </Routes>
  );
};

export default App;
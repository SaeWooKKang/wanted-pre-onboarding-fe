import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './pages/LogIn';
import Main from './pages/Main';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="main" element={<Main />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
}

export default App;

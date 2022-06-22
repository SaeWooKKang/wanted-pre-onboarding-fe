import React from 'react';
import LoginCheck from '../common/LoginCheck';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <LoginCheck>
      <button onClick={handleLogin}>로그아웃</button>
      <>Main Component!</>
    </LoginCheck>
  );
};

export default Main;

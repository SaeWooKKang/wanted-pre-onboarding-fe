import React from 'react';
import LoginCheck from '../components/common/LoginCheck';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.setItem(
      'user',
      JSON.stringify({ isLogedIn: false, data: null })
    );
    navigate('/login');
  };

  return (
    <LoginCheck>
      <button onClick={handleLogOut}>로그아웃</button>
      <>Main Component!</>
    </LoginCheck>
  );
};

export default Main;

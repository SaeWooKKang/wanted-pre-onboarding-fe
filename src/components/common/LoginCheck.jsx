import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginCheck = (props) => {
  const navigate = useNavigate();

  const getLogInData = () => {
    return JSON.parse(localStorage.getItem('user'));
  };

  useEffect(() => {
    const loginData = getLogInData();

    if (!loginData || !loginData.isLogedIn) {
      navigate('/login');
    }
  }, []);

  return props.children;
};

export default LoginCheck;

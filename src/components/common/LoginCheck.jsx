import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getLogInData } from '../../util/getLogInData';

const LoginCheck = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    const loginData = getLogInData();

    if (!loginData || !loginData.isLogedIn) {
      navigate('/login');
    }
  }, []);

  return props.children;
};

export default LoginCheck;

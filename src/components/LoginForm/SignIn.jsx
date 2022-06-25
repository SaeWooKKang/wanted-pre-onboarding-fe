import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

import Input from './Input';
import LoginBtn from './LoginBtn';
import useInput from '../../hooks/useInput';
import { validationCheck } from '../../util/inputValidation';
import { EMAIL_REG, PW_REG } from '../../constants/regExp';
import { loginUser } from '../../util/loginUser';

import { useNavigate } from 'react-router-dom';

const SignInWrapper = styled.div`
  .form-container {
    display: flex;
    flex-direction: column;

    .input-container {
      display: flex;
      justify-content: center;
    }
  }
  .login-btn {
    margin-bottom: 12px;
  }
`;

const SignIn = () => {
  const navigate = useNavigate();
  const [email, handleIdChange] = useInput('');
  const [pw, handlePwChange] = useInput('');

  const [idValidation, setIdValidation] = useState(true);
  const [pwValidation, setPwValidation] = useState(true);

  const [loginBtnActive, setLoginBtnActive] = useState(false);

  const loginActive = () => {
    console.log('loginActive', email, pw);
    if (!email || !pw) return setLoginBtnActive(false);

    if (idValidation && pwValidation) {
      setLoginBtnActive(true);
    } else {
      setLoginBtnActive(false);
    }
  };

  useEffect(() => {
    setIdValidation(validationCheck(email, EMAIL_REG));
  }, [email]);

  useEffect(() => {
    setPwValidation(validationCheck(pw, PW_REG));
  }, [pw]);

  useEffect(() => {
    loginActive();
  }, [idValidation, pwValidation, email, pw]);

  const handleLoginBtnClick = () => {
    const body = {
      email,
      pw,
    };

    loginUser(body).then((res) => {
      if (res.loginSuccess) {
        localStorage.setItem(
          'user',
          JSON.stringify({ isLogedIn: true, data: res.user })
        );
        navigate('/main');
      } else {
        alert('Fail to login');
      }
    });
  };

  return (
    <SignInWrapper>
      <div className="form-container">
        <div className="input-container">
          <Input
            type={'email'}
            name={'login-email'}
            placeholder={'이메일'}
            text={email}
            onChange={handleIdChange}
            borderColor={idValidation}
          />
        </div>
        <div className="input-container">
          <Input
            type={'password'}
            name={'login-password'}
            placeholder={'비밀번호'}
            text={pw}
            onChange={handlePwChange}
            borderColor={pwValidation}
          />
        </div>
      </div>
      <div className="login-btn">
        <LoginBtn bg={loginBtnActive} onClick={handleLoginBtnClick}>
          로그인
        </LoginBtn>
      </div>
    </SignInWrapper>
  );
};

export default SignIn;

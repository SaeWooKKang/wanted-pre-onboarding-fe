import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

import useInput from '../../hooks/useInput';
import { validationCheck } from '../../util/inputValidation';
import { EMAIL_REG, PW_REG } from '../../constants/regExp';
import { loginUser } from '../../util/loginUser';

import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  const [email, handleIdChange] = useInput('');
  const [pw, handlePwChange] = useInput('');

  const [idValidation, setIdValidation] = useState(true);
  const [pwValidation, setPwValidation] = useState(true);

  const [loginBtnActive, setLoginBtnActive] = useState(false);

  const loginActive = () => {
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
    if (!loginBtnActive) return -1;

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
    <Wrapper>
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
    </Wrapper>
  );
};
const Wrapper = styled.section`
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
const Input = styled.input`
  width: 100%;
  height: auto;
  border: 1px solid #1f202124;
  border-radius: 4px;
  margin-bottom: 12px;
  padding: 13px 12px;
  position: relative;

  color: black;
  border: 1px solid ${(props) => (props.borderColor ? 'none' : 'red')};
`;
const LoginBtn = styled.button`
  width: 100%;
  height: 35px;
  background-color: ${(props) => (props.bg ? '#0095f6' : '#bae0fc')};
  border: none;
  margin: 0;
  border-radius: 4px;
  color: #fff;
  font-weight: 700;
  font-size: 14px;

  &:hover {
    cursor: pointer;
  }
`;

export default SignIn;

import React from 'react';
import styled from 'styled-components';

import Input from './Input';
import LoginBtn from './LoginBtn';
import useInput from '../../../hooks/useInput';

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
  const [id, handleIdChange] = useInput('');
  const [pw, handlePwChange] = useInput('');

  const handleLoginBtnClick = () => {
    console.log('login clicked!');
    // 비동기 요청 로직...
  };

  return (
    <SignInWrapper>
      <div className="form-container">
        <div className="input-container">
          <Input
            type={'id'}
            name={'login-id'}
            placeholder={'이메일'}
            text={id}
            onChange={handleIdChange}
            borderColor={'orange'}
          />
        </div>
        <div className="input-container">
          <Input
            type={'password'}
            name={'login-password'}
            placeholder={'비밀번호'}
            text={pw}
            onChange={handlePwChange}
            borderColor={'orange'}
          />
        </div>
      </div>
      <div className="login-btn">
        <LoginBtn onClick={handleLoginBtnClick}>로그인</LoginBtn>
      </div>
    </SignInWrapper>
  );
};

export default SignIn;

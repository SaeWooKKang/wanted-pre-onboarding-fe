import React from 'react';
import styled from 'styled-components';

import Logo from '../components/LoginForm/Logo';
import SignIn from '../components/LoginForm/SignIn';
import SocialLogin from '../components/LoginForm/SocialSignIn';
import FindPassWord from '../components/LoginForm/FindPassWord';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  background-color: #efefef;

  .body {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const LoginWrapper = styled.div`
  width: 312px;
  height: 350px;
  display: flex;
  flex-direction: column;
  padding: 24px;
  background-color: rgb(255, 255, 255);
  border-radius: 2px;
  border: 1px solid #1f202146;
  margin-bottom: 12px;

  .close__btn {
    position: relative;
    display: flex;
    justify-content: flex-end;
  }
  .login__btn {
    margin: 12px 0 12px 0;
  }
  .logo {
    display: flex;
    justify-content: center;
  }
  .sign-in-title {
    display: flex;
    flex-basis: 100%;
    align-items: center;
    color: #1f202146;
    font-size: 12px;
    margin-bottom: 12px;
  }
  .sign-in-title::before,
  .sign-in-title::after {
    content: '';
    flex-grow: 1;
    background: #1f202146;
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    margin: 0px 8px;
  }
`;
const JoinWrapper = styled.div`
  width: 312px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgb(255, 255, 255);

  border-radius: 2px;
  border: 1px solid #1f202146;
`;

const Login = () => {
  return (
    <Wrapper>
      <div className="body">
        <LoginWrapper>
          {/* Logo */}
          <div className="logo">
            <Logo />
          </div>

          {/* Sign in */}
          <>
            <SignIn />
          </>

          <span className="sign-in-title">또는</span>

          {/* SocialLogin & FindPassWord */}
          <>
            <SocialLogin />
            <FindPassWord />
          </>
        </LoginWrapper>

        <JoinWrapper>
          <span style={{ paddingRight: '4px' }}>계정이 없으신가요? </span>
          <button
            style={{
              background: 'transparent',
              color: '#0077ffbc',
              fontWeight: '700px',
            }}
          >
            가입하기
          </button>
        </JoinWrapper>
      </div>
    </Wrapper>
  );
};

export default Login;

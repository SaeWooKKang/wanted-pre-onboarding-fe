import React from 'react';
import styled from 'styled-components';

import Logo from '../components/Login/Logo';
import SignIn from '../components/Login/SignIn';
import SocialLogin from '../components/Login/SocialSignIn';
import FindPassWord from '../components/Login/FindPassWord';

import { FlexBox } from '../styles/FlexBox.styled';

const Login = () => {
  return (
    <Wrapper>
      <Contents>
        <LoginWrapper>
          {/* Logo */}
          <FlexBox justifyContent="center">
            <Logo />
          </FlexBox>

          {/* Sign in */}
          <>
            <SignIn />
          </>

          <SignInTitle>또는</SignInTitle>

          {/* SocialLogin & FindPassWord */}
          <>
            <SocialLogin />
            <FindPassWord />
          </>
        </LoginWrapper>

        <JoinWrapper>
          <span>계정이 없으신가요? </span>
          <JoinBtn>가입하기</JoinBtn>
        </JoinWrapper>
      </Contents>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  background-color: #efefef;
`;
const Contents = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LoginWrapper = styled.main`
  width: 312px;
  height: 350px;
  display: flex;
  flex-direction: column;
  padding: 24px;
  background-color: rgb(255, 255, 255);
  border-radius: 2px;
  border: 1px solid #1f202146;
  margin-bottom: 12px;
`;
const SignInTitle = styled.span`
  display: flex;
  flex-basis: 100%;
  align-items: center;
  color: #1f202146;
  font-size: 12px;
  margin-bottom: 12px;

  ::before,
  ::after {
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

  span {
    padding-right: 4px;
  }
`;
const JoinBtn = styled.button`
  background: transparent;
  color: #0077ffbc;
  font-weight: 700px;
`;

export default Login;

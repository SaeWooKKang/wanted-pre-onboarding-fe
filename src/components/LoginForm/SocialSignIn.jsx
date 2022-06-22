import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  .sign-in-btns {
    display: flex;
    justify-content: space-around;

    button {
      background: transparent;
      margin-bottom: 12px;
      font-weight: 700;
      color: #0000ffbd;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;

const SocialLogin = () => {
  return (
    <Wrapper>
      <div className="sign-in-btns">
        <button>Facebook으로 로그인</button>
      </div>
    </Wrapper>
  );
};

export default SocialLogin;

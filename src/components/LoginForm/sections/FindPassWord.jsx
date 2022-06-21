import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  font-size: 12px;

  button {
    background: transparent;
    color: #0000ffbd;

    &:hover {
      cursor: pointer;
    }
  }
`;

const FindAndJoin = () => {
  return (
    <Wrapper>
      <button>비밀번호를 잊으셨나요?</button>
    </Wrapper>
  );
};

export default FindAndJoin;

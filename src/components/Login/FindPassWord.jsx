import React from 'react';
import styled from 'styled-components';

import { FlexBox } from '../../styles/FlexBox.styled';

const FindAndJoin = () => {
  return (
    <FlexBox justifyContent="center">
      <Button>비밀번호를 잊으셨나요?</Button>
    </FlexBox>
  );
};

const Button = styled.button`
  font-size: 12px;
  background: transparent;
  color: #0000ffbd;

  &:hover {
    cursor: pointer;
  }
`;

export default FindAndJoin;

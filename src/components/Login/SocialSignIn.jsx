import React from 'react';
import styled from 'styled-components';

import { FlexBox } from '../../styles/FlexBox.styled';

const SocialLogin = () => {
  return (
    <FlexBox justifyContent="center">
      <Button>Facebook으로 로그인</Button>
    </FlexBox>
  );
};

const Button = styled.div`
  background: transparent;
  margin-bottom: 12px;
  font-weight: 700;
  color: #0000ffbd;

  &:hover {
    cursor: pointer;
  }
`;

export default SocialLogin;

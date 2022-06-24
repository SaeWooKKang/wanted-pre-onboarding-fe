import React, { useState } from 'react';
import styled from 'styled-components';

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

export default Input;

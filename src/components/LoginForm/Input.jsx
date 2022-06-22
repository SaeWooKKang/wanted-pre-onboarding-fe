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

  ::placeholder {
    color: #1f202177;
  }
  &:focus {
    border: 1px solid ${(props) => props.borderColor || 'black'};
    outline: none;
  }
`;

export default Input;

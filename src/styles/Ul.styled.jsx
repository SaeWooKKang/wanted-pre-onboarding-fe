import styled from 'styled-components';

export const Ul = styled.ul`
  display: flex;

  li:hover {
    cursor: pointer;
  }

  > * + *::before {
    margin-left: ${(props) => props.betweenMargin || 0};
    content: '';
  }
  li {
    padding: ${(props) => props.liPadding || 0};
  }
`;

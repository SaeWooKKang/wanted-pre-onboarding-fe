import styled from 'styled-components';

export const FlexBox = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || 'row'};
  justify-content: ${(props) => props.justifyContent || 'start'};
  align-items: ${(props) => props.alignItems || 'center'};
`;

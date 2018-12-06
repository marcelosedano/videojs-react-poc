import styled from 'styled-components';

export const Wrapper = styled.div`
  background: lightblue;
  width: ${props => props.isExpanded ? '300px' : '0'};
  transition: width 1s;
`;

import styled from '@emotion/styled';

export const ColorItemStyle = styled.li`
  display: block;
  padding: 5px;
  width: 120px;
  border-radius: 8px;
  background-color: ${props => props.hexColor};
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  &:hover,
  &:focus {
    background-color: ${props => {
      return props.hexColor + 'ab';
    }};
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
      rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
      rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    cursor: pointer;
    transform: scale(1.2);
  }
`;

export const NameColor = styled.p`
  text-transform: uppercase;
`;

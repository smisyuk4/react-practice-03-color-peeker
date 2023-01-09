import styled from '@emotion/styled';

export const ControlsWrp = styled.div`
  margin-bottom: 10px;
`;

export const Button = styled.button`
  padding: 5px;
  width: 100px;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 5px;
  border: 2px solid #00000080;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;

  &:hover,
  &:focus {
    background-color: #f09898;
    cursor: pointer;
  }
`;

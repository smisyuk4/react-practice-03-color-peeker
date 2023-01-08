import styled from '@emotion/styled';

export const Form = styled.form`
  display: inline-block;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 8px;
  background-color: pink;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export const WrapInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 5px;
`;

export const Label = styled.label`
  height: 60px;
`;

export const Input = styled.input`
  padding: 5px;
  margin-bottom: 5px;
  font-size: 18px;
  text-transform: uppercase;
  border-radius: 8px;
  background-color: #e5d5d5;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;

  &:hover,
  &:focus {
    background-color: #f09898;
    cursor: pointer;
  }
`;

export const Error = styled.p`
  text-transform: uppercase;
  color: red;
`;

export const ButtonSend = styled.button`
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

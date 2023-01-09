const { default: styled } = require('@emotion/styled');

export const ColorListStyle = styled.ul`
  display: grid;
  max-width: calc(100vw - 32px);
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  grid-gap: 16px;
`;

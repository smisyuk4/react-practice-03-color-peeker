import { MainTitle } from './Title.styled';

export const Title = ({ title, activeColor }) => {
  return (
    <>
      <MainTitle>{title}</MainTitle>
      <p>{activeColor}</p>
    </>
  );
};

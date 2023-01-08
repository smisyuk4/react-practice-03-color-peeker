import { useState } from 'react';
import { colorsArr } from 'colors';
import { ColorItemForm } from 'components/ColorItemForm';
import { ColorList } from 'components/ColorList';
import { Title } from 'components/Title';
import PropTypes from 'prop-types';
import { Container } from "./App.styled"


export const App = () => {
  const [colors, setColors] = useState([...colorsArr]);
 
  const onSubmitForm = ( newColor ) => {
    console.log(newColor)
    setColors(prevState => [...prevState, newColor]);
  }

  return (
    <Container>
      <Title title="Color peeker" />
      <ColorItemForm onSubmitForm={onSubmitForm} />
      <ColorList colors={colors} />
    </Container>
  );
};

App.propTypes = {
  newColor: PropTypes.object,
};
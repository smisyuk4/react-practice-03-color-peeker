import { useState } from 'react';
import { colorsArr } from 'colors';
import { ColorItemForm } from 'components/ColorItemForm';
import { ColorList } from 'components/ColorList';
import PropTypes from 'prop-types';


export const App = () => {
  const [colors, setColors] = useState([...colorsArr]);
 
  const onSubmitForm = ( newColor ) => {
    console.log(newColor)
    setColors([...colorsArr, newColor]);
  }

  return (
    <>
      <ColorItemForm onSubmitForm={onSubmitForm} />
      <ColorList colors={colors} />
    </>
  );
};

App.propTypes = {
  newColor: PropTypes.object,
};
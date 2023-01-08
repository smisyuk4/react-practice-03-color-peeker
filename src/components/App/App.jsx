import { useState } from 'react';
import { colorsArr } from 'colors';
import { ColorItemForm } from 'components/ColorItemForm';
import { ColorList } from 'components/ColorList';
import { Title } from 'components/Title';
import PropTypes from 'prop-types';
import { Container } from "./App.styled"


export const App = () => {
  const [colors, setColors] = useState([...colorsArr]);
  const [activeColorIdx, setActiveColorIdx] = useState(0)
  // const [activeColor, setActiveColor] = useState('')
 
  const onSubmitForm = ( newColor ) => {
    console.log(newColor)
    setColors(prevState => [...prevState, newColor]);
  }

  // const onClickColor = (data) => {
  //   console.log(data)
    // console.log(data.currentTarget)
    // console.log(data.currentTarget.nodeName)
    // console.log(data.currentTarget.getAttribute('data-color'))
    // const currentColor = data.currentTarget.getAttribute('data-color')
    // setActiveColor(currentColor)

  // }

  const getIdxColorActive = (idx) => {
    console.log(idx)
    setActiveColorIdx(idx)
  }

  return (
    <Container>
      <Title
        title="Color peeker"
        // activeColor={activeColor}
      />
      <ColorItemForm onSubmitForm={onSubmitForm} />
      <ColorList
        colors={colors}
        // onClickColor={onClickColor}
        getIdxColorActive={getIdxColorActive}
      />
    </Container>
  );
};

App.propTypes = {
  newColor: PropTypes.object,
};
import { useState } from 'react';
import { colorsArr } from 'colors';
import { Controls } from 'components/Controls';
import { ColorItemForm } from 'components/ColorItemForm';
import { ColorList } from 'components/ColorList';
import { Title } from 'components/Title';
import PropTypes from 'prop-types';
import { Container } from "./App.styled"


export const App = () => {
  const [colors, setColors] = useState([...colorsArr]);
  const [activeColorIdx, setActiveColorIdx] = useState(null)
  const [isShowForm, setIsShowForm] = useState(false)
 
  const onSubmitForm = ( newColor ) => {
    console.log(newColor)
    setColors(prevState => [...prevState, newColor]);
    setIsShowForm(false)
  }

  const getIdxColorActive = (idx) => {
    console.log(idx)
    if (activeColorIdx !== idx) {
      setActiveColorIdx(idx)
    } else {
      setActiveColorIdx(null)
    }
    
  }

  const toggleShowForm = (event) => {
    setIsShowForm(prevState => !prevState)
  }

  const onClickBtnRemove = (event) => {
    console.log(event.target)
        console.log(event.currentTarget)
  }

  return (
    <Container>
      <Title
        title="Color peeker"
      />

      <Controls
        isShowForm={isShowForm}
        toggleShowForm={toggleShowForm}
      />

      {isShowForm && <ColorItemForm onSubmitForm={onSubmitForm} />}

      <ColorList
        colors={colors}
        onClickBtnRemove={onClickBtnRemove}
        getIdxColorActive={getIdxColorActive}
        activeColorIdx={activeColorIdx}
      />
    </Container>
  );
};

App.propTypes = {
  newColor: PropTypes.object,
};
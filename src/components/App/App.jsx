import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { colorsArr } from 'colors';
import { useLocalStorage } from 'hooks';
import { Controls } from 'components/Controls';
import { ColorItemForm } from 'components/ColorItemForm';
import { ColorList } from 'components/ColorList';
import { Title } from 'components/Title';
import { Container } from './App.styled';

const KEY_COLOR_STORAGE = 'customColor'

export const App = () => {
  const defColors = useRef([...colorsArr]);
  const [customColors, setCustomColors] = useLocalStorage(KEY_COLOR_STORAGE, [])
  const [activeColorId, setActiveColorId] = useState(null);
  const [isShowForm, setIsShowForm] = useState(false);

  useEffect(() => {
    localStorage.setItem(KEY_COLOR_STORAGE, JSON.stringify(customColors))
  },[customColors])

  const onSubmitForm = newColor => {
    setCustomColors(prevState => [...prevState, newColor]);
    setIsShowForm(false);
  };

  const getActiveColorId = id => {
    if (activeColorId !== id) {
      setActiveColorId(id);
    } else {
      setActiveColorId(null);
    }
  };

  const toggleShowForm = () => {
    setIsShowForm(prevState => !prevState);
  };

  const onClickBtnRemove = ({ currentTarget, target }) => {
    if (target.nodeName === 'svg' || target.nodeName === 'path') {
      const currentColor = currentTarget.getAttribute('data-color');
      const newArrCustomColors = customColors.filter(
        color => color.hex !== currentColor
      );
      return setCustomColors(newArrCustomColors);
    }
  };

  return (
    <Container>
      <Title title="Color peeker" />

      <Controls isShowForm={isShowForm} toggleShowForm={toggleShowForm} />

      {isShowForm && <ColorItemForm onSubmitForm={onSubmitForm} />}
     
      <ColorList
        colors={defColors.current}
        typeList="default"
        onClickBtnRemove={onClickBtnRemove}
        activeColorId={activeColorId}
        getActiveColorId={getActiveColorId}
      />

      {customColors.length > 0 && (
        <ColorList
          colors={customColors}
          typeList="custom"
          onClickBtnRemove={onClickBtnRemove}
          activeColorId={activeColorId}
          getActiveColorId={getActiveColorId}
        />
      )}
    </Container>
  );
};

App.propTypes = {
  newColor: PropTypes.object,
};

import PropTypes from 'prop-types';
import { ColorItem } from 'components/ColorItem';
import { ColorListStyle } from './ColorList.styled';

export const ColorList = ({
  colors,
  onClickBtnRemove,
  getIdxColorActive,
  activeColorIdx,
}) => {
  return (
    <ColorListStyle>
      {colors.map((color, idx) => (
        <ColorItem
          key={color.name}
          color={color}
          onClickBtnRemove={onClickBtnRemove}
          idx={idx}
          getIdxColorActive={getIdxColorActive}
          activeColorIdx={activeColorIdx}
        />
      ))}
    </ColorListStyle>
  );
};

ColorList.propTypes = {
  colors: PropTypes.array.isRequired,
  onClickBtnRemove: PropTypes.func.isRequired,
  getIdxColorActive: PropTypes.func.isRequired,
};

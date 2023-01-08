import PropTypes from 'prop-types';
import { ColorItem } from 'components/ColorItem';
import { ColorListStyle } from './ColorList.styled';

export const ColorList = ({
  colors,
  // onClickColor,
  getIdxColorActive,
}) => {
  return (
    <ColorListStyle>
      {colors.map((color, idx) => (
        <ColorItem
          key={color.name}
          color={color}
          idx={idx}
          // onClickColor={onClickColor}
          getIdxColorActive={getIdxColorActive}
        />
      ))}
    </ColorListStyle>
  );
};

ColorList.propTypes = {
  colors: PropTypes.array.isRequired,
  // onClickColor: PropTypes.func.isRequired,
  getIdxColorActive: PropTypes.func.isRequired,
};

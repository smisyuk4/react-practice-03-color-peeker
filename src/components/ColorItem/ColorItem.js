import PropTypes from 'prop-types';
import { ColorItemStyle, NameColor } from './ColorItem.styled';

export const ColorItem = ({
  color: { name, hex, rgb },
  idx,
  // onClickColor,
  getIdxColorActive,
}) => {
  return (
    <ColorItemStyle
      hexColor={hex}
      data-color={hex}
      // onClick={onClickColor}
      onClick={() => {
        // onClickColor();
        getIdxColorActive(idx);
      }}
    >
      <NameColor>
        <b>
          {name} {idx}
        </b>
      </NameColor>
      <p>{hex}</p>
      <p>{rgb}</p>
    </ColorItemStyle>
  );
};

ColorItem.propTypes = {
  color: PropTypes.shape({
    name: PropTypes.string.isRequired,
    hex: PropTypes.string.isRequired,
    rgb: PropTypes.string.isRequired,
  }).isRequired,
  idx: PropTypes.number.isRequired,
  // onClickColor: PropTypes.func.isRequired,
  getIdxColorActive: PropTypes.func.isRequired,
};

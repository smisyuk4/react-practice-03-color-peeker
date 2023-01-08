import PropTypes from 'prop-types';
import { ColorItemStyle, NameColor } from './ColorItem.styled';

export const ColorItem = ({ color: { name, hex, rgb } }) => {
  return (
    <ColorItemStyle hexColor={hex}>
      <NameColor>
        <b>{name}</b>
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
};

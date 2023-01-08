import PropTypes from 'prop-types';
import { ColorItem } from 'components/ColorItem';
import { ColorListStyle } from './ColorList.styled';

export const ColorList = ({ colors }) => {
  return (
    <ColorListStyle>
      {colors.map(color => (
        <ColorItem key={color.name} color={color} />
      ))}
    </ColorListStyle>
  );
};

ColorList.propTypes = {
  colors: PropTypes.array.isRequired,
};

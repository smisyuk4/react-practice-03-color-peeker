import PropTypes from 'prop-types';
import { ColorItem } from 'components/ColorItem';

export const ColorList = ({ colors }) => {
  return (
    <ul>
      {colors.map(color => (
        <ColorItem key={color.name} color={color} />
      ))}
    </ul>
  );
};

ColorList.propTypes = {
  colors: PropTypes.array.isRequired,
};

import PropTypes from 'prop-types';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { ColorItemStyle, NameColor } from './ColorItem.styled';

export const ColorItem = ({
  color: { id, name, hex, rgb },
  typeList,
  onClickBtnRemove,
  activeColorId,
  getActiveColorId,
}) => {
  return (
    <ColorItemStyle
      hexColor={hex}
      data-color={hex}
      onClick={event => {
        onClickBtnRemove(event);
        getActiveColorId(id);
      }}
      activeColorId={activeColorId}
      id={id}
    >
      <NameColor>
        <span>
          <b>{name}</b>
          {typeList === 'custom' ? <RiDeleteBin6Line /> : null}
        </span>
      </NameColor>
      <p>{hex}</p>
      <p>{rgb}</p>
    </ColorItemStyle>
  );
};

ColorItem.propTypes = {
  color: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    hex: PropTypes.string.isRequired,
    rgb: PropTypes.string.isRequired,
  }).isRequired,
  typeList: PropTypes.string.isRequired,
  onClickBtnRemove: PropTypes.func.isRequired,
  getActiveColorId: PropTypes.func.isRequired,
};

import PropTypes from 'prop-types';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { IconContext } from 'react-icons';

import { ColorItemStyle, NameColor } from './ColorItem.styled';

export const ColorItem = ({
  color: { name, hex, rgb },
  onClickBtnRemove,
  idx,
  getIdxColorActive,
  activeColorIdx,
}) => {
  return (
    <ColorItemStyle
      hexColor={hex}
      data-color={hex}
      onClick={() => {
        getIdxColorActive(idx);
      }}
      activeColorIdx={activeColorIdx}
      idx={idx}
    >
      <NameColor>
        <span>
          <b>{name}</b>
          <IconContext.Provider value={{ className: 'icon-remove' }}>
            <RiDeleteBin6Line onClick={onClickBtnRemove} />
          </IconContext.Provider>
        </span>
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
  onClickBtnRemove: PropTypes.func.isRequired,
  idx: PropTypes.number.isRequired,
  getIdxColorActive: PropTypes.func.isRequired,
};

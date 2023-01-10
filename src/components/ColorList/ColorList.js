import PropTypes from 'prop-types';
import { ColorItem } from 'components/ColorItem';
import { ColorListStyle } from './ColorList.styled';

export const ColorList = ({
  colors,
  typeList,
  onClickBtnRemove,
  activeColorId,
  getActiveColorId,
}) => {
  return (
    <ColorListStyle>
      {colors.map(color => (
        <ColorItem
          key={color.id}
          color={color}
          typeList={typeList}
          onClickBtnRemove={onClickBtnRemove}
          activeColorId={activeColorId}
          getActiveColorId={getActiveColorId}
        />
      ))}
    </ColorListStyle>
  );
};

ColorList.propTypes = {
  colors: PropTypes.array.isRequired,
  typeList: PropTypes.string.isRequired,
  onClickBtnRemove: PropTypes.func.isRequired,
  getActiveColorId: PropTypes.func.isRequired,
};

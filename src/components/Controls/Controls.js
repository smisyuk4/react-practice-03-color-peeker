import PropTypes from 'prop-types';
import { TitleSec } from 'components/TitleSecondary';
import { ControlsWrp, Button } from './Controls.styled';

export const Controls = ({ isShowForm, toggleShowForm }) => {
  return (
    <ControlsWrp>
      <TitleSec title="add colors to list" />
      <Button type="button" onClick={toggleShowForm}>
        {isShowForm ? 'Hide form' : 'Show form'}
      </Button>
    </ControlsWrp>
  );
};

Controls.propTypes = {
  isShowForm: PropTypes.bool.isRequired,
  toggleShowForm: PropTypes.func.isRequired,
};

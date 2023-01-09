import PropTypes from 'prop-types';
import { TitleSecStyle } from './TitleSec.styled';

export const TitleSec = ({ title }) => {
  return <TitleSecStyle>{title}</TitleSecStyle>;
};

TitleSec.propTypes = {
  title: PropTypes.string.isRequired,
};

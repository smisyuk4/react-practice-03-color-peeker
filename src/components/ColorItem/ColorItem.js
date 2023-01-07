// import PropTypes from 'prop-types';

export const ColorItem = ({ color: { name, hex, rgba } }) => {
  return (
    <li>
      <p>name: {name}</p>
      <p>hex: {hex}</p>
      <p>rgba: {rgba}</p>
    </li>
  );
};

import React from 'react';
import PropTypes from 'prop-types';

const CheckBox = ({ handleClick }) => (
  <>
    <p>
      <input type="checkbox" onClick={handleClick} />
      Only show products in stock
    </p>
  </>
);

CheckBox.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default CheckBox;

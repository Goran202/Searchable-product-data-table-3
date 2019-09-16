import React from 'react';
import PropTypes from 'prop-types';

const ITemSingleRow = (props) => {
  const { listItem } = props;
  const { stocked, name, price } = listItem;
  return (
    <p style={stocked ? { color: 'blue' } : { color: 'red' }}>{`${name}   ${price}`}</p>
  );
};

ITemSingleRow.propTypes = {
  listItem: PropTypes.shape({
    category: PropTypes.string,
    price: PropTypes.string,
    stocked: PropTypes.bool,
    name: PropTypes.string,
  }).isRequired,
};

export default ITemSingleRow;

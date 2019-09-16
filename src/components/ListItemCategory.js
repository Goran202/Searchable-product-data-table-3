import React from 'react';
import PropTypes from 'prop-types';

const ListItemCategory = ({ listItem }) => <p>{listItem.category}</p>;

ListItemCategory.propTypes = {
  listItem: PropTypes.shape({
    category: PropTypes.string,
    price: PropTypes.string,
    stocked: PropTypes.bool,
    name: PropTypes.string,
  }).isRequired,
};
export default ListItemCategory;

import React from 'react';
import PropTypes from 'prop-types';
import ListItemCategory from './ListItemCategory';
import ItemSingleRow from './ItemSingleRow';

const ListITem = ({ listItem, renderCategory }) => (
  <>
    {renderCategory === true ? <ListItemCategory listItem={listItem} /> : ''}
    <ul>
      <ItemSingleRow style={{ color: 'red' }} listItem={listItem} />
    </ul>
  </>
);

ListITem.propTypes = {
  listItem: PropTypes.shape({
    category: PropTypes.string,
    price: PropTypes.string,
    stocked: PropTypes.bool,
    name: PropTypes.string,
  }).isRequired,
  renderCategory: PropTypes.bool.isRequired,
};

export default ListITem;

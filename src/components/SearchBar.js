import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ value, onChange }) => (
  <>
    <div>
      <form>
        <input type="text" value={value} onChange={onChange} />
      </form>
    </div>
  </>
);

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;

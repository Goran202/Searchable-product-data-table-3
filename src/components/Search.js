import React, { Component } from 'react';
import SearchBar from './SearchBar';
import List from './List';
import data from './data';
import CheckBox from './checkBox';

class Search extends Component {
  state = {
    filterValue: '',
    inStockCondition: false,
  };

  handleFilter = (e) => {
    this.setState({ filterValue: e.target.value });
  };

  handleClick = (e) => {
    this.setState({ inStockCondition: e.target.checked });
  };

  render() {
    const { filterValue } = this.state;
    const { inStockCondition } = this.state;
    return (
      <>
        <SearchBar onChange={this.handleFilter} />
        <CheckBox handleClick={this.handleClick} />
        <List data={data} filterValue={filterValue} inStockCondition={inStockCondition} />
      </>
    );
  }
}

export default Search;

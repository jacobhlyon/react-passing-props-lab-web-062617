import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = (props) => {

    return (
      <div className="fruit-basket">
        <Filter handleChange={this.props.handleFilterChange} />
        <FilteredFruitList
          filter={this.props.currentFilter}
          fruit={this.props.fruit}/>
      </div>
    );

    

}

export default FruitBasket;

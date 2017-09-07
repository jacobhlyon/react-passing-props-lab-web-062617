import React from 'react';

const FilteredFruitList = (props) => {


    const list = !this.props.currentFilter ? this.props.fruit : this.props.fruit.filter(i => i.fruit_type === this.props.filter);

    return (
      <ul className="fruit-list">
        {list.map((item, index) => <li key={index}>{item.char}</li>)}
      </ul>
    );


    FilteredFruitList.defaultProps = {
      currentFilter: null,
      fruit: [],
      filters: []
    }
}

export default FilteredFruitList;

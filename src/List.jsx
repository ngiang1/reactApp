import React, { Component } from 'react';

class List extends Component {
  renderList() {
    const items = this.props.items.map(item => {
      return (
        <li key={item.name} className="grid">
          <img src={item.image} alt={item.name} className="image" />
          <span>{item.name}</span>
        </li>
      );
    });

    return items;
  }

  render() {
    return (
      <ul className="grid-container">
        {this.renderList()}
      </ul>
    );
  }
}

export default List;

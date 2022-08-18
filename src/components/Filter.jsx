import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Filter extends Component {
  render() {
    const {
      filterName,
      onInputChange,
    } = this.props;
    return (
      <div>
        <input
          type="text"
          data-testid="name-filter"
          value={ filterName }
          onChange={ onInputChange }
          name="filterName"
        />
        <select
          data-testid="rare-filter"
          name="filterRarity"
          onChange={ onInputChange }
        >
          <option value="todas">Todas</option>
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>
      </div>
    );
  }
}

Filter.propTypes = {
  filterName: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

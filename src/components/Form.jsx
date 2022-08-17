import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="name-input">
            <input
              type="text"
              id="name-input"
              data-testid="name-input"
              name="cardName"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="description-input">
            <input
              type="textarea"
              id="description-input"
              data-testid="description-input"
              name="cardDescription"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr1-input">
            <input
              type="number"
              id="attr1-input"
              data-testid="attr1-input"
              name="cardAttr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr2-input">
            <input
              type="number"
              id="attr2-input"
              data-testid="attr2-input"
              name="cardAttr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr3-input">
            <input
              type="number"
              id="attr3-input"
              data-testid="attr3-input"
              name="cardAttr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="image-input">
            <input
              type="text"
              id="image-input"
              data-testid="image-input"
              name="cardImage"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="rare-input">
            <select
              type="select"
              id="rare-input"
              data-testid="rare-input"
              name="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal" id="normal">Normal</option>
              <option value="raro" id="raro">Raro</option>
              <option value="muito raro" id="muito-raro">Muito Raro</option>
            </select>
          </label>
          <label htmlFor="trunfo-input">
            <input
              type="checkbox"
              id="trunfo-input"
              data-testid="trunfo-input"
              name="cardTrunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>
          <button
            type="button"
            id="btnSave"
            name="btnSave"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar

          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
export default Form;

/* eslint-disable max-len */
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="text">
            <input type="text" id="text" data-testid="name-input" name="cardName" value={ cardName } onChange={ onInputChange } />
          </label>
          <label htmlFor="textarea">
            <input type="textarea" id="textarea" data-testid="description-input" name="cardDescription" value={ cardDescription } onChange={ onInputChange } />
          </label>
          <label htmlFor="number">
            <input type="number" id="attr1" data-testid="attr1-input" name="cardAttr1" value={ cardAttr1 } onChange={ onInputChange } />
          </label>
          <label htmlFor="number">
            <input type="number" id="attr2" data-testid="attr2-input" name="cardAttr2" value={ cardAttr2 } onChange={ onInputChange } />
          </label>
          <label htmlFor="number">
            <input type="number" id="attr3" data-testid="attr3-input" name="cardAttr3" value={ cardAttr3 } onChange={ onInputChange } />
          </label>
          <label htmlFor="text">
            <input type="text" id="text2" data-testid="image-input" name="cardImage" value={ cardImage } onChange={ onInputChange } />
          </label>
          <label htmlFor="select">
            <select type="select" id="select" data-testid="rare-input" name="cardRare" value={ cardRare } onChange={ onInputChange }>
              <option value="normal" id="normal">Normal</option>
              <option value="raro" id="raro">Raro</option>
              <option value="muito raro" id="muito-raro">Muito Raro</option>
            </select>
          </label>
          <label htmlFor="checkbox">
            <input type="checkbox" id="checkbox" data-testid="trunfo-input" checked="cardTrunfo" value={ cardTrunfo } onChange={ onInputChange } />
          </label>
          <button type="submit" id="submit-btn" data-testid="save-button" disabled={ isSaveButtonDisabled } value={ cardRare } onClick={ onSaveButtonClick }>Salvar</button>
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
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
export default Form;

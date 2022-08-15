import React, { Component } from 'react';

export default class extends Component {
  render() {
    return (
      <section>
        <label htmlFor="text">
          <input type="text" id="text" data-testid="name-input" />
        </label>
        <label htmlFor="textarea">
          <input type="textarea" id="textarea" data-testid="description-input" />
        </label>
        <label htmlFor="number">
          <input type="number" id="attr1" data-testid="attr1-input" />
        </label>
        <label htmlFor="number2">
          <input type="number2" id="attr2" data-testid="attr2-input" />
        </label>
        <label htmlFor="number3">
          <input type="number3" id="attr3" data-testid="attr3-input" />
        </label>
        <label htmlFor="text">
          <input type="text" id="text2" data-testid="image-input" />
        </label>
        <label htmlFor="select">
          <select type="select" id="select" data-testid="rare-input">
            <option value="normal" id="normal">Normal</option>
            <option value="raro" id="raro">Raro</option>
            <option value="muito raro" id="muito-raro">Muito Raro</option>
          </select>
        </label>
        <label htmlFor="checkbox">
          <input type="checkbox" id="checkbox" data-testid="trunfo-input" />
        </label>
        <button type="submit" id="submit-btn" data-testid="save-button">Salvar</button>
      </section>
    );
  }
}

import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Filter from './components/Filter';

class App extends React.Component {
    state ={ cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardRare: '',
      cardTrunfo: '',
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cardSave: [],
      filterName: '',
      filterRarity: 'todas',
    };

    deletCard = ({ target }) => {
      const { cardSave } = this.state;
      const newCardSave = cardSave.filter((card) => card.cardName !== target.name);
      this.setState({ cardSave: newCardSave }, this.hasTrunfo);
    }

      onInputChange = ({ target }) => {
        const { name } = target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
          [name]: value }, () => {
          this.previewForm();
        });
      };

  previewForm = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;

    const textValidate = cardName.length > 0
    && cardImage.length > 0
    && cardDescription.length > 0;

    const n1 = Number(cardAttr1);
    const n2 = Number(cardAttr2);
    const n3 = Number(cardAttr3);
    const maxAtbPower = 90;
    const maxAllAtbPower = 210;
    const atbValidate = n1 >= 0 && n1 <= maxAtbPower
    && n2 >= 0 && n2 <= maxAtbPower
    && n3 >= 0 && n3 <= maxAtbPower
    && (n1 + n1 + n3) <= maxAllAtbPower;
    const isValidate = textValidate && atbValidate;
    this.setState({
      isSaveButtonDisabled: !isValidate,
    });
  }

  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      cardSave,
    } = this.state;

    const card = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    cardSave.push(card);
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: cardTrunfo,
      isSaveButtonDisabled: true,
    });
  };

  hasTrunfo = () => {
    const { cardSave } = this.state;
    const hasTrunfo = cardSave.some((card) => card.cardTrunfo);
    this.setState({ hasTrunfo });
  };

  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      cardSave,
      filterName,
      filterRarity,
    } = this.state;

    return (
      <div>
        <h1>Project Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          onInputChange={ this.onInputChange }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <Filter
          filterName={ filterName }
          onInputChange={ this.onInputChange }
        />
        {cardSave
          .filter((card) => (filterRarity === 'todas' ? card.cardRare
            : card.cardRare === filterRarity))
          .filter((card) => card.cardName.includes(filterName))
          .map((card) => (
            <div key={ card.cardName }>
              <Card
                cardName={ card.cardName }
                cardDescription={ card.cardDescription }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardImage={ card.cardImage }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
              />
              <button
                name={ card.cardName }
                type="button"
                data-testid="delete-button"
                onClick={ this.deletCard }
              >
                Excluir
              </button>
            </div>
          ))}
      </div>

    );
  }
}
export default App;

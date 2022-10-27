import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import CardList from './components/CardList';

const MAX_ATT = 90;
const MAX_ATT_SUM = 210;
const trunfoInput = 'trunfo-input';

const DEFAULT_FORM = {
  'name-input': '',
  'description-input': '',
  'attr1-input': '0',
  'attr2-input': '0',
  'attr3-input': '0',
  'image-input': '',
  'rare-input': 'normal',
  'trunfo-input': false,
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      form: { ...DEFAULT_FORM },
      cards: [],
      hasTrunfo: false,
    };
  }

  onInputChange = (event) => {
    const id = event.target.getAttribute('id');

    let value = '';
    if (id === 'trunfo-input') {
      value = event.target.checked;
    } else {
      value = event.target.value;
    }

    this.setState((prevState) => ({
      ...prevState,
      form: {
        ...prevState.form,
        [id]: value,
      },
    }));
  };

  isSaveButtonDisabled = () => {
    const { form } = this.state;
    const {
      'name-input': cardName,
      'description-input': cardDescription,
      'attr1-input': cardAttr1,
      'attr2-input': cardAttr2,
      'attr3-input': cardAttr3,
      'image-input': cardImage,
    } = form;

    switch (true) {
    case cardName.length === 0:
    case cardDescription.length === 0:
    case cardImage.length === 0:
      return true;
    default:
    }

    const cardAttr = [
      parseInt(cardAttr1, 10),
      parseInt(cardAttr2, 10),
      parseInt(cardAttr3, 10),
    ];

    let sum = 0;
    for (let i = 0; i < cardAttr.length; i += 1) {
      if (Number.isNaN(cardAttr[i]) || cardAttr[i] > MAX_ATT || cardAttr[i] < 0) {
        return true;
      }
      sum += cardAttr[i];
    }

    return (sum > MAX_ATT_SUM);
  };

  onSaveButtonClick = () => {
    const { form } = this.state;
    let { hasTrunfo } = this.state;

    if (form[trunfoInput]) {
      hasTrunfo = true;
    }

    this.setState((prevState) => ({
      ...prevState,
      form: { ...DEFAULT_FORM },
      cards: [...prevState.cards, form],
      hasTrunfo,
    }));
  };

  onDeleteButtonClick = (event) => {
    const pos = event.target.getAttribute('pos');
    const { cards } = this.state;
    let { hasTrunfo } = this.state;

    if (cards[pos][trunfoInput]) {
      hasTrunfo = false;
    }

    cards.splice(pos, 1);

    this.setState((prevState) => ({
      ...prevState,
      cards,
      hasTrunfo,
    }));
  };

  render() {
    const { form, cards, hasTrunfo } = this.state;
    const {
      'name-input': cardName,
      'description-input': cardDescription,
      'attr1-input': cardAttr1,
      'attr2-input': cardAttr2,
      'attr3-input': cardAttr3,
      'image-input': cardImage,
      'rare-input': cardRare,
      'trunfo-input': cardTrunfo,
    } = form;

    return (
      <div>
        <h1>Tryunfo</h1>
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
          isSaveButtonDisabled={ this.isSaveButtonDisabled() }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
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
        <CardList
          cards={ cards }
          onDeleteButtonClick={ this.onDeleteButtonClick }
        />
      </div>
    );
  }
}

export default App;

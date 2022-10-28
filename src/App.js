import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import CardList from './components/CardList';

const MAX_ATT = 90;
const MAX_ATT_SUM = 210;
const INDEXOF_ERROR = -1;
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
      filteredCards: [],
      filter: {
        'name-filter': '',
        'rare-filter': 'todas',
        'trunfo-filter': false,
      },
      hasTrunfo: false,
    };
  }

  updateFilteredCards = () => {
    const { cards, filter } = this.state;
    const {
      'name-filter': nameFilter,
      'rare-filter': rareFilter,
      'trunfo-filter': trunfoFilter,
    } = filter;

    let filteredCards;
    if (trunfoFilter) {
      filteredCards = [cards.find((card) => (card[trunfoInput]))];
    } else {
      filteredCards = cards.filter((card) => (
        card['name-input'].includes(nameFilter)
      ));

      if (rareFilter !== 'todas') {
        filteredCards = filteredCards.filter((card) => (
          card['rare-input'] === rareFilter
        ));
      }
    }
    if (filteredCards.includes(undefined)) {
      filteredCards = [];
    }

    this.setState((prevState) => ({
      ...prevState,
      filteredCards,
    }));
  };

  onFilterInputChange = (event) => {
    const id = event.target.getAttribute('id');

    let value = '';
    if (id === 'trunfo-filter') {
      value = event.target.checked;
    } else {
      value = event.target.value;
    }

    this.setState((prevState) => ({
      ...prevState,
      filter: {
        ...prevState.filter,
        [id]: value,
      },
    }), () => { this.updateFilteredCards(); });
  };

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
    }), () => { this.updateFilteredCards(); });
  };

  onDeleteButtonClick = (event) => {
    const pos = Number.parseInt(event.target.getAttribute('pos'), 10);
    const { cards, filteredCards } = this.state;
    let { hasTrunfo } = this.state;

    if (cards[pos][trunfoInput]) {
      hasTrunfo = false;
    }

    const fltPos = filteredCards.indexOf(cards[pos]);
    if (fltPos !== INDEXOF_ERROR) {
      filteredCards.splice(fltPos, 1);
    }
    cards.splice(pos, 1);

    this.setState((prevState) => ({
      ...prevState,
      cards,
      filteredCards,
      hasTrunfo,
    }));
  };

  render() {
    const { form, filteredCards, filter, hasTrunfo } = this.state;
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
          filteredCards={ filteredCards }
          filter={ filter }
          onFilterInputChange={ this.onFilterInputChange }
          onDeleteButtonClick={ this.onDeleteButtonClick }
        />
      </div>
    );
  }
}

export default App;

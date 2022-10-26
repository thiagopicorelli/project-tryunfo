import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      'name-input': '',
      'description-input': '',
      'attr1-input': '',
      'attr2-input': '',
      'attr3-input': '',
      'image-input': '',
      'rare-input': 'normal',
      'trunfo-input': false,
    };
  }

  onInputChange = (event) => {
    const id = event.target.getAttribute('id');

    if (id === 'trunfo-input') {
      this.setState({
        [id]: event.target.checked,
      });
      return;
    }

    this.setState({
      [id]: event.target.value,
    });
  };

  render() {
    const {
      'name-input': cardName,
      'description-input': cardDescription,
      'attr1-input': cardAttr1,
      'attr2-input': cardAttr2,
      'attr3-input': cardAttr3,
      'image-input': cardImage,
      'rare-input': cardRare,
      'trunfo-input': cardTrunfo,
    } = this.state;

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
      </div>
    );
  }
}

export default App;

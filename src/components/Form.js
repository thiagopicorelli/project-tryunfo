import { Component } from 'react';
import PropTypes from 'prop-types';
import FormInput from './FormInput';

class Form extends Component {
  superTrunfoOption = (cardTrunfo, hasTrunfo, onInputChange) => {
    if (hasTrunfo) {
      return (
        <p>Você já tem um Super Trunfo em seu baralho</p>
      );
    }
    return (
      <FormInput
        testid="trunfo-input"
        label="É Super Trunfo?"
        type="checkbox"
        checked={ cardTrunfo }
        onChange={ onInputChange }
      />
    );
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImageInput,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onImageInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form className="form_cards">
        <FormInput
          testid="name-input"
          label="Nome:"
          type="text"
          value={ cardName }
          onChange={ onInputChange }
        />
        <FormInput
          testid="description-input"
          label="Descrição:"
          type="textarea"
          value={ cardDescription }
          onChange={ onInputChange }
        />
        <FormInput
          testid="attr1-input"
          label="Primeiro Atributo:"
          type="number"
          value={ cardAttr1 }
          onChange={ onInputChange }
        />
        <FormInput
          testid="attr2-input"
          label="Segundo Atributo:"
          type="number"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />
        <FormInput
          testid="attr3-input"
          label="Terceiro Atributo:"
          type="number"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />
        <FormInput
          testid="image-input"
          label="Url da imagem:"
          type="text"
          value={ cardImageInput }
          onChange={ onImageInputChange }
        />

        <label htmlFor="rare-input" className="form_cards_input">
          Selecione a raridade:
          <select
            id="rare-input"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>

        { this.superTrunfoOption(cardTrunfo, hasTrunfo, onInputChange) }

        <button
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>

      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImageInput: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onImageInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;

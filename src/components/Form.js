import { Component } from 'react';
import FormInput from './FormInput';

class Form extends Component {
  salvar = () => {
    console.log('TEST');
  };

  render() {
    return (
      <form onSubmit={ this.salvar }>
        <FormInput testid="name-input" label="Nome:" type="text" />
        <FormInput testid="description-input" label="Descrição:" type="textarea" />
        <FormInput testid="attr1-input" label="Primeiro Atributo:" type="number" />
        <FormInput testid="attr2-input" label="Segundo Atributo:" type="number" />
        <FormInput testid="attr3-input" label="Terceiro Atributo:" type="number" />
        <FormInput testid="image-input" label="Url da imagem:" type="text" />

        <label htmlFor="rare-input">
          Selecione a raridade:
          <select id="rare-input" data-testid="rare-input">
            <option value="normal">Normal</option>
            <option value="raro">Normal</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>

        <FormInput testid="trunfo-input" label="É Super Trunfo?" type="checkbox" />

        <button type="submit" data-testid="save-button">Salvar</button>

      </form>
    );
  }
}

export default Form;

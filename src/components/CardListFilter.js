import { Component } from 'react';
import PropTypes from 'prop-types';
import FormInput from './FormInput';

class CardListFilter extends Component {
  render() {
    const { onInputChange, filter } = this.props;
    return (
      <section>
        <FormInput
          testid="name-filter"
          label="Nome:"
          type="text"
          value={ filter['name-filter'] }
          onChange={ onInputChange }
        />

        <label htmlFor="rare-filter">
          Raridade:
          <select
            id="rare-filter"
            data-testid="rare-filter"
            value={ filter['rare-filter'] }
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
            <option value="todas">Todas</option>
          </select>
        </label>

      </section>
    );
  }
}

CardListFilter.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  filter: PropTypes.shape({
    'name-filter': PropTypes.string,
    'rare-filter': PropTypes.string,
  }).isRequired,
};

export default CardListFilter;

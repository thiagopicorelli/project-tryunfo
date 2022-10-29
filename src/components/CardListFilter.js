import { Component } from 'react';
import PropTypes from 'prop-types';
import FormInput from './FormInput';

class CardListFilter extends Component {
  render() {
    const { onInputChange, filter } = this.props;
    const {
      'name-filter': nameFilter,
      'rare-filter': rareFilter,
      'trunfo-filter': trunfoFilter,
    } = filter;
    return (
      <section className="card-filter">
        <FormInput
          testid="name-filter"
          label="Nome:"
          type="text"
          value={ nameFilter }
          onChange={ onInputChange }
          disabled={ trunfoFilter }
        />

        <label htmlFor="rare-filter">
          Raridade:
          <select
            id="rare-filter"
            data-testid="rare-filter"
            value={ rareFilter }
            onChange={ onInputChange }
            disabled={ trunfoFilter }
          >
            <option value="todas">Todas</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>

        <FormInput
          testid="trunfo-filter"
          label="Super Trunfo"
          type="checkbox"
          checked={ trunfoFilter }
          onChange={ onInputChange }
        />

      </section>
    );
  }
}

CardListFilter.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  filter: PropTypes.shape({
    'name-filter': PropTypes.string.isRequired,
    'rare-filter': PropTypes.string.isRequired,
    'trunfo-filter': PropTypes.bool.isRequired,
  }).isRequired,
};

export default CardListFilter;

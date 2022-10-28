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
      </section>
    );
  }
}

CardListFilter.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  filter: PropTypes.shape({
    'name-filter': PropTypes.string,
  }).isRequired,
};

export default CardListFilter;

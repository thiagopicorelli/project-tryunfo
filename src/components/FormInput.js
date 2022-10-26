import { Component } from 'react';
import PropTypes from 'prop-types';

class FormInput extends Component {
  render() {
    const { testid, type, label, value, checked, onChange } = this.props;
    return (
      <label htmlFor={ testid } className="form_cards_input">
        { label }
        <input
          id={ testid }
          type={ type }
          data-testid={ testid }
          value={ value }
          checked={ checked }
          onChange={ onChange }
        />
      </label>
    );
  }
}

FormInput.propTypes = {
  testid: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

FormInput.defaultProps = {
  value: '',
  checked: false,
};

export default FormInput;

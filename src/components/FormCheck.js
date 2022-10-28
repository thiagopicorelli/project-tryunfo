import { Component } from 'react';
import PropTypes from 'prop-types';

class FormInput extends Component {
  render() {
    const {
      testid,
      type,
      label,
      value,
      checked,
      onChange,
      disabled,
    } = this.props;
    return (
      <label htmlFor={ testid } className="form_cards_input">
        <span>
          { label }
        </span>
        <input
          id={ testid }
          type={ type }
          data-testid={ testid }
          value={ value }
          checked={ checked }
          onChange={ onChange }
          disabled={ disabled }
        />
      </label>
    );
  }
}

FormInput.propTypes = {
  testid: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormInput;

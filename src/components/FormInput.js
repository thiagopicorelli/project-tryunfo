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
      isCheck,
      onChange,
      disabled,
    } = this.props;

    if (isCheck) {
      return (
        <label htmlFor={ testid } className="form_cards_input_check">
          <input
            id={ testid }
            type={ type }
            data-testid={ testid }
            checked={ checked }
            onChange={ onChange }
            disabled={ disabled }
          />
          <span>
            { label }
          </span>
        </label>
      );
    }

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
  value: PropTypes.string,
  checked: PropTypes.bool,
  isCheck: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

FormInput.defaultProps = {
  value: '',
  checked: false,
  isCheck: false,
  disabled: false,
};

export default FormInput;

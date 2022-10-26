import { Component } from 'react';
import PropTypes from 'prop-types';

class FormInput extends Component {
  render() {
    const { testid, type, label } = this.props;
    return (
      <label htmlFor={ testid }>
        { label }
        <input id={ testid } type={ type } data-testid={ testid } />
      </label>
    );
  }
}

FormInput.propTypes = {
  testid: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default FormInput;

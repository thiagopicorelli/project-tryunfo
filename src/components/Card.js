import { Component } from 'react';
import PropTypes from 'prop-types';

const three = 3;

class Card extends Component {
  superTrunfoSection = (cardTrunfo) => {
    if (cardTrunfo) {
      return (
        <p data-testid="trunfo-card">Super Trunfo</p>
      );
    }
    return undefined;
  };

  attrSection = (pos, value) => (
    <section className="attr-card">
      <span>{ `Attr${pos}: ` }</span>
      <span data-testid={ `attr${pos}-card` }>{ value }</span>
    </section>
  );

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardImage,
      cardTrunfo,
    } = this.props;

    return (
      <section className="card">
        <span className="rare-card" data-testid="rare-card">{ cardRare }</span>
        <span className="name-card" data-testid="name-card">{ cardName }</span>
        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
        />
        <span className="description-card" data-testid="description-card">
          { cardDescription }
        </span>
        <section className="attr-section-card">
          { this.attrSection(1, cardAttr1) }
          { this.attrSection(2, cardAttr2) }
          { this.attrSection(three, cardAttr3) }
        </section>
        { this.superTrunfoSection(cardTrunfo) }
      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;

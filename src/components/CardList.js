import { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardList extends Component {
  render() {
    const { cards, onDeleteButtonClick } = this.props;

    return (
      <section className="card_list">
        { cards.map((card, index) => (
          <section key={ index }>
            <Card
              cardName={ card['name-input'] }
              cardDescription={ card['description-input'] }
              cardAttr1={ card['attr1-input'] }
              cardAttr2={ card['attr2-input'] }
              cardAttr3={ card['attr3-input'] }
              cardImage={ card['image-input'] }
              cardRare={ card['rare-input'] }
              cardTrunfo={ card['trunfo-input'] }
            />
            <button
              type="button"
              onClick={ onDeleteButtonClick }
              data-testid="delete-button"
              pos={ index }
            >
              Excluir
            </button>
          </section>
        )) }
      </section>
    );
  }
}

CardList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    'name-input': PropTypes.string.isRequired,
    'description-input': PropTypes.string.isRequired,
    'attr1-input': PropTypes.string.isRequired,
    'attr2-input': PropTypes.string.isRequired,
    'attr3-input': PropTypes.string.isRequired,
    'image-input': PropTypes.string.isRequired,
    'rare-input': PropTypes.string.isRequired,
    'trunfo-input': PropTypes.bool.isRequired,
  })).isRequired,
  onDeleteButtonClick: PropTypes.func.isRequired,
};
export default CardList;

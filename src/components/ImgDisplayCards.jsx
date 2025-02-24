import './ImgDisplayCards.css';
import PropTypes from 'prop-types';

function ImgDisplayCards( { cardWidth, cardHeight, cards } ) {
    return (
        <div className="img-display-cards">
            {cards.map((card, index) => (
                <>
                    <div key={index} className="img-display-card" style={
                        { backgroundImage: `url(${card.img})`,
                          width: `${cardWidth}`,
                          height: `${cardHeight}` }
                        }>
                        <div className="img-display-card-content">
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                        </div>
                    </div>
                </>
            ))}
        </div>
    );
}

ImgDisplayCards.propTypes = {
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            img: PropTypes.string
        })
    ).isRequired
};

export default ImgDisplayCards;

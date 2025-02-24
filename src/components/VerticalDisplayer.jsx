import PropTypes from 'prop-types';
import './VerticalDisplayer.css';

function VerticalDisplayer( { id, containsImg, title, subtitle, cards } ) {
    return (
        <div id={id} className="vertical-displayer">
            <h2>{title}</h2>
            <p className="v-subtitle">{subtitle}</p>
            <div className="v-cards-container">
                {cards.map((card, index) => (
                    <>
                        <div key={index} className="v-card">
                            {containsImg && <div className="v-card-image">
                                <img src={card.img} alt='img'/>
                            </div>}
                            <div className='v-card-content'>
                                <h3>{card.title}</h3>
                                <h6>{card.subtitle}</h6>
                                <p>{card.description}</p>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
}

VerticalDisplayer.propTypes = {
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            subtitle: PropTypes.string,
            description: PropTypes.string.isRequired,
            img: PropTypes.string
        })
    ).isRequired
};

export default VerticalDisplayer;

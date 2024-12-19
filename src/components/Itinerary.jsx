import './Itinerary.css';
function Itinerary() {
    return(
        <div className='outer-container'>
            <div className='itinerary'>
                <h2>Itinerary</h2>
                <h3>Meeting Point</h3>
                <p className="dot-before"> Xujiahui Origin : some where near St.Ignatius Cathedral(to be updated)</p>
                <p className="dot-before">Start at: 12:50 St.Ignatius Cathedral</p>
                <p className="dot-before">End at: 6:30 Jingan Temple</p>
                <h3>Schedule</h3>
                <p className="dot-before">St.Ignatius Cathedral</p>
                <p className="dot-before">Xujiahui scenic area</p>
                <p className="dot-before">boba tea break</p>
                <p className="dot-before">former french concession</p>
                <p className="dot-before">coffee break</p>
                <p className="dot-before">Jingan Temple</p>
                <p className="dot-before">Dinner</p>
                <p>* Notice: Due to the physically demanding nature of the city walk, we strongly recommend that participants be at least 10 and 70 years of age. Additionally, bringing infants is not advised.</p>
            </div>
        </div>
    );
}
export default Itinerary;
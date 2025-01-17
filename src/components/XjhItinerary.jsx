import './Itinerary.css';
function XjhItinerary() {
    return(
        <div className='outer-container'>
            <div className='itinerary'>
                <h2>Itinerary</h2>
                <h3>Meeting Point</h3>
                <p className="dot-before"><b>Meet at</b>: 12:30pm some where near St.Ignatius Cathedral(to be updated)</p>
                <p className="dot-before"><b>Start at</b>: 12:50pm St.Ignatius Cathedral</p>
                <p className="dot-before"><b>End at</b>: 6:30pm Jingan Temple</p>
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
export default XjhItinerary;
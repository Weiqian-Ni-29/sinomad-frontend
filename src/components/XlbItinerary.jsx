import './Itinerary.css';
function XlbItinerary() {
    return(
        <div className='outer-container'>
            <div className='itinerary'>
                <h2>Itinerary</h2>
                <h3>Meeting Point</h3>
                <p className="dot-before"><b>Meet at</b>: 12:30pm Pick-up at People's Square</p>
                <p className="dot-before"><b>Start at</b>: 2:00pm Arrive at Fengde Garden</p>
                <p className="dot-before"><b>End at</b>: 4:30pm - 5:30pm Departure from Fengde Garden and return to the city center</p>
                <h3>Schedule</h3>
                <p className="dot-before">********</p>
                <p className="dot-before">********</p>
                <p className="dot-before">********</p>
                <p className="dot-before">********</p>
                <p className="dot-before">********</p>
                <p>* Notice: Due to the physically demanding nature of the city walk, we strongly recommend that participants be at least 10 and 70 years of age. Additionally, bringing infants is not advised.</p>
            </div>
        </div>
    );
}
export default XlbItinerary;
import './Itinerary.css';
function XlbItinerary() {
    return(
        <div className='outer-container'>
            <div className='itinerary'>
                <h2>Itinerary</h2>
                <h3>Meeting Point</h3>
                <p className="dot-before"><b>Meet at</b>: 12:30pm Pick up at your hotel </p>
                <p className="dot-before"><b>Start at</b>: 2:00pm Arrive at Fengde Garden</p>
                <p className="dot-before"><b>End at</b>: 4:40pm - 5:30pm Return to your hotel</p>
                <h3>Schedule</h3>
                <p className="dot-before">Hotel pick up</p>
                <p className="dot-before">Tour of a traditional Chinese garden</p>
                <p className="dot-before">Xiaolongbao making and tasting experience</p>
                <p className="dot-before">Hotel drop off</p>
            </div>
        </div>
    );
}
export default XlbItinerary;
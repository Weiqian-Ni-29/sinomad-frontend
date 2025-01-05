import './Itinerary.css';
function JingzeItinerary() {
    return(
        <div className='outer-container'>
            <div className='itinerary'>
                <h2>Itinerary</h2>
                <h3>Meeting Point</h3>
                <p className="dot-before"><b>Meet at</b>: 9:00am pick up at your hotel</p>
                <p className="dot-before"><b>Start at</b>: 11:00am Jinze Ancient Water Town</p>
                <p className="dot-before"><b>End at</b>: 5:30 pm return to your hotel</p>
                <h3>Schedule</h3>
                <p className="dot-before">Hotel pick up</p>
                <p className="dot-before">Jinze water town tour</p>
                <p className="dot-before">Lunch</p>
                <p className="dot-before">Chinese painting experience</p>
                <p className="dot-before">Hotel drop off</p>
            </div>
        </div>
    );
}
export default JingzeItinerary;
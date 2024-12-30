import './Itinerary.css';
function BundItinerary() {
    return(
        <div className='outer-container'>
            <div className='itinerary'>
                <h2>Itinerary</h2>
                <h3>Meeting Point</h3>
                <p className="dot-before"><b>Meet at</b>: 2:45pm some where near Sihang Warehouse(to be updated)</p>
                <p className="dot-before"><b>Start at</b>: 3:00pm Sihang Warehouse</p>
                <p className="dot-before"><b>End at</b>: 6:30pm The Bund</p>
                <h3>Schedule</h3>
                <p className="dot-before">Suzhou Creek</p>
                <p className="dot-before">Coffee Break</p>
                <p className="dot-before">The North Bund</p>
                <p className="dot-before">The Bund</p>
                <p className="dot-before">Dinner</p>
                <p>* Notice: Due to the physically demanding nature of the city walk, we strongly recommend that participants be at least 10 and 70 years of age. Additionally, bringing infants is not advised.</p>
            </div>
        </div>
    );
}
export default BundItinerary;
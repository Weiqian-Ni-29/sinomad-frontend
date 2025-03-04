import './TripOverview.css';

function DumplingTripOverview() {
    return(
        <div className='outer-container'>
            <div className='overview'>
                <h2>Intro</h2>
                <p>A guided walking tour through Shanghai's former French Concession, culminating in a hands-on dumpling-making workshop at a legendary local restaurant.</p>
                <h2>Highlights</h2>
                <p className='dot-before'><b>Cultural Fusion: </b>Explore the architectural legacy of Shanghai's "Paris of the East" through iconic 1930s apartments and villas.
                </p>
                <p className='dot-before'><b>Expert Narration: </b>Dive into hidden stories of landmarks like Magy Apartments and Willow Court with historical insights.</p>
                <p className='dot-before'><b>Interactive Cooking: </b>Master authentic dumpling-making techniques under chef guidance, from dough-rolling to boiling.</p>
                <p className='dot-before'><b>Edible Souvenir: </b>Enjoy your handmade dumplings and take home a recipe card. </p>
                <h2>Description</h2>
                <p>This 4-hour experience begins at Changshu Road, guiding you through the Art Deco landmarks of former French Concession (Magy Apartments, Willow Court, Wukang Mansion) with storytelling about Shanghai's cosmopolitan past. The journey concludes at a century-old dumpling house on Middle Huaihai Road, where you'll craft dumplings from scratch under a master chef's instruction and savor your creations. Perfect for culture and food lovers!
                </p>
                <h2>Itinerary</h2>
                <p>Magy Apartments → Willow Court → Midget Apartments → Kempton Apartment → Wukang Mansion → Dumpling Workshop
                </p>
                <h2>Meet your guide</h2>
                <p>Mr. Song is a national senior English tour guide with 30 years of working experience, as well as a veteran professional researcher and lecturer in Shanghai's modern history and culture.
                </p>
                <h2>What's included</h2>
                <p className='dot-before'>Private guide </p>
                <p className='dot-before'>Dumplings making instructor</p>
                <p className='dot-before'>Bottled water</p>
                <p className='dot-before'>Dumplings making materials
                </p>
                <p className='dot-before'>Dinner (local cuisine)</p>
            </div>
        </div>
        
    );
}
export default DumplingTripOverview;
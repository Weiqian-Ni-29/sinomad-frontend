import './Main.css';
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import PortalImg from '../components/PortalImg';
import Explore from '../components/Explore';
// import ReviewSection from '../components/ReviewSection';
import TravelGuide from '../components/TravelGuide';
import AboutUs from '../components/AboutUs';

function App() {
  return (
    <div className="Main">
        <NavBar />
        <PortalImg />
        <Explore />
        <TravelGuide />
        {/* <ReviewSection /> */}
        <AboutUs />
        <Footer />
    </div>
  );
}

export default App;

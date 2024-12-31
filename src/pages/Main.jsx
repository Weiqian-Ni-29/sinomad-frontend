import './Main.css';
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import PortalImg from '../components/PortalImg';
import Explore from '../components/Explore';
import TravelGuide from '../components/TravelGuide';
import WhyChooseUs from '../components/WhyChooseUs';

function App() {
  return (
    <div className="Main">
        <NavBar />
        <PortalImg />
        <WhyChooseUs/>
        <Explore />
        <TravelGuide />
        <Footer />
    </div>
  );
}

export default App;

import '../styles/Main.css';
import React from 'react';
import NavBar from '../../components/en/NavBar';
import Footer from '../../components/en/Footer';
import PortalImg from '../../components/en/PortalImg';
import Explore from '../../components/en/Explore';
import TravelGuide from '../../components/en/TravelGuide';
import WhyChooseUs from '../../components/en/WhyChooseUs';

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

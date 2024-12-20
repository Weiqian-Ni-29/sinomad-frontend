import './Main.css';
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import PortalImg from '../components/PortalImg';
import Explore from '../components/Explore';
import TravelGuide from '../components/TravelGuide';

function App() {
  return (
    <div className="Main">
        <NavBar />
        <PortalImg />
        <Explore />
        <TravelGuide />
        <Footer />
    </div>
  );
}

export default App;

import '../styles/Main.css';
import React from 'react';
import NavBarZH from '../../components/zh/NavBarZH';
import PortalImgZH from '../../components/zh/PortalImgZH';
import ExploreZH from '../../components/zh/ExploreZH';
import WhyChooseUsZH from '../../components/zh/WhyChooseUsZH';
import FooterZH from '../../components/zh/FooterZH';
import TravelGuideZH from '../../components/zh/TravelGuideZH';

function AppZH() {
  return (
    <div className="Main">
        <NavBarZH />
        <PortalImgZH />
        <WhyChooseUsZH />
        <ExploreZH />
        <TravelGuideZH />
        <FooterZH />
    </div>
  );
}

export default AppZH;

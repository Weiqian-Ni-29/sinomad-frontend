import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main'
import XujiaHuiJingan from './pages/XujiahuiJingan';
import TermsNConditions from './pages/TermsNConditions';
import Payment from './pages/Payment';
import PaymentSuccess from './pages/PaymentSuccess';
import AboutUs from './pages/AboutUs';
import Bund from './pages/Bund';
import Jingze from './pages/Jingze';
import Xlb from './pages/Xlb';
import Dumpling from './pages/Dumpling';
import WikiPayment from './pages/wikis/Payment';
import WikiTransport from './pages/wikis/Transport';
import HotelAndTicketBooking from './pages/wikis/HotelAndTicketBooking';
import InternetConnect from './pages/wikis/InternetConnect';
import VisaFreeTravelGuide from './pages/wikis/VisaFreeTravelGuide';
import { Navigate } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/en" replace />} />
          <Route path="/en" element={<Main />} />
          <Route path="/XujiaHuiJingan/en" element={<XujiaHuiJingan price='1' />} />
          <Route path="/Bund/en" element={<Bund price='1' />} />
          <Route path="/Jingze/en" element={<Jingze price='2' />} />
          <Route path="/Xlb/en" element={<Xlb price='1' />} />
          <Route path="/Dumpling/en" element={<Dumpling price='1' />} />
          <Route path="/TermsNConditions/en" element={<TermsNConditions/>}/>
          <Route path="/Payment/en" element={<Payment/>}/>
          <Route path="/PaymentSuccess/en" element={<PaymentSuccess/>}/>
          <Route path='/AboutUs/en' element={<AboutUs/>}/>
          <Route path='/Wiki-Payment/en' element={<WikiPayment/>}/>
          <Route path='/Wiki-Transport/en' element={<WikiTransport/>}/>
          <Route path='/Wiki-Hotel-And-Ticket-Booking/en' element={<HotelAndTicketBooking/>}/>
          <Route path='/Wiki-Internet-Connectivity/en' element={<InternetConnect/>}/>
          <Route path='/Wiki-VisaFree-TravelGuide/en' element={<VisaFreeTravelGuide/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

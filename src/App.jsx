import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/en/Main'
import MainZH from './pages/zh/MainZH'
import XujiaHuiJingan from './pages/en/XujiahuiJingan';
import XujiaHuiJinganZH from './pages/zh/XujiahuiJinganZH';
import TermsNConditions from './pages/en/TermsNConditions';
import Payment from './pages/en/Payment';
import PaymentSuccess from './pages/en/PaymentSuccess';
import AboutUs from './pages/en/AboutUs';
import AboutUsZH from './pages/zh/AboutUsZH';
import Bund from './pages/en/Bund';
import BundZH from './pages/zh/BundZH';
import Jingze from './pages/en/Jingze';
import JingzeZH from './pages/zh/JingzeZH';
import Xlb from './pages/en/Xlb';
import XlbZH from './pages/zh/XlbZH';
import Dumpling from './pages/en/Dumpling';
import DumplingZH from './pages/zh/DumplingZH';
import PaperCut from './pages/en/PaperCut';
import PaperCutZH from './pages/zh/PaperCutZH';
import WikiPayment from './pages/wikis/en/Payment';
import WikiTransport from './pages/wikis/en/Transport';
import HotelAndTicketBooking from './pages/wikis/en/HotelAndTicketBooking';
import InternetConnect from './pages/wikis/en/InternetConnect';
import VisaFreeTravelGuide from './pages/wikis/en/VisaFreeTravelGuide';
import { Navigate } from 'react-router-dom';
import PaymentZH from './pages/zh/PaymentZH';

const cityWalkPrice = [649, 649, 428, 428, 404, 404, 404, 367, 367, 367, 367, 367, 367, 367, 367];
const dumplingPrice = [796, 796, 673, 673, 673, 612];
const paperCutPrice = [1102, 1102, 979, 979, 979, 918];
const jingzePrice = [2056, 2056, 1628, 1628, 1628, 1444];
const xlbPrice = [1591, 1591, 1071, 1071, 1071, 918, 918, 918];

// const cityWalkPrice = [0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01];
// const dumplingPrice = [0.01, 0.01, 0.01, 0.01, 0.01, 0.01];
// const paperCutPrice = [0.01, 0.01, 0.01, 0.01, 0.01, 0.01];
// const jingzePrice = [0.01, 0.01, 0.01, 0.01, 0.01, 0.01];
// const xlbPrice = [0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01];


function App() {
  const [rate, setRate] = useState(null);

  useEffect(() => {
    const fetchRate = async () => {
      try {
        const response = await axios.get('https://api.frankfurter.app/latest?from=USD&to=CNY');
        setRate(response.data.rates.CNY);
      } catch (error) {
        console.error('获取汇率失败:', error);
      }
    };
    fetchRate();
    const interval = setInterval(fetchRate, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/en" replace />} />
          <Route path="/en" element={<Main />} />
          <Route path="/zh" element={<MainZH />}/>
          <Route path="/XujiaHuiJingan/en" element={<XujiaHuiJingan price={cityWalkPrice} rate={rate} />} />
          <Route path="/XujiaHuiJingan/zh" element={<XujiaHuiJinganZH price={cityWalkPrice} rate={rate}/>} />
          <Route path="/Bund/en" element={<Bund price={cityWalkPrice} rate={rate}/>} />
          <Route path="/Bund/zh" element={<BundZH price={cityWalkPrice} rate={rate}/>} />
          <Route path="/Jingze/en" element={<Jingze price={jingzePrice} rate={rate}/>} />
          <Route path="/Jingze/zh" element={<JingzeZH price={jingzePrice} rate={rate}/>} />
          <Route path="/Xlb/en" element={<Xlb price={xlbPrice} rate={rate}/>} />
          <Route path="/Xlb/zh" element={<XlbZH price={xlbPrice} rate={rate}/>} />
          <Route path="/Dumpling/en" element={<Dumpling price={dumplingPrice} rate={rate}/>} />
          <Route path="/Dumpling/zh" element={<DumplingZH price={dumplingPrice} rate={rate}/>} />
          <Route path="/PaperCut/en" element={<PaperCut price={paperCutPrice} rate={rate}/>} />
          <Route path="/PaperCut/zh" element={<PaperCutZH price={paperCutPrice} rate={rate}/>} />
          <Route path="/TermsNConditions/en" element={<TermsNConditions/>}/>
          <Route path="/Payment/en" element={<Payment/>}/>
          <Route path="/Payment/zh" element={<PaymentZH/>}/>
          <Route path="/PaymentSuccess/en" element={<PaymentSuccess/>}/>
          <Route path='/AboutUs/en' element={<AboutUs/>}/>
          <Route path='/AboutUs/zh' element={<AboutUsZH/>}/>
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

import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main'
import XujiaHuiJingan from './pages/XujiahuiJingan';
import TermsNConditions from './pages/TermsNConditions';
import Payment from './pages/Payment';
import PaymentSuccess from './pages/PaymentSuccess';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/XujiaHuiJingan" element={<XujiaHuiJingan price='90' />} />
          <Route path="/TermsNConditions" element={<TermsNConditions/>}/>
          <Route path="/Payment" element={<Payment/>}/>
          <Route path="/PaymentSuccess" element={<PaymentSuccess/>}/>
          <Route path='/AboutUs' element={<AboutUs/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

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
import WikiPayment from './pages/wikis/Payment';
import WikiTransport from './pages/wikis/Transport';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/XujiaHuiJingan" element={<XujiaHuiJingan price='90' />} />
          <Route path="/Bund" element={<Bund price='95' />} />
          <Route path="/Jingze" element={<Jingze price='220' />} />
          <Route path="/Xlb" element={<Xlb price='220' />} />
          <Route path="/TermsNConditions" element={<TermsNConditions/>}/>
          <Route path="/Payment" element={<Payment/>}/>
          <Route path="/PaymentSuccess" element={<PaymentSuccess/>}/>
          <Route path='/AboutUs' element={<AboutUs/>}/>
          <Route path='/Wiki-Payment' element={<WikiPayment/>}/>
          <Route path='/Wiki-Transport' element={<WikiTransport/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

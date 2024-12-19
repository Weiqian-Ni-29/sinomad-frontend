import React from 'react';
import dayjs from 'dayjs';
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import NavBarCustom from '../components/NavBarCustom';
import './PaymentSuccess.css';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
function PaymentSuccess() {
    const location = useLocation();
    const { order_number, name, email, phone, region_code, travelers, travel_date } = location.state || {};
    const parsedDate = dayjs(travel_date.$d).format('YYYY-MM-DD');
    return(
        <div className='world'>
            <NavBarCustom title='Payment Successful'/>
            <div className='payment-success'>
                <div className='confirmation'>
                    <h2>Thanks for choosing SiNomad!</h2>
                    <p>Congratulations, Your trip is set! A confirmation email will be sent to your mailbox shortly.</p>
                    <h3>Order detail</h3>
                    <div className='bookinginfo'>
                        <p>order_number:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{order_number}</p>
                        <p>name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{name}</p>
                        <p>telephone:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +{region_code}&nbsp;{phone}</p>
                        <p>email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{email}</p>
                        <p>number of travelers:&nbsp;&nbsp;&nbsp;&nbsp;{travelers}</p>
                        <p>travel date: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{parsedDate}</p>
                    </div>
                    <p>If you have any inquiries, please do not hesitate to contact us <br/>via any of our social media platforms available at the bottom of this page.</p>
                </div>
                <div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginBottom:'20px' }}>
                        <Divider style={{ width: '80%' }} />
                    </div>
                    <h2>A short Questionnare</h2>
                    <p>To enhance your travel experience with us, we kindly invite you to complete a brief questionnaire prior to your trip.<br/> This will help us gather essential information about your personal preferences.</p>
                    <Button
                        variant="contained"
                        style={{ backgroundColor: 'bisque', color: 'black', marginTop: '20px', marginLeft: '50px', marginRight: '50px' }}
                        onClick={() => {
                            window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSe32qOOxj7hI4Wc7EUSmgiqRmpraHBFWdc7gRHocT40_9yRIQ/viewform?usp=sf_link';
                        }}
                    >
                        Questionnare
                    </Button>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
export default PaymentSuccess;
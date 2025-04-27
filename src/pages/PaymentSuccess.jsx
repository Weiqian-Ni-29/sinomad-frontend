import React from 'react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Footer from '../components/en/Footer';
import NavBarCustom from '../components/en/NavBarCustom';
import './PaymentSuccess.css';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import config from '../Constants';

function PaymentSuccess() {
    const [searchParams] = useSearchParams();
    const [orderInfo, setOrderInfo] = useState(null);

    const orderNumber = searchParams.get('out_trade_no'); // 支付宝自动附加的订单号
    console.log(orderNumber);
    // 使用orderNumber去调用后端接口去数据库中查找订单信息
    useEffect(() => {
        if (orderNumber) {
          // 调用后端API获取订单信息
          fetch(config.API_SERVER + `orders/${orderNumber}`)
            .then(res => res.json())
            .then(data => setOrderInfo(data.orderInfo))
            .catch(console.error);
        }
      }, [orderNumber]);

    return(
        <div>
      {orderInfo ? (
        <div className='world'>
            <NavBarCustom title='Payment Successful'/>
            <div className='payment-success'>
                <div className='confirmation'>
                    <h2>Thanks for choosing SiNomad!</h2>
                    <p>Congratulations, Your trip is set!</p>
                    <h3>Order detail</h3>
                    <div className='bookinginfo'>
                        <p>order_number:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{orderInfo.order_number}</p>
                        <p>name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{orderInfo.name}</p>
                        <p>telephone:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +{orderInfo.region_code}&nbsp;{orderInfo.phone}</p>
                        <p>email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{orderInfo.email}</p>
                        <p>number of travelers:&nbsp;&nbsp;&nbsp;&nbsp;{orderInfo.travelers}</p>
                        <p>travel date: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{orderInfo.travel_date}</p>
                    </div>
                    <p>If you have any inquiries, please do not hesitate to contact us <br/>via any of our social media platforms available at the bottom of this page.</p>
                </div>
                {/* <div>
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
                </div> */}
            </div>
            <Footer/>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
        
    );
}
export default PaymentSuccess;
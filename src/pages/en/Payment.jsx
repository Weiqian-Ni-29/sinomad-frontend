import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { TextField, Button, Box } from '@mui/material';
import NavBarCustom from '../../components/en/NavBarCustom';
import '../styles/Payment.css';
// import { useNavigate } from 'react-router-dom';
import Footer from '../../components/en/Footer';
import Divider from '@mui/material/Divider';
import dayjs from 'dayjs';
import config from '../../Constants';


function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

function validPhoneNumber(phoneNumber) {
    // 去除字符串中的空格和加号
    const cleaned = phoneNumber.replace(/[\s+]/g, '');
    // 检查清理后的字符串是否仅包含数字，并且长度在10到15之间
    const isNumeric = /^\d{10,15}$/.test(cleaned);
    return isNumeric;
}

function isValidRegion(areaCode) {
    // 匹配以 "+" 开头，后跟1到2个数字，或者直接1到2个数字
    const regex = /^(?:\+\d{1,2}|\d{1,2})$/;
    return regex.test(areaCode);
}

function generateOrderId() {
    const timestamp = Date.now().toString(36); 
    const randomChars = Math.random().toString(36).substring(2, 6);
    return (timestamp.slice(-2) + randomChars).toUpperCase(); 
}
  
function Payment() {
    const location = useLocation();
    const { selectedNumber, price, selectedDate, route } = location.state || {};

    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        phone: '',
        region:'',
      });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();  // Prevent form submission by default
        if(!inputs.name || !inputs.email || !inputs.phone || !inputs.region || !selectedDate || !dayjs.isDayjs(selectedDate)) {
            alert('Please make sure all the fields in the form are correctly filled.');
            return;
        }
        if(!isValidRegion(inputs)) {
            console.log('invalid region')
        }

        if (!validateEmail(inputs.email) || !validPhoneNumber(inputs.phone) || !isValidRegion(inputs.region)) {
            alert('The format of email or phone is incorrect, please try again.');
            return;
        }

        const order_number = generateOrderId();
        const order_info = JSON.stringify({
            order_number: order_number,
            name: inputs.name,
            email: inputs.email,
            phone: inputs.phone,
            region_code: inputs.region.replace("+",""), 
            amount_paid: selectedNumber * price,
            travelers: selectedNumber,
            travel_date: selectedDate,
            route: route,
        });

        try {
            // 1. 提交用户信息(更新数据库)
            const infoResponse = await fetch(config.API_SERVER + 'submit-userinfo', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: order_info,
            });

            if (!infoResponse.ok) throw new Error('User info submission failed');

            // 2. 构建支付跳转URL
            const params = {
                order_number: order_number,
                amount: selectedNumber * price,
                subject: `${route} Tour Booking`,
                order_info: order_info
            };
            // 判断当前设备是否为移动端
            const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            const platform = isMobile ? 'mobile' : 'page';
            console.log(platform);
            
            fetch(config.API_SERVER + `alipay/payment/${platform}`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(params)
              })
              .then(response => response.json())
              .then(data => {
                if (data.payment_url) {
                  window.location.href = data.payment_url;
                //   window.open(data.payment_url, '_blank');
                }
              })
              .catch(error => console.error('Error:', error));
        } catch (error) {
            console.error('Payment flow error:', error);
            alert(`Payment failed: ${error.message}`);
        }
    }

    return(
        <div className='world'>
            <NavBarCustom title='Payment'/>
            <div className='outer-container'>
                <div className='Payment'>
                    <h2>Please fill in your contact info</h2>
                    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '40%', margin: 'auto','@media (max-width: 768px)': {
                        width: '90%', // 手机端宽度设置为 90%
                        } }}>
                        <TextField
                            label="Name"
                            variant="outlined"
                            name="name"
                            value={inputs.name}
                            onChange={handleChange}
                        />
                        <TextField
                            label="Email"
                            variant="outlined"
                            name="email"
                            type="email"
                            value={inputs.email}
                            onChange={handleChange}
                        />
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <TextField
                                label="region"
                                variant="outlined"
                                name="region"
                                value={inputs.region}
                                onChange={handleChange}
                                style={{width:'80px'}}
                            />
                            <TextField
                                label="Phone"
                                variant="outlined"
                                name="phone"
                                value={inputs.phone}
                                onChange={handleChange}
                                style={{flex: '1'}}
                            />
                        </div>
                        </Box>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                        <Divider style={{ width: '80%' }} />
                    </div>
                    <h2>The total charge for {selectedNumber} person is ￥{selectedNumber * price}</h2>
                    <Button
                        variant="contained"
                        style={{ backgroundColor: 'bisque', color: 'black', marginTop: '20px', marginLeft: '50px', marginRight: '50px' }}
                        onClick={handleSubmit}
                    >
                        Pay by Alipay
                    </Button>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                <Divider style={{ width: '80%' }} />
            </div>
            <h3>Notice: Free cancellation up to 3 days in advance(A full refund in 7 working days)</h3>
            <Footer/>
        </div>
    );
}
export default Payment;
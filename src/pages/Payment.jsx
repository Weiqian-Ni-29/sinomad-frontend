import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { TextField, Button, Box } from '@mui/material';
import NavBarCustom from '../components/NavBarCustom';
import './Payment.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Divider from '@mui/material/Divider';
import dayjs from 'dayjs';


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

function Payment() {
    const location = useLocation();
    const { selectedNumber, price, selectedDate } = location.state || {};
    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        phone: '',
      });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    };

    // triggers when payment is successful
    const handleSubmit = async (e) => {
        e.preventDefault();  // Prevent form submission by default
        if(!inputs.name || !inputs.email || !inputs.phone || !selectedDate || !dayjs.isDayjs(selectedDate)) {
            alert('Please make sure all the fields in the form are correctly filled.');
            return;
        }
        if (!validateEmail(inputs.email) || !validPhoneNumber(inputs.phone)) {
            alert('The format of email or phone is incorrect, please try again.');
            return;
        }

        // 提交表单数据
        try {
            const response = await fetch('http://localhost:5000/api/submit-userinfo', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                name: inputs.name,
                email: inputs.email,
                phone: inputs.phone,
                amount_paid: selectedNumber * price,
                travelers: selectedNumber,
                travel_date: selectedDate,
              }),
            });
      
            if (response.ok) {
                const data = await response.json();
                console.log(`Server response: ${data.message}`);
                navigate('/PaymentSuccess');
              } else {
                const errorData = await response.json();
                alert(`Payment not successful: ${errorData.message}`);
              }
            } catch (error) {
              console.error('Error while submitting the booking:', error);
              alert("Something's wrong, please try again.");
            }
    }

    return(
        <div className='world'>
            <NavBarCustom title='Payment'/>
            <div className='outer-container'>
                <div className='Payment'>
                    <h2>Please fill in your contact info</h2>
                    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '30%', margin: 'auto' }}>
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
                        <TextField
                            label="Phone"
                            variant="outlined"
                            name="phone"
                            value={inputs.phone}
                            onChange={handleChange}
                        />
                        </Box>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                        <Divider style={{ width: '80%' }} />
                    </div>
                    <h2>The total charge for {selectedNumber} person is ${selectedNumber * price}</h2>
                    <h2>Choose your Payment method</h2>
                    <Button
                        variant="contained"
                        style={{ backgroundColor: 'bisque', color: 'black', marginTop: '20px', marginLeft: '50px', marginRight: '50px' }}
                        onClick={handleSubmit}
                    >
                        Pay by credit card
                    </Button>
                    <Button
                        variant="contained"
                        style={{ backgroundColor: 'bisque', color: 'black', marginTop: '20px', marginLeft: '50px', marginRight: '50px' }}
                        onClick={handleSubmit}
                    >
                        Pay by paypal
                    </Button>
                    <Button
                        variant="contained"
                        style={{ backgroundColor: 'bisque', color: 'black', marginTop: '20px', marginLeft: '50px', marginRight: '50px' }}
                        onClick={handleSubmit}
                    >
                        Pay by Alipay
                    </Button>
                    <Button
                        variant="contained"
                        style={{ backgroundColor: 'bisque', color: 'black', marginTop: '20px', marginLeft: '50px', marginRight: '50px' }}
                        onClick={handleSubmit}
                    >
                        Pay by Wechat
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
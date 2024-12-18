import Footer from '../components/Footer';
import NavBarCustom from '../components/NavBarCustom';
import './PaymentSuccess.css';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
function PaymentSuccess() {
    return(
        <div className='world'>
            <NavBarCustom title='Payment Successful'/>
            <div className='payment-success'>
                <div>
                    <h2>Thanks for choosing SiNomad!</h2>
                    <p>Your trip is set! A confirmation email will be sent to your mailbox shortly, one of our team members will contact you at least 48 hours prior to your trip. Please keep an eye on your WhatsApp friend requests.</p>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '150px', marginBottom:'100px' }}>
                        <Divider style={{ width: '80%' }} />
                    </div>
                    <h2>A short Questionnare</h2>
                    <p>To enhance your travel experience with us, we kindly invite you to complete a brief questionnaire prior to your trip. This will help us gather essential information about your personal preferences.</p>
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
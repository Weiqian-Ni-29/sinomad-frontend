import Footer from '../../components/Footer';
import NavBarCustom from '../../components/NavBarCustom';
import './Wiki.css';
import './Payment.css';
import img1 from '../../assets/imgs/wikis/payment/payment-wiki1.png';
import img2 from '../../assets/imgs/wikis/payment/payment-wiki2.png';
import img3 from '../../assets/imgs/wikis/payment/payment-wiki3.png';
import img4 from '../../assets/imgs/wikis/payment/payment-wiki4.png';
import img5 from '../../assets/imgs/wikis/payment/payment-wiki5.png';
import img6 from '../../assets/imgs/wikis/payment/payment-wiki6.png';
import img7 from '../../assets/imgs/wikis/payment/payment-wiki7.png';
import img8 from '../../assets/imgs/wikis/payment/payment-wiki8.png';
import img9 from '../../assets/imgs/wikis/payment/payment-wiki9.png';
import img10 from '../../assets/imgs/wikis/payment/payment-wiki10.png';
import img11 from '../../assets/imgs/wikis/payment/payment-wiki11.png';
import img12 from '../../assets/imgs/wikis/payment/payment-wiki12.png';
import ToTopButton from '../../components/ToTopButton';
function Payment() {
    return (
        <div>
            <NavBarCustom title="Payment in China"/>
            <div className='world-x'>
                <h1>2025 Complete Guide to Payment Methods in China</h1>
                <div>
                    <h2>Table of Contents</h2>
                    <div className='word-wrapper'>
                        <ul>
                            <li><a href="#mobile">Mobile Payments: The Preferred Method</a></li>
                            <li><a href="#card">Using Credit and Debit Cards</a></li>
                            <li><a href="#cash">Cash as a Backup Payment Option</a></li>
                        </ul>
                    </div>
                </div>
                <div id="mobile">
                    <h2>Mobile Payments: The Popular Choice</h2>
                    <div className='word-wrapper'>
                        <p>
                            You can enjoy convenient payments with just a mobile phone. Payment services such as Alipay and WeChat Pay are available. For better payment experience, no IDs are required for transactions under a certain amount. Give it a go! 
                        </p>
                    </div>
                    <h3>Alipay</h3>
                    <p>(1)Search for Alipay in the app store or on its official website, and download the app.</p>
                    <img className="img2" src={img2} alt="payment2" />
                    <p>(2)Open the app, and register with your phone number or just sign in if you have already registered.</p>
                    <img className="img3" src={img3} alt="payment3" />
                    <p>(3) Add bank cards as shown below.</p>
                    <p>Tip: Visa, Mastercard, JCB, Diners Club, and Discover cards can all be added to Alipay.<br/>
                        Tap "Add Now" and follow on-page prompts to complete the process.</p>
                    <img className="img4" src={img4} alt="payment4" />
                    <p>(4)Pay by scanning QR code.</p>
                    <p>Method 1: Tap "Scan" and scan the merchant-presented QR code.</p>
                    <img className="img5" src={img5} alt="payment5" />
                    <p>Method 2: Tap "Pay/Receive", and present your QR code to the merchant.</p>
                    <img className="img6" src={img6} alt="payment6" />
                    <h4>WeChat Pay</h4>
                    <p>(1) Search for WeChat in the app store, and download it.</p>
                    <img className="img7" src={img7} alt="payment7" />
                    <p>(2) Open the WeChat app, and register with your phone number or just sign in if you have already registered.</p>
                    <img className="img8" src={img8} alt="payment8" />
                    <p>(3) Add bank cards as shown below.</p>
                    <img className="img9" src={img9} alt="payment9" />
                    <img className="img10" src={img10} alt="payment10" />
                    <p>Note: Visa, Mastercard, American Express, JCB, Diners Club, and Discover cards can all be added to Weixin Pay.<br/>
                        Tap "Add a card" and follow on-page prompts to complete the process.</p>
                    <p>(4) Pay by scanning QR code.<br/>
                        You can pay by scanning a merchant's QR code (method 1) or by having a merchant scan yours (method 2).</p>
                    <p>Method 1: Tap the "+" sign at the upper right corner and then the "Scan" icon, and scan the merchant-presented QR code.</p>
                    <img className="img11" src={img11} alt="payment11" />
                    <p>Method 2: Tap the "+" sign at the upper right corner and then the "Money" icon, and present your QR code to the merchant.</p>
                    <img className="img12" src={img12} alt="payment12" />
                    <p>Follow the instructions in the app to complete payment process.</p>
                </div>
                <div id="card">
                    <h2>Using Credit and Debit Cards</h2>
                    <div className="word-img-container">
                    <img className="img1" src={img1} alt="payment1" />
                        <div className="word-wrapper">
                            <p>
                                Bank cards issued in your home country/region can be accepted if logos of UnionPay, Visa, Mastercard and other payment organizations are displayed at the checkout counter (see picture below). If not, please ask the cashier whether your bank card can be accepted. If you hold a UnionPay card, it can be accepted by all merchant POS terminals in China's mainland.
                            </p>
                        </div>
                    </div>
                </div>
                <div id="cash">
                    <h2>Cash as a Backup Option</h2>
                    <div className='word-wrapper'>
                        <p>
                        Although China is transitioning to a cashless economy, carrying cash remains a practical backup option. While technically accepted almost everywhere, cash is less frequently used in urban areas where mobile payments prevail. Relying on cash can be inconvenient and may cause delays if vendors prioritize mobile payments or have limited change. It’s advisable to keep a small amount of cash for emergencies or rural areas while primarily using mobile payment methods.
                        </p>
                    </div>
                </div>
            </div>
            <ToTopButton/>
            <div style={{height:"5em"}}></div>
            <Footer/>
        </div>
    );
}
export default Payment;
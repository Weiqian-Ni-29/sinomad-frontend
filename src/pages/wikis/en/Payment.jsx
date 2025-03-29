import Footer from '../../../components/en/Footer';
import NavBarCustom from '../../../components/en/NavBarCustom';
import img2 from '../../../assets/imgs/wikis/payment/payment-wiki2.png';
import img3 from '../../../assets/imgs/wikis/payment/payment-wiki3.png';
import img4 from '../../../assets/imgs/wikis/payment/payment-wiki4.png';
import img7 from '../../../assets/imgs/wikis/payment/payment-wiki7.png';
import img8 from '../../../assets/imgs/wikis/payment/payment-wiki8.png';
import img9 from '../../../assets/imgs/wikis/payment/payment-wiki9.png';
import img10 from '../../../assets/imgs/wikis/payment/payment-wiki10.png';
import img13 from '../../../assets/imgs/wikis/payment/payment-wiki45.png';
import img14 from '../../../assets/imgs/wikis/payment/payment-wiki1112.png';
import img15 from '../../../assets/imgs/wikis/payment/1-D.jpg';
import img16 from '../../../assets/imgs/wikis/payment/2-D.jpg';
import img17 from '../../../assets/imgs/wikis/payment/4-D.jpg';
import img18 from '../../../assets/imgs/wikis/payment/5-D.jpg';
import ToTopButton from '../../../components/ToTopButton';
import StaticPortalImg from '../../../components/StaticPortalImg';
import '../styles/Wiki.css';
import '../styles/Payment.css';
import TableOfContents from '../../../components/TableOfContents';
import StepByStepGuide from '../../../components/StepByStepGuide';
function Payment() {
    return (
        <div>
            <NavBarCustom title="Payment in China"/>
            <div className='world-x'>
            <StaticPortalImg img={img15} 
                title='2025 Comprehensive Payment Guide for China'
                content="This guide provides you with key information for payment in China."
                textColor='white'
            />
            <TableOfContents
                sections={[
                    {
                        title:{},
                        items: [
                        { name: "Mobile Payments: The Preferred Method", href:"#mobile" },
                        { name: "Using Credit and Debit Cards", href: "#card" },
                        { name: "Cash as a Backup Payment Option", href: "#cash" }
                    ]}
                ]}
            />
            <StaticPortalImg img={img16} 
                id='mobile'
                title='Mobile Payments: The Popular Choice'
                content="You can enjoy convenient payments with just a mobile phone. Payment services such as Alipay and WeChat Pay are available. For better payment experience, no IDs are required for transactions under a certain amount. Give it a go!"
                textColor='white'
            />
            <StepByStepGuide
                title="Alipay"
                steps = {
                    [
                        {
                            title: "Search for Alipay in the app store or on its official website, and download the app.",
                        },
                        {
                            title: "Open the app, and register with your phone number or just sign in if you have already registered.",
                        },
                        {
                            title: "Add bank cards as shown below.",
                            description: "Tip: Visa, Mastercard, JCB, Diners Club, and Discover cards can all be added to Alipay. Tap \"Add Now\" and follow on-page prompts to complete the process.",
                        },
                        {
                            title: "Pay by scanning QR code.",
                            description: "Method 1: Tap \"Scan\" and scan the merchant-presented QR code.\n - Method 2: Tap \"Pay/Receive\", and present your QR code to the merchant."
                        }
                    ]
                }
                imgs={[[{img:img2}, {img:img3}], [{img:img4},{img:img13}]]}
            />
            <StepByStepGuide
                title="WeChat Pay"
                steps = {
                    [
                        {
                            title: "Search for WeChat in the app store, and download it.",
                        },
                        {
                            title: "Open the WeChat app, and register with your phone number or just sign in if you have already registered.",
                        },
                        {
                            title: "Add bank cards as shown below.",
                            description: "Note: Visa, Mastercard, American Express, JCB, Diners Club, and Discover cards can all be added to Weixin Pay.\nTap \"Add a card\" and follow on-page prompts to complete the process.",
                        },
                        {
                            title: "Pay by scanning QR code.",
                            description: "You can pay by scanning a merchant's QR code (method 1) or by having a merchant scan yours (method 2).\nMethod 1: Tap the \"+\" sign at the upper right corner and then the \"Scan\" icon, and scan the merchant-presented QR code.\nMethod 2: Tap the \"+\" sign at the upper right corner and then the \"Money\" icon, and present your QR code to the merchant."
                        }
                    ]
                }
                imgs={[[{img:img7}, {img:img8}], [{img:img9}, {img:img10}],[{img: img14}]]}
            />
            <StaticPortalImg img={img17} 
                id='card'
                title='Using Credit and Debit Cards'
                content="Bank cards issued in your home country/region can be accepted if logos of UnionPay, Visa, Mastercard and other payment organizations are displayed at the checkout counter (see picture below). If not, please ask the cashier whether your bank card can be accepted. If you hold a UnionPay card, it can be accepted by all merchant POS terminals in China's mainland."
                textColor='white'
            />
            <StaticPortalImg img={img18} 
                id='cash'
                title='Cash as a Backup Option'
                content="Although China is transitioning to a cashless economy, carrying cash remains a practical backup option. While technically accepted almost everywhere, cash is less frequently used in urban areas where mobile payments prevail. Relying on cash can be inconvenient and may cause delays if vendors prioritize mobile payments or have limited change. It’s advisable to keep a small amount of cash for emergencies or rural areas while primarily using mobile payment methods."
                textColor='white'
            /> 
            </div>
            <ToTopButton/>
            <div style={{height:"5em"}}></div>
            <Footer/>
        </div>
    );
}
export default Payment;
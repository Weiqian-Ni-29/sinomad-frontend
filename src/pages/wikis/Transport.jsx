import './Transport.css';
import './Wiki.css';
import Footer from '../../components/Footer';
import NavBarCustom from '../../components/NavBarCustom';
import ToTopButton from '../../components/ToTopButton';
import img1 from '../../assets/imgs/wikis/transport/transport-wiki1.png';
import img2 from '../../assets/imgs/wikis/transport/transport-wiki2.png';
import img3 from '../../assets/imgs/wikis/transport/transport-wiki3.png';
import img4 from '../../assets/imgs/wikis/transport/transport-wiki4.png';
import img5 from '../../assets/imgs/wikis/transport/transport-wiki5.png';
import img6 from '../../assets/imgs/wikis/transport/transport-wiki6.png';
import img7 from '../../assets/imgs/wikis/transport/transport-wiki7.png';
import img8 from '../../assets/imgs/wikis/transport/transport-wiki8.png';
import img9 from '../../assets/imgs/wikis/transport/transport-wiki9.png';
import img10 from '../../assets/imgs/wikis/transport/transport-wiki10.png';
import img11 from '../../assets/imgs/wikis/transport/transport-wiki11.png';
import img12 from '../../assets/imgs/wikis/transport/transport-wiki12.png';
import img13 from '../../assets/imgs/wikis/transport/transport-wiki13.png';
import img14 from '../../assets/imgs/wikis/transport/transport-wiki14.png';
import img15 from '../../assets/imgs/wikis/transport/transport-wiki15.png';
import img16 from '../../assets/imgs/wikis/transport/transport-wiki16.png';
import img17 from '../../assets/imgs/wikis/transport/transport-wiki17.png';
import img18 from '../../assets/imgs/wikis/transport/transport-wiki18.png';
import img19 from '../../assets/imgs/wikis/transport/transport-wiki19.png';
import img20 from '../../assets/imgs/wikis/transport/transport-wiki20.png';
import img21 from '../../assets/imgs/wikis/transport/transport-wiki21.png';
import img22 from '../../assets/imgs/wikis/transport/transport-wiki22.png';
import img23 from '../../assets/imgs/wikis/transport/transport-wiki23.png';
import img24 from '../../assets/imgs/wikis/transport/transport-wiki24.png';

function Transport() {
    return (
        <div>
            <NavBarCustom title="Transport in China"/>
            <div className='world-x'>
                <h1>2025 Comprehensive Transportation Guide for China</h1>
                <p>
                    This guide provides you with key information for traveling within and between cities in China. For intra-city transportation, the subway system offers a fast, economical, and efficient mode of travel, while taxis provide additional convenience for longer journeys, albeit at a higher cost. For inter-city travel, China's extensive aviation and high-speed rail networks offer comfortable and efficient travel options, ensuring a smooth experience across the country.
                </p>
                <div className='word-wrapper'>
                    <ul>
                        <li class="highlight"><a href="#intra-city-travel">Intra-city Travel</a></li>
                        <li class="indent"><a href="#navigation-apps">Using Navigation Apps</a></li>
                        <li class="indent"><a href="#bus-subway">Taking Buses and Subways</a></li>
                        <li class="indent"><a href="#taxis">Taking Taxis</a></li>
                        <li class="highlight"><a href="#inter-city-travel">Inter-city Travel</a></li>
                        <li class="indent"><a href="#fly">Flying</a></li>
                        <li class="indent"><a href="#train">Taking Trains</a></li>
                    </ul>
                </div>
                <h2 id='intra-city-travel'>Intra-city Travel</h2>
                <div className='word-img-container'>
                    <img className="timg1" src={img1} alt="transport1" />
                    <div className='word-wrapper'>
                        <p>When traveling within Chinese cities, using a reliable navigation app is crucial for efficient travel between neighborhoods. With a clear route plan, exploration becomes simple. Major cities have well-developed subway systems with bilingual signage, making them efficient and economical. Taxis offer additional convenience but are more expensive than public transportation. Below are detailed descriptions of various intra-city transportation options.</p>
                    </div>
                </div>
                <h2 id='navigation-apps'>Using Navigation Apps - Suitable for users with basic Chinese knowledge</h2>
                <h3>Amap</h3>
                <img className="timg2" src={img2} alt="transport2" />
                <div className='word-wrapper'>
                    <p>Amap is one of China's most popular navigation apps, offering seamless navigation features. However, it only supports Chinese. If you can read or understand some Chinese, Amap is a good choice and is available on Android and iOS platforms.</p>
                </div>
                <h3>Apple Maps - Suitable for iPhone users</h3>
                <img className="timg3" src={img3} alt="transport3" />
                <div className='word-wrapper'>
                    <p>Apple Maps is the preferred navigation app for iPhone users traveling in China. It integrates local transportation and geographic data, providing navigation options for driving, walking, cycling, and public transit. Users can enjoy real-time traffic updates and comprehensive route planning.</p>
                </div>
                <h3>Petal Maps - Suitable for Android users</h3>
                <img className="timg4" src={img4} alt="transport4" />
                <div className='word-wrapper'>
                    <p>Due to restrictions on many Google services, including Google Maps, in China, Petal Maps is the recommended alternative. Although the installation process may be slightly complex, Petal Maps offers reliable navigation features such as real-time traffic updates and detailed maps, making it a practical tool for navigating Chinese cities.</p>
                </div>
                <h2 id='bus-subway'>Taking Buses and Subways</h2>
                <div className='word-wrapper'>
                    <p>Major Chinese cities such as Beijing, Shanghai, and Chongqing have extensive subway systems that provide fast, convenient, and economical transportation options, with fares as low as 2 RMB. All subway stations have bilingual signs displaying station names and directions, facilitating navigation for non-Chinese speakers.</p>
                </div>
                <img className="timg5" src={img5} alt="transport5" />
                <div className='word-wrapper'>
                    <p>Local buses are the most economical transportation option in Chinese cities. However, since bus stop signs typically lack English translations, non-Chinese speakers may have difficulty determining when to disembark, making them less user-friendly.</p>
                </div>
                <p>There are various payment methods for subway tickets, and here is a detailed guide on purchasing subway tickets using different platforms.</p>
                <h3>Alipay for Taking Buses and Subways </h3>
                <p>
                    1. Open Alipay and tap "Transportation." <br/>
                    - If you have set up a bus/subway card, you will automatically be redirected to step 3. If not, you will proceed to step 2
                </p>
                <img className="timg6" src={img6} alt="transport6" />
                <p>
                    2. Set up a bus/subway card. <br/>
                    - Tap "Get Now," follow the instructions to register and activate your bus/subway card.
                </p>
                <img className="timg7" src={img7} alt="transport7" />
                <p>
                    Use your bus/subway card.<br/>
                    Once set up, simply scan the QR code at the bus door or subway gate to board.
                </p>
                <img className="timg8" src={img8} alt="transport8" />
                <h3>WeChat for Taking Buses and Subways </h3>
                <p>
                    1. Scan the QR code.<br/>
                    - If you have set up a bus/subway card, you can access it directly through the "Ride Code" mini-program and skip to step 3. If not, the app will guide you to step 2 for setup.
                </p>
                <img className="timg9" src={img9} alt="transport9" />
                <p>
                    2. Set up a bus/subway card.<br/>
                    - Tap "Activate," and follow the on-screen instructions to activate the bus and subway QR code card.
                </p>
                <img className="timg10" src={img10} alt="transport10" />
                <p>
                    Use your bus/subway card.<br/>
                    After activation, access the "Ride Code" mini-program through WeChat's search function or WeChat Pay. Once inside, simply scan the QR code at the bus or subway gate to board.
                </p>
                <img className="timg11" src={img11} alt="transport11" />
                <p>
                    You can also purchase single-use subway tickets using Alipay, WeChat Pay, or cash at the station's ticket vending machines. These machines usually offer English options, and you will receive a single-use ticket that must be returned at the exit gate.
                </p>
                <h2 id='taxis'>Taking Taxis</h2>
                <div className='word-wrapper'>
                    <p>
                        In Chinese cities, using ride-hailing services like Didi is the most convenient and safe way to travel, similar to Uber, and can be accessed through Alipay and WeChat. Ride-hailing services are typically 20-30% cheaper than regular taxis. Licensed taxis are also a reliable option, albeit slightly more expensive. It is recommended to avoid unlicensed private cars, as they may be unreliable and unsafe. <br/>
                        You can access Didi through mini-programs in Alipay or WeChat, with interfaces fully supported in English. Here is a step-by-step guide on how to use Didi through these platforms.
                    </p>
                </div>
                <h3>Alipay for Taking Taxis</h3>
                <p>
                    1. Open Alipay and tap "DiDi Travel."<br/>
                    - Launch the Alipay app, then select "DiDi Travel" from the service menu or search within the app.
                </p>
                <img className="timg12" src={img12} alt="transport12" />
                <p>
                    2. Enter the pickup and destination.<br/>
                    - Input your current location and destination in the respective fields.
                </p>
                <img className="timg13" src={img13} alt="transport13" />
                <p>
                    Choose the car type and confirm.<br/>
                    - Select the car type that suits your needs (e.g., economy, luxury), and tap "Confirm" to complete the booking.
                </p>
                <img className="timg14" src={img14} alt="transport14" />
                <h3>WeChat for Taking Taxis</h3>
                <p>
                    1. Open WeChat and access the Didi mini-program.<br/>
                    - Go to the "Me"section, tap "Payments and Services," and then select "DiDi" under the transportation options to access the mini-program. Alternatively, you can directly search for "DiDi" using the search bar at the top of the WeChat home screen.
                </p>
                <img className="timg15" src={img15} alt="transport15" />
                <p>
                    2. Follow the steps for Alipay.<br/>
                    - Once you access the Didi mini-program through WeChat, the process of entering the pickup and destination, selecting the car type, and confirming the trip is the same as described for Alipay.
                </p>
                <h2 id='inter-city-travel'>Inter-city Travel</h2>
                <div className='word-wrapper'>
                    <p>
                    For travel between multiple cities, utilizing China's extensive aviation and high-speed rail networks is the most comfortable, safe, and efficient way to travel. These transportation options ensure a smooth and enjoyable journey across the country.
                    </p>
                </div>
                <img className="timg16" src={img16} alt="transport16" />
                <h2 id='fly'>Flying</h2>
                <div className='word-wrapper'>
                    <p>
                        For foreigners, the most effective way to purchase plane tickets in China is directly through the airlines' official websites. These websites offer multilingual support, which helps avoid common booking issues. Below are the official websites and customer service contact numbers for China's three major airlines.
                    </p>
                </div>
                <p>Air China: https://www.airchina.com.cn/</p>
                <p>China Eastern Airlines: https://www.ceair.com/</p>
                <p>China Southern Airlines: https://www.csair.com/cn/</p>
                <h2 id='train'>Taking Trains</h2>
                <div className='word-wrapper'>
                    <p>
                        China's vast territory is complemented by a highly developed high-speed rail network, making train travel one of the most effective ways to explore the country. Foreign travelers can book train tickets through the Trip.com App or the official Railway 12306 app. Below is a detailed guide on how to book train tickets using these platforms, designed to help you navigate China's extensive railway system with ease.
                    </p>
                </div>
                <h3>Trip.com for Booking Trains via Trip.com App</h3>
                <p>
                    The Trip.com App allows travelers to book train tickets before they are officially released, providing convenience for those who plan ahead. Although the prices may be slightly higher due to booking fees, the app's user-friendly interface and multiple payment options make it an ideal choice for foreigners.
                </p>
                <p>
                    1. Open the Trip.com App and select "Trains."<br/>
                    - Launch the Trip.com App on your mobile device. Tap the "Trains" tab from the home screen to start searching for available train routes in China.
                </p>
                <img className="timg17" src={img17} alt="transport17" />
                <p>
                    2. Enter the departure and arrival locations.<br/>
                    - Use the search bar to input your departure city and destination. You can also select the travel date and (if needed) a specific time window. Tap "Search" to view available trains.
                </p>
                <img className="timg18" src={img18} alt="transport18" />
                <p>
                    3. Choose the train and ticket type.<br/>
                    - Review the list of available trains and select one that fits your schedule. After choosing a train, select your preferred seat class (e.g., second-class seat, soft sleeper) from the options provided.
                </p>
                <img className="timg19" src={img19} alt="transport19" />
                <p>
                    4. Enter passenger information.<br/>
                    - Input the passenger's detailed information, ensuring it matches the information on the passport, including full name and passport number. If purchasing tickets for multiple people, you can add the details for each passenger here.
                </p>
                <img className="timg20" src={img20} alt="transport20" />
                <p>
                    5. Review booking information and make payment.<br/>
                    - Carefully check all information, including the selected train, departure time, seat type, and passenger details, to ensure everything is correct. After reviewing, choose your payment method. Trip.com supports various options, including international credit/debit cards and PayPal. Confirm and make the payment to secure your ticket.
                </p>
                <img className="timg21" src={img21} alt="transport21" />
                <p>
                    6. Receive electronic ticket confirmation.<br/>
                    - After payment, you will receive an electronic ticket confirmation in the app. You can access this ticket under the "Bookings" tab and use the provided QR code to collect a physical ticket at the train station or directly scan it at the gate (if electronic tickets are supported).<br/>
                    Here is the translation of the section on booking trains through the Railway 12306 App:
                </p>
                <h3>Through the Railway 12306 App</h3>
                <div className='word-wrapper'>
                    <p>
                    The Railway 12306 is China's official train ticket booking application, with the advantage of no booking fees. However, the registration and verification process may be slightly complex. This app is suitable for travelers who are close to their departure date and wish to avoid additional charges.
                    </p>
                </div>
                <p>
                    1. Register a New Account<br/>
                    - Open the Railway 12306 App, go to the "My" section in the bottom menu, and then click "Register." Fill in your information, including your passport number, full name (as it appears on your passport), and email address. Follow the on-screen prompts to verify your email and complete your account setup.
                </p>
                <img className="timg22" src={img22} alt="transport22" />
                <p>
                    2. Complete Identity Verification<br/>
                    - After registration, go to "My," select "Identity Verification." Submit your passport details and follow further instructions, such as uploading a passport photo. Once the verification is complete, you will be able to book tickets.
                </p>
                <p>
                    3. Search for Trains<br/>
                    - After your account is set up, use the search bar to enter your departure city, destination, and travel date. Click "Search" to view all available trains on that route.
                </p>
                <img className="timg23" src={img23} alt="transport23" />
                <p>
                    4. Select the Train and Ticket Type<br/>
                    - Browse the available trains and select your preferred time and train type (e.g., high-speed train or regular train). Then, choose the seat or sleeper class (second-class seat, soft sleeper, etc.).
                </p>
                <img className="timg24" src={img24} alt="transport24" />
                <p>
                    5. Enter Passenger Information<br/>
                    - Input the required passenger information, including full name and passport details. If booking for multiple people, repeat this process to add each passenger.
                </p>
                <p>
                    6. Make Payment<br/>
                    - Similar to the process on Trip.com, carefully review the selected train, seat class, and passenger information before making payment. Choose your payment method, such as an international credit/debit card or PayPal, and then complete the purchase.
                </p>
                <p>
                    7. Collect Your Ticket<br/>
                    - After the purchase is completed, you will receive an electronic ticket confirmation. Use the electronic ticket to collect a physical ticket at the station, or directly scan the QR code to enter if your route supports electronic tickets.
                </p>
            </div>
            <ToTopButton/>
            <Footer/>
        </div>
    );
}
export default Transport;
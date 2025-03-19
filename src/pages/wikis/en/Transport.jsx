import '../styles/Transport.css';
import '../styles/Wiki.css';
import Footer from '../../../components/en/Footer';
import NavBarCustom from '../../../components/en/NavBarCustom';
import ToTopButton from '../../../components/ToTopButton';
import portalimg from '../../../assets/imgs/wikis/transport/wiki-img-transport-op.jpg';
import img1 from '../../../assets/imgs/wikis/transport/transport-wiki1.jpg';
import img2 from '../../../assets/imgs/wikis/transport/transport-wiki2.png';
import img3 from '../../../assets/imgs/wikis/transport/transport-wiki3.png';
import img4 from '../../../assets/imgs/wikis/transport/transport-wiki4.png';
import img5 from '../../../assets/imgs/wikis/transport/transport-wiki5.png';
import img6 from '../../../assets/imgs/wikis/transport/transport-wiki6.png';
import img7 from '../../../assets/imgs/wikis/transport/transport-wiki7.png';
import img8 from '../../../assets/imgs/wikis/transport/transport-wiki8.png';
import img9 from '../../../assets/imgs/wikis/transport/transport-wiki9.png';
import img10 from '../../../assets/imgs/wikis/transport/transport-wiki10.png';
import img11 from '../../../assets/imgs/wikis/transport/transport-wiki11.png';
import img12 from '../../../assets/imgs/wikis/transport/transport-wiki12.png';
import img13 from '../../../assets/imgs/wikis/transport/transport-wiki13.png';
import img14 from '../../../assets/imgs/wikis/transport/transport-wiki14.png';
import img15 from '../../../assets/imgs/wikis/transport/transport-wiki15.png';
import img16 from '../../../assets/imgs/wikis/transport/transport-wiki16.png';
import img17 from '../../../assets/imgs/wikis/transport/transport-wiki17.png';
import img18 from '../../../assets/imgs/wikis/transport/transport-wiki18.png';
import img19 from '../../../assets/imgs/wikis/transport/transport-wiki19.png';
import img20 from '../../../assets/imgs/wikis/transport/transport-wiki20.png';
import img21 from '../../../assets/imgs/wikis/transport/transport-wiki21.png';
import img22 from '../../../assets/imgs/wikis/transport/transport-wiki22.png';
import img23 from '../../../assets/imgs/wikis/transport/transport-wiki23.png';
import img24 from '../../../assets/imgs/wikis/transport/transport-wiki24.png';
import StaticPortalImg from '../../../components/StaticPortalImg';
import TableOfContents from '../../../components/TableOfContents';
import VerticalDisplayer from '../../../components/VerticalDisplayer';
import ImgDisplayCards from '../../../components/ImgDisplayCards';
import busImg from '../../../assets/imgs/wikis/transport/bus.png';
import subwayImg from '../../../assets/imgs/wikis/transport/Subway.png';
import StepByStepGuide from '../../../components/StepByStepGuide';
import SimpleDesc from '../../../components/SimpleDesc';

function Transport() {
    return (
        <div>
            <NavBarCustom title="Transport in China"/>
            <div className='world-x'>
                <StaticPortalImg img={portalimg} 
                    title='2025 Comprehensive Transportation Guide for China'
                    content="This guide provides you with key information for traveling within and between cities in China. For intra-city transportation, the subway system offers a fast, economical, and efficient mode of travel, while taxis provide additional convenience for longer journeys, albeit at a higher cost. For inter-city travel, China's extensive aviation and high-speed rail networks offer comfortable and efficient travel options, ensuring a smooth experience across the country."
                    textColor='white'
                    />
                    <TableOfContents
                        sections={[
                            {
                            title: { name: "Intra-city Travel", href: "#intra-city-travel" },
                            items: [
                                { name: "Using Navigation Apps", href: "#navigation-apps" },
                                { name: "Taking Buses and Subways", href: "#bus-subway" },
                                { name: "Taking Taxis", href: "#taxis" }
                            ]
                            },
                            {
                            title: { name: "Inter-city Travel", href: "#inter-city-travel" },
                            items: [
                                { name: "Flying", href: "#fly" },
                                { name: "Taking Trains", href: "#train" }
                            ]
                            }
                        ]}
                        />
                <StaticPortalImg
                    img={img1} 
                    id='intra-city-travel'
                    title='Intra-city travel'
                    content="When traveling within Chinese cities, using a reliable navigation app is crucial for efficient travel between neighborhoods. With a clear route plan, exploration becomes simple. Major cities have well-developed subway systems with bilingual signage, making them efficient and economical. Taxis offer additional convenience but are more expensive than public transportation. Below are detailed descriptions of various intra-city transportation options."
                    textColor='black'
                    />
                <VerticalDisplayer
                    id='navigation-apps'
                    containsImg={true}
                    title= "Using Navigation Apps"
                    subtitle="Suitable for users with basic Chinese Knowledge"
                    cards={
                        [
                            {
                                title: "Amap",
                                description: "Amap is one of China's most popular navigation apps, offering seamless navigation features. \n However, it only supports Chinese. If you can read or understand some Chinese, Amap is a good choice and is available on Android and iOS platforms.",
                                img:img2
                            },
                            {
                                title:"Apple map",
                                subtitle: "Suitable for iPhone users",
                                description: "Apple Maps is the preferred navigation app for iPhone users traveling in China. \nIt integrates local transportation and geographic data, providing navigation options for driving, walking, cycling, and public transit. \nUsers can enjoy real-time traffic updates and comprehensive route planning.",
                                img:img3
                            },
                            {
                                title: "Petal Maps",
                                subtitle: "Suitable for Android users",
                                description: "Due to restrictions on many Google services, including Google Maps, in China, Petal Maps is the recommended alternative.\n Although the installation process may be slightly complex, Petal Maps offers reliable navigation features such as real-time traffic updates and detailed maps, making it a practical tool for navigating Chinese cities.",
                                img: img4
                            }
                        ]
                    }
                />
                <StaticPortalImg
                    img={img5} 
                    id='bus-subway'
                    title='Taking Buses and Subways'
                    content="Major Chinese cities such as Beijing, Shanghai, and Chongqing have extensive subway systems that provide fast, convenient, and economical transportation options, with fares as low as 2 RMB. All subway stations have bilingual signs displaying station names and directions, facilitating navigation for non-Chinese speakers."
                    textColor='#c09747'
                    />
                <ImgDisplayCards
                    cardWidth={"550px"}
                    cardHeight={"240px"}
                    cards={[
                        {
                            title: "Buses",
                            description: "Local buses are the most economical transportation option in Chinese cities. \nHowever, since bus stop signs typically lack English translations, non-Chinese speakers may have difficulty determining when to disembark, making them less user-friendly.",
                            img: busImg
                        },
                        {
                            title: "Subways",
                            description: "Major Chinese cities such as Beijing, Shanghai, and Chongqing have extensive subway systems that provide fast, convenient, and economical transportation options, with fares as low as 2 RMB. \nAll subway stations have bilingual signs displaying station names and directions, facilitating navigation for non-Chinese speakers.",
                            img: subwayImg
                        }
                    ]}
                />
                <StepByStepGuide
                    title="Payment Methods for Bus and Subway Tickets"
                    subtitle="1. Alipay for Taking Buses and Subways"
                    steps = {
                        [
                            {
                                title: "Open Alipay and tap \"Transport\".",
                                description: "If you have set up a bus/subway card, you will automatically be redirected to step 3.",
                            },
                            {
                                title: "Set up a bus/subway card.",
                                description: "Tap \"Get Now,\" follow the instructions to register and activate your bus/subway card.",
                            },
                            {
                                title: "Use your bus/subway card.",
                                description: "Once set up, simply scan the QR code at the bus door or subway gate to board.",
                            }
                        ]
                    }
                    imgs={[[{img:img6}, {img:img7}, {img:img8}]]}
                />

                <StepByStepGuide
                    title="Payment Methods for Bus and Subway Tickets"
                    subtitle="2. WeChat for Taking Buses and Subways"
                    steps = {
                        [
                            {
                                title: "Scan the QR code.",
                                description: "If you have set up a bus/subway card, you can access it directly through the \"Ride Code\" mini-program and skip to step 3. If not, the app will guide you to step 2 for setup.",
                            },
                            {
                                title: "Set up a bus/subway card.",
                                description: "Tap \"Activate,\" and follow the on-screen instructions to activate the bus and subway QR code card.",
                            },
                            {
                                title: "Use your bus/subway card.",
                                description: "After activation, access the \"Ride Code\" mini-program through WeChat's search function or WeChat Pay. Once inside, simply scan the QR code at the bus or subway gate to board.",
                            }
                        ]
                    }
                    imgs={[[{img:img9}, {img:img10}, {img:img11}]]}
                />
                <SimpleDesc 
                    width="60%"
                    paragraph="You can also purchase single-use subway tickets using Alipay, WeChat Pay, or cash at the station's ticket vending machines. These machines usually offer English options, and you will receive a single-use ticket that must be returned at the exit gate."
                />

                <StaticPortalImg
                    img={portalimg}
                    id='taxis'
                    title='Taking Taxis'
                    content='In Chinese cities, using ride-hailing services like Didi is the most convenient and safe way to travel, similar to Uber, and can be accessed through Alipay and WeChat. Ride-hailing services are typically 20-30% cheaper than regular taxis. Licensed taxis are also a reliable option, albeit slightly more expensive. It is recommended to avoid unlicensed private cars, as they may be unreliable and unsafe.
                    \n You can access Didi through mini-programs in Alipay or WeChat, with interfaces fully supported in English. Here is a step-by-step guide on how to use Didi through these platforms.'
                    textColor='white'
                />

                <StepByStepGuide
                    title="Alipay for Taking Taxis"
                    steps = {
                        [
                            {
                                title: "Open Alipay and tap \"DiDi Travel.\"",
                                description: "Launch the Alipay app, then select \"DiDi Travel\" from the service menu or search within the app.",
                            },
                            {
                                title: "Enter the pickup and destination.",
                                description: "Input your current location and destination in the respective fields.",
                            },
                            {
                                title: "Choose the car type and confirm.",
                                description: "Select the car type that suits your needs (e.g., economy, luxury), and tap \"Confirm\" to complete the booking.",
                            }
                        ]
                    }
                    imgs={[[{img:img12}, {img:img13}, {img:img14}]]}
                />

                <StepByStepGuide
                    title="WeChat for Taking Taxis"
                    steps = {
                        [
                            {
                                title: "Open WeChat and access the Didi mini-program.",
                                description: "Go to the \"Me\"section, tap \"Payments and Services,\" and then select \"DiDi\" under the transportation options to access the mini-program. Alternatively, you can directly search for \"DiDi\" using the search bar at the top of the WeChat home screen.",
                            },
                            {
                                title: "Follow the steps for Alipay.",
                                description: "Once you access the Didi mini-program through WeChat, the process of entering the pickup and destination, selecting the car type, and confirming the trip is the same as described for Alipay.",
                            },
                        ]
                    }
                    imgs={[[{img:img15}]]}
                />

                <StaticPortalImg
                    img={img16}
                    id='inter-city-travel'
                    title='Inter-city Travel'
                    content="For travel between multiple cities, utilizing China's extensive aviation and high-speed rail networks is the most comfortable, safe, and efficient way to travel. These transportation options ensure a smooth and enjoyable journey across the country."
                    textColor='white'
                />

                <StaticPortalImg
                    img={portalimg}
                    id='fly'
                    title='Flying'
                    content="For foreigners, the most effective way to purchase plane tickets in China is directly through the airlines' official websites. These websites offer multilingual support, which helps avoid common booking issues. Below are the official websites and customer service contact numbers for China's three major airlines.\n
                        Air China: https://www.airchina.com.cn/\n
                        China Eastern Airlines: https://www.ceair.com/\n
                        China Southern Airlines: https://www.csair.com/cn/
                        "
                    textColor='white'
                />

                <StaticPortalImg
                    img={portalimg}
                    id='train'
                    title='Taking Trains'
                    content="China's vast territory is complemented by a highly developed high-speed rail network, making train travel one of the most effective ways to explore the country. Foreign travelers can book train tickets through the Trip.com App or the official Railway 12306 app. Below is a detailed guide on how to book train tickets using these platforms, designed to help you navigate China's extensive railway system with ease.
                        "
                    textColor='white'
                />

                <StepByStepGuide
                    title="Trip.com for Booking Trains via Trip.com App"
                    steps = {
                        [
                            {
                                title: "Open the Trip.com App and select \"Trains.\"",
                                description: "Launch the Trip.com App on your mobile device. Tap the \"Trains\" tab from the home screen to start searching for available train routes in China.",
                            },
                            {
                                title: "Enter the departure and arrival locations.",
                                description: "Use the search bar to input your departure city and destination. You can also select the travel date and (if needed) a specific time window. Tap \"Search\" to view available trains.",
                            },
                            {
                                title: "Choose the train and ticket type.",
                                description: "Review the list of available trains and select one that fits your schedule. After choosing a train, select your preferred seat class (e.g., second-class seat, soft sleeper) from the options provided.",
                            },
                            {
                                title: "Enter passenger information.",
                                description: "Input the passenger's detailed information, ensuring it matches the information on the passport, including full name and passport number. If purchasing tickets for multiple people, you can add the details for each passenger here.",
                            },
                            {
                                title: "Review booking information and make payment.",
                                description: "Carefully check all information, including the selected train, departure time, seat type, and passenger details, to ensure everything is correct. After reviewing, choose your payment method. Trip.com supports various options, including international credit/debit cards and PayPal. Confirm and make the payment to secure your ticket.",
                            },
                            {
                                title: "Receive electronic ticket confirmation.",
                                description: "After payment, you will receive an electronic ticket confirmation in the app. You can access this ticket under the \"Bookings\" tab and use the provided QR code to collect a physical ticket at the train station or directly scan it at the gate (if electronic tickets are supported)."
                            }
                        ]
                    }
                    imgs={[
                        [{img:img17}, {img:img18}, {img:img19}], [{img:img20}, {img:img21}]
                    ]}
                />

                <StepByStepGuide
                    title="Through the Railway 12306 App"
                    steps = {
                        [
                            {
                                title: "Register a New Account",
                                description: "Open the Railway 12306 App, go to the \"My\" section in the bottom menu, and then click \"Register.\" Fill in your information, including your passport number, full name (as it appears on your passport), and email address. Follow the on-screen prompts to verify your email and complete your account setup.",
                            },
                            {
                                title: "Complete Identity Verification",
                                description: "After registration, go to \"My,\" select \"Identity Verification.\" Submit your passport details and follow further instructions, such as uploading a passport photo. Once the verification is complete, you will be able to book tickets.",
                            },
                            {
                                title: "Search for Trains",
                                description: "After your account is set up, use the search bar to enter your departure city, destination, and travel date. Click \"Search\" to view all available trains on that route.",
                            },
                            {
                                title: "Select the Train and Ticket Type",
                                description: "Browse the available trains and select your preferred time and train type (e.g., high-speed train or regular train). Then, choose the seat or sleeper class (second-class seat, soft sleeper, etc.).",
                            },
                            {
                                title: "Enter Passenger Information",
                                description: "Input the required passenger information, including full name and passport details. If booking for multiple people, repeat this process to add each passenger.",
                            },
                            {
                                title: "Make Payment",
                                description: "Similar to the process on Trip.com, carefully review the selected train, seat class, and passenger information before making payment. Choose your payment method, such as an international credit/debit card or PayPal, and then complete the purchase."
                            },
                            {
                                title: "Collect Your Ticket",
                                description:"After the purchase is completed, you will receive an electronic ticket confirmation. Use the electronic ticket to collect a physical ticket at the station, or directly scan the QR code to enter if your route supports electronic tickets."
                            }
                        ]
                    }
                    imgs={[
                        [{img:img22}, {img:img23}, {img:img24}]
                    ]}
                />
            </div>
            <ToTopButton/>
            <Footer/>
        </div>
    );
}
export default Transport;
import Footer from '../../../components/en/Footer';
import NavBarCustom from '../../../components/en/NavBarCustom';
import StaticPortalImg from '../../../components/StaticPortalImg';
import portalimg from '../../../assets/imgs/wikis/transport/wiki-img-transport-op.jpg';
import '../styles/Wiki.css';
import TableOfContents from '../../../components/TableOfContents';
import VerticalDisplayer from '../../../components/VerticalDisplayer';
import ToTopButton from '../../../components/ToTopButton';
function InternetConnect() {
    return (
        <div>
            <NavBarCustom title="Internet Connectivity in China"/>
            <div className='world-x'>
                <StaticPortalImg
                    img={portalimg}
                    title="Internet Connectivity in China"
                    content="Staying connected while traveling is crucial. Our 2024 Ultimate Guide to Internet Connectivity in China provides you with reliable and efficient access information. From activating international roaming to choosing the best eSIM or purchasing a local SIM card, we cover all available options to keep you online. Additionally, our top recommendations highlight the most convenient and cost-effective solutions to meet your travel needs, ensuring you can navigate, pay, and book with ease during your trip in China."
                    textColor="white"
                />
                <TableOfContents
                    sections={[{
                        title:{},
                        items: [
                            { name: "Activating International Roaming", href: "#activate"},
                            { name: "How to Get an eSIM in China", href: "#sim"},
                            { name: "Purchasing a Local SIM Card in China", href: "#purchase-sim"},
                            { name: "Our Recommendations", href: "#recommendation"}]
                    }]}
                />
                <VerticalDisplayer
                    id='activate'
                    containsImg={false}
                    title = "Activating International Roaming"
                    subtitle = "Activating international roaming on your mobile device is a convenient way to stay connected during your trip in China."
                    cards={
                        [
                            {
                                title: "How to Activate",
                                description: "Contact your mobile service provider before traveling to enable international roaming. Ensure your plan covers China and confirm the applicable charges to avoid unexpected expenses."
                            },
                            {
                                title: "Advantages",
                                description: "Immediate connectivity upon arrival, without the need to change SIM cards or search for Wi-Fi. This option is perfect for navigation, quick online access, and staying in touch with family."
                            },
                            {
                                title: "Disadvantages",
                                description: "- Cost: International roaming can become expensive due to high data charges, with costs accumulating quickly.\n\n - Coverage Issues: While major cities offer strong network coverage, connections may be unstable in rural areas."
                            }
                        ]
                    }
                />
                <StaticPortalImg
                    img={portalimg}
                    id="sim"
                    title="How to Get an eSIM in China"
                    content="Using an eSIM in China is a hassle-free way to connect without a physical SIM card. The setup is very simple and can be completed before your trip.\nGetting an eSIM is straightforward; you can complete the process online through reliable providers such as Nomad, Airalo, and Simoptions. These providers offer a variety of eSIM plans to suit different data needs and durations."
                    textColor="white"
                />
                <VerticalDisplayer
                    containsImg={false}
                    title="How to Obtain an eSIM"
                    cards= {
                        [
                            {
                                title: "Advantages",
                                description: "- Convenience: Set up your eSIM at home and stay connected immediately upon arrival in China.\n\n- Access: Enjoy unrestricted access to foreign websites without the need for a VPN.\n- Cost: Generally more affordable than purchasing a short-term Chinese SIM card."
                            },
                            {
                                title: "Disadvantages",
                                description: "- Limited Functionality: eSIMs typically only provide data services, meaning you cannot use phone or text functions.\n\n- Compatibility: Not all smartphones support eSIMs, especially older models, so check compatibility before purchasing."
                            }
                        ]
                    }
                />
                <StaticPortalImg
                    img={portalimg}
                    id="purchase-sim"
                    title="Purchasing a Local SIM Card in China"
                    content="Buying a local SIM card in China is one of the simplest ways to stay connected. It provides mobile data and a local phone number, which is crucial for making and receiving calls."
                    textColor="white"
                />
                <VerticalDisplayer
                    id="purchase-sim"
                    containsImg={false}
                    title= "Purchase a Local SIM Card"
                    cards={
                        [
                            {
                                title: "How to Purchase",
                                description: "You can easily buy a local SIM card at most major airports in China (including Beijing and Shanghai). Airport staff will assist you with the purchase and setup, ensuring a smooth process."
                            },
                            {
                                title: "Advantages",
                                description: "- Local Number: Obtain a Chinese phone number for making and receiving calls.\n\n- Instant Connectivity: Stay connected immediately upon arrival without searching for Wi-Fi."
                            },
                            {
                                title: "Disadvantages",
                                description: "- Cost: Typically priced between ¥200-300, which may be higher than eSIM options.\n\n- Network Restrictions: Chinese SIM cards may have restrictions, such as limited access to foreign websites."
                            }
                        ]
                    }
                />
                <h3>Below are the main plans offered by Chinese operators, with details subject to change and should be confirmed at the time of purchase.</h3>
                <p>place holder for excel image</p>
                <VerticalDisplayer
                    containsImg={false}
                    title="Our Recommendations"
                    subtitle="Based on your travel needs, here are our top recommendations for staying connected in China:"
                    id="recommendation"
                    cards={
                        [
                            {
                                title: "International Roaming",
                                description: "Best for short-term stays and travelers who do not plan to extensively use local internet services. \n\nThis option allows you to stay connected without changing SIM cards, but it is more expensive and may have coverage issues in rural areas."
                            },
                            {
                                title: "eSIM",
                                description: "Ideal for those seeking a cost-effective and unrestricted internet access for longer stays. \n\nHowever, eSIMs typically only provide data services, limiting the use of local services that require phone or text functions."
                            },
                            {
                                title: "Local SIM Card",
                                description: "Recommended if you prioritize the fastest and most stable connection and full access to local internet services.\n\n This option may have some restrictions on accessing foreign websites, but it offers a local phone number and comprehensive network access."
                            }
                        ]
                    }
                />
            </div>
            <ToTopButton/>
            <Footer/>
        </div>
    );
}

export default InternetConnect;
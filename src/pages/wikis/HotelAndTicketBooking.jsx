import Footer from '../../components/Footer';
import NavBarCustom from '../../components/NavBarCustom';
import StaticPortalImg from '../../components/StaticPortalImg';
import portalimg from '../../assets/imgs/wikis/transport/wiki-img-transport-op.jpg';
import './Wiki.css';
import TableOfContents from '../../components/TableOfContents';
import StepByStepGuide from '../../components/StepByStepGuide';
import img1 from '../../assets/imgs/wikis/hotel-n-ticket-booking/img1.png';
import img2 from '../../assets/imgs/wikis/hotel-n-ticket-booking/img2.png';
import img3 from '../../assets/imgs/wikis/hotel-n-ticket-booking/img3.png';
import img4 from '../../assets/imgs/wikis/hotel-n-ticket-booking/img4.png';
// import img5 from '../../assets/imgs/wikis/hotel-n-ticket-booking/img5.png';
import img6 from '../../assets/imgs/wikis/hotel-n-ticket-booking/img6.png';
import img7 from '../../assets/imgs/wikis/hotel-n-ticket-booking/img7.png';
import img8 from '../../assets/imgs/wikis/hotel-n-ticket-booking/img8.png';
import img9 from '../../assets/imgs/wikis/hotel-n-ticket-booking/img9.png';
import img10 from '../../assets/imgs/wikis/hotel-n-ticket-booking/img10.png';
import ToTopButton from '../../components/ToTopButton';
function HotelAndTicketBooking() {
    return (
        <div>
            <NavBarCustom title="Comprehensive Guide to Hotel and Ticket Booking"/>
            <div className='world-x'>
                <StaticPortalImg
                    img={portalimg}
                    title="Comprehensive Guide to Hotel and Ticket Booking"
                    content="The Trip.com App provides an efficient and user-friendly platform for booking hotels and attraction tickets in China. With competitive prices, reliable service, and multilingual support, the Trip.com App caters to the needs of international travelers by offering a variety of payment options, including international credit cards. Its simplified booking process and robust customer support make Trip.com the top choice for worry-free travel planning in China."
                    textColor="white"
                />
                <TableOfContents
                    sections={[
                        {
                            title:{},
                            items: [
                            { name: "How to Book Hotels", href:"#hotel" },
                            { name: "How to Book Attraction Tickets", href: "#ticket" }
                        ]}
                    ]}
                />
                <StaticPortalImg img={portalimg} 
                    id='hotel'
                    title='How to Book Hotels'
                    content="Using the Trip.com App to book hotels in China is especially advantageous for international travelers. The app not only simplifies the booking process but also helps you identify hotels that are eligible to host foreign guests, which is a necessary condition in China. The 'Hotel Policy' section of Trip.com clearly indicates whether a hotel can accommodate international travelers. If additional confirmation is needed, you can contact their customer service at any time. This ensures a smooth and worry-free booking process. For a step-by-step guide on how to use this app, please continue reading."
                    textColor='white'
                />
                <StepByStepGuide
                    Title="Book Hotels"
                    steps={[
                        {
                            title: "search for hotels",
                            description: "To search for hotels on the Trip.com App, simply click on the \"Hotels\" option on the home page, enter your destination city, select your check-in and check-out dates, and specify the number of rooms and guests. Then click \"Search\" to view available options."
                        },
                        {
                            title: "View Hotel Details and Select a Room",
                            description: "Find the perfect hotel by filtering search results based on conditions such as price, star rating, and facilities. Sort the results by relevance or guest ratings to narrow down your choices. Once you've selected a hotel, review the details and policies to ensure it meets your needs, especially if you are an international traveler. Finally, click \"Book\" to proceed to the next step."
                        },
                        {
                            title: "3.Confirm Guest Information and Make Payment ",
                            description: "After selecting a room, enter the guest details, including names and contact information, ensuring that all information for each guest is accurate (if booking for multiple people). Click \"Book,\" then choose your preferred payment method from the various options available, review the total price including taxes, and make the payment."
                        },
                        {
                            title: "4.Complete the Booking ",
                            description: "After payment, you will receive a booking confirmation in the app as well as via email. The app will display your booking details, including the hotel address, check-in instructions, and customer service contact information."
                        }
                    ]}
                    imgs={[[{img: img1}, {img: img2}], [{img: img3}, {img: img4}]]}
                />
                <StaticPortalImg
                    img={portalimg}
                    id='ticket'
                    title="How to Book Attraction Tickets"
                    content="Booking attraction tickets in China using the Trip.com App is fast and convenient, allowing you to book tickets in advance, which is especially helpful for popular attractions with daily limits. For a step-by-step guide on how to use the app, please continue reading."
                    textColor="white"
                />
                <StepByStepGuide
                    title="Book Attraction Tickets"
                    steps={[
                        {
                            title: "Search for Attractions of Interest ",
                            description: "To search for attractions on the Trip.com App, simply click on the \"Attractions & Tours\" tab on the home page. Then, you can search for specific attractions by name, or browse by category or city to find items that interest you.",
                        },
                        {
                            title: "Select Tickets ",
                            description: "Once you've chosen an attraction, click to view the details, including available ticket types, prices, and any special notes or restrictions. Then select the tickets you need and click \"Next\" to proceed."
                        },
                        {
                            title: "Choose the Usage Date",
                            description: "Select the date and time of your visit, then click \"Next\" to continue."
                        },
                        {
                            title: "Enter Visitor Information and Confirm Booking ",
                            description: "Fill in the required visitor and contact information. Ensure all details are accurate to avoid any issues during your visit. Then, review your booking details, including the selected date, time, and ticket type. Click \"Pay\" and choose your preferred payment method to complete the booking."
                        },
                        {
                            title: "Complete the Booking ",
                            description: "After payment, you will receive a confirmation email or message along with the e-ticket. You can also view your tickets in the \"My Bookings\" section of the app."
                        }
                    ]}
                    imgs={[[{img: img6}, {img: img7}], [{img: img8}, {img: img9}, {img: img10}]]}
                />
            </div>
            <ToTopButton/>
            <Footer/>
        </div>
    );
}

export default HotelAndTicketBooking;
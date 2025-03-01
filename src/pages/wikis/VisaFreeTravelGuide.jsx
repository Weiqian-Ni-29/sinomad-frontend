import Footer from '../../components/Footer';
import NavBarCustom from '../../components/NavBarCustom';
import StaticPortalImg from '../../components/StaticPortalImg';
import portalimg from '../../assets/imgs/wikis/transport/wiki-img-transport-op.jpg';
import './Wiki.css';
import TableOfContents from '../../components/TableOfContents';
import StepByStepGuide from '../../components/StepByStepGuide';
import VerticalDisplayer from '../../components/VerticalDisplayer';
import ToTopButton from '../../components/ToTopButton';
import SimpleDesc from '../../components/SimpleDesc';
import FAQ from '../../components/FAQ';
function VisaFreeTravelGuide() {
    return(
        <div>
            <NavBarCustom title="2024 China Visa-Free Travel Guide"/>
            <div className='world-x'>
                <StaticPortalImg
                    img={portalimg}
                    title="2024 China Visa-Free Travel Guide"
                    content="Welcome, travelers! Whether you're planning a short trip or enjoying a pleasant stopover in China, you've come to the right place. Our China Visa-Free Travel Guide is designed specifically for passport holders seeking hassle-free entry into China. Explore various visa-free options, learn how China simplifies its entry policies, and embark on your adventure without the need for a visa. With our detailed insights and practical tips, ensure a smooth and enjoyable journey through China."
                    textColor="white"
                />
                <TableOfContents
                    sections={[
                        {
                            title:  { name: "China's Visa-Free Policy", href: "#visa-policy" },
                            items: [
                                { name: "Visa-Free Countries", href: "#countries" },
                                { name: "Entry Process", href: "#entry-process" }
                            ]
                        },
                        {
                            title:  { name: "China's Transit Visa-Free Policy", href: "#transit-policy" },
                            items: [
                                { name: "Documents Required for Transit", href: "#documents" },
                                { name: "Transit Visa-Free Entry Process", href: "#trans-process" },
                                { name: " Important Notes During Transit", href: "#trans-note" },
                                { name: "Transit Departure Process", href: "#departure-process" }
                            ]
                        }
                    ]}
                />
                <StaticPortalImg
                    img={portalimg}
                    id="visa-policy"
                    title= "China's Visa-Free Policy"
                    content="China's visa-free policy allows travelers from specific countries to enter China without a visa for a short period. These policies aim to simplify the entry process for tourists, business visitors, and others, promoting more travel and cooperation."
                    textColor="white"
                />
                <VerticalDisplayer
                    id="countries"
                    containsImg={false}
                    title="Visa-Free Countries"
                    subtitle="Holders of ordinary passports from the following countries can enter China visa-free for no more than the specified visa-free period."
                    cards={
                        [
                            {
                                title: "90 days visa-free",
                                description: "Albania, Armenia, Bosnia and Herzegovina, San Marino"
                            },
                            {
                                title: "60 days visa-free",
                                description: "Mauritius"
                            },
                            {
                                title: "30 days visa-free(long-term policy)",
                                description: "Thailand, Singapore, Maldives, Kazakhstan, Antigua and Barbuda, United Arab Emirates, Barbados, Bahamas, Belarus, Dominica, Ecuador, Fiji, Grenada, Qatar, Serbia, Seychelles, Suriname, Tonga, Georgia, Brunei, Mongolia"
                            },
                            {
                                title: "30 days visa-free(valid till 2025/12/31)",
                                description: "France, Germany, Italy, Netherlands, Spain, Malaysia, Switzerland, Ireland, Hungary, Austria, Belgium, Luxembourg, Australia, New Zealand, Poland, Portugal, Greece, Cyprus, Slovenia, Slovakia, Norway, Finland, Denmark, Iceland, Andorra, Monaco, Liechtenstein, South Korea, Bulgaria, Romania, Malta, Croatia, Montenegro, North Macedonia, Estonia, Latvia, Japan"
                            }
                        ]
                    }
                />
                <StepByStepGuide
                    id='entry-process'
                    steps={
                        [
                            {
                                title: "Fill Out the Entry Card",
                                description: "Upon arrival at the airport, obtain and complete the entry card, providing personal information such as name, passport number, flight details, purpose of visit, and address of residence. Ensure to select the visa-free option."
                            },
                            {
                                title: "Fingerprint Collection",
                                description: "Use the self-service machine to submit your fingerprints and print a receipt. If you have previously submitted fingerprints, you only need to print the receipt."
                            },
                            {
                                title: "Customs Clearance",
                                description: "Hand over your passport and completed entry card to the customs officer. Answer any questions and confirm your duration of stay in China."
                            },
                            {
                                title: "Collect Luggage",
                                description: "After clearing customs, follow the signs to the baggage claim area to collect your luggage, completing the entry process."
                            }
                        ]
                    }
                    imgs={[]}
                />
                <StaticPortalImg
                    id='transit-policy'
                    img={portalimg}
                    title="China's Transit Visa-Free Policy"
                    content="China offers a visa-free transit policy for qualified travelers from specific countries, allowing a stay of up to 240 hours (10 days) while en route to a third country or region. With the expansion of the visa-free policy, travelers can now enter through 60 open ports in 24 provinces, providing a great opportunity for short-term visitors to explore China without a visa."
                    textColor="white"
                />
                <h3 style={{textAlign: "center"}}>Countries Eligible for the 240-Hour Visa-Free Transit Policy</h3>
                <SimpleDesc
                    width="60%"
                    paragraph="Albania, Argentina, Australia, Austria, Belarus, Belgium, Bosnia and Herzegovina, Brazil, Brunei, Bulgaria, Canada, Chile, Croatia, Cyprus, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Iceland, Ireland, Italy, Japan, Latvia, Lithuania, Luxembourg, Malta, Mexico, Monaco, Montenegro, Netherlands, New Zealand, North Macedonia, Norway, Poland, Portugal, Qatar, South Korea, Romania, Russia, Serbia, Singapore, Slovakia, Slovenia, Spain, Sweden, Switzerland, Ukraine, United Arab Emirates, United Kingdom, United States."
                />
                <StaticPortalImg
                    id='documents'
                    img={portalimg}
                    title="Documents Required for Transit"
                    content="- A valid passport issued by one of the 54 eligible countries.\n - A visa for the third country or region.\n - A confirmed onward ticket with date and seat information for travel to the third country or region within the specified time."
                    textColor="white"
                />
                <StepByStepGuide
                    id='trans-process'
                    title="Transit Visa-Free Entry Process"
                    steps={
                        [
                            {
                                title: "",
                                description: "Upon arrival, fill out the entry information card, providing personal details, purpose of visit, and duration of stay."
                            },
                            {
                                title: "",
                                description: "Submit your passport, entry card, and confirmed onward ticket to the immigration authorities."
                            },
                            {
                                title: "",
                                description: "Answer the border inspection personnel's questions truthfully. They will review your application and decide whether to grant temporary entry permission."
                            },
                            {
                                title: "",
                                description: "After approval, you will receive temporary entry permission, and your passport will be stamped with an entry stamp and the duration of stay indicated."
                            }
                        ]
                    }
                    imgs={[]}
                />
                <VerticalDisplayer
                    id='trans-note'
                    containsImg={false}
                    title="Important Notes During Transit"
                    cards={
                        [
                            {
                                title: "",
                                description: "Do not exceed the maximum duration of stay. If you need to extend your stay due to force majeure or other reasons, you should apply for the corresponding stay documents at the local public security bureau's exit and entry administration department at the county level or above."
                            },
                            {
                                title: "",
                                description: "If staying in a hotel, the hotel will handle the accommodation registration; \nif staying in a residence or accommodation other than a hotel, you or the person providing the accommodation must register with the local public security bureau's police station or foreigner service station within 24 hours of arrival."
                            },
                            {
                                title: "",
                                description: "Do not exceed the specified stay area without permission. If you exceed the restricted stay area or overstay without permission, you will bear the corresponding legal responsibility and may affect the application for visas or other entry and exit documents in the future."
                            }
                        ]
                    }
                />
                <StepByStepGuide
                    id='departure-process'
                    title="Transit Departure Process"
                    steps = {
                        [
                            {
                                title: "",
                                description: "Prepare your passport, temporary entry permission obtained upon entry, and other relevant materials."
                            },
                            {
                                title: "",
                                description: "Leave through the designated port within the specified time."
                            },
                            {
                                title: "",
                                description: "Undergo questioning and inspection by the border inspection personnel upon departure and return the temporary entry permission and other relevant materials."
                            },
                            {
                                title: "",
                                description: "After the border inspection personnel verify everything is correct, complete the departure procedures and leave China."
                            }
                        ]
                    }
                    imgs={[]}
                />
                <FAQ
                    faqs={
                        [
                            {
                                query: "Do foreigners need to register with the Chinese embassy or consulate before departure under the visa-free policy?",
                                answer: "No, foreigners who meet the conditions do not need to register with the Chinese embassy or consulate before departure under the visa-free policy."
                            },
                            {
                                query: "Will Chinese border authorities check my purpose of visit? Besides a passport, do I need to carry other documents to enter China?",
                                answer: "Yes, Chinese border authorities will check your purpose of visit. A passport is essential, and it is recommended to carry supporting documents such as an invitation letter, flight tickets, and hotel reservations to ensure a smooth entry process. Please note that individuals working, studying, or engaging in journalistic activities do not qualify for visa-free entry."
                            },
                            {
                                query: "Are there any special requirements for minors entering China under the visa-free policy?",
                                answer: "Minors must meet the same conditions as adults to enter China under the visa-free policy. Ensure they have a valid passport and the required supporting documents."
                            },
                            {
                                query: "What are the requirements for the type and validity of travel documents?",
                                answer: "Travelers must hold a valid ordinary passport with at least six months of validity from the date of entry. Make sure your passport has enough blank pages for entry stamps and other necessary records."
                            },
                            {
                                query: "How is the 15-day stay period calculated?",
                                answer: "The 15-day stay period starts from the day you enter China and ends at midnight on the 15th calendar day."
                            },
                            {
                                query: "Can I depart from a country other than my own under the visa-free policy?",
                                answer: "Yes, travelers who meet the requirements can depart from any country or region outside of China under the visa-free policy."
                            },
                            {
                                query: "Does the visa-free policy apply to all modes of entry, including land, sea, and air?",
                                answer: "Yes, the visa-free policy applies to all entry points via land, sea, and air, unless otherwise stipulated by Chinese laws, regulations, or bilateral agreements."
                            },
                            {
                                query: "Can tour groups enter China under the visa-free policy?",
                                answer: "Yes, both individuals and tour group members can enter China visa-free as long as they meet the necessary conditions."
                            },
                            {
                                query: "Can I extend my stay if I exceed the visa-free period?",
                                answer: "No, you cannot extend your visa-free stay. If you need to stay longer, you must apply for the appropriate visa at a Chinese embassy or consulate before your current stay expires."
                            },
                            {
                                query: "Does the visa-free policy allow for multiple entries? Are there any restrictions on the number of entries or total duration of stay?",
                                answer: "Yes, travelers who meet the conditions can enter China multiple times under the visa-free policy. Currently, there are no restrictions on the number of entries or total duration of stay, but you must adhere to the purpose of your visit and not engage in activities that violate the visa-free regulations."
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
export default VisaFreeTravelGuide;
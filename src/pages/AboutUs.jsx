import NavBarCustom from "../components/NavBarCustom";
import "./AboutUs.css";
import banner from '../assets/imgs/intro-banner.jpg';
function AboutUs() {
  return (
    <section id="aboutus" className="about-us">
      <div>
        <NavBarCustom title='About US'/>
        <img src={banner} alt="banner" style={{width: '100%', height: '450px', margin: 0, padding: 0, display:'block'}}/>
        <div style={{backgroundColor:'bisque'}}>
          <div className="aboutus-intro">
            <h3>
              WHO ARE WE?
            </h3>
            <p>
              Hi there! Welcome to SiNomad, a spirited young soul nurtured by an experienced Chinese travel agency. <br/>
              Our team is a powerhouse of talent, with members who are not only top graduates from QS top 50 universities but also seasoned professionals with global exposure. Our travels have taken us across different continents and into the heart of dozens of countries, granting us a deep understanding of both Eastern and Western cultures. This unique perspective allows us to create truly immersive and enriching travel experiences for you.
            </p>
            <h3>WAHT MAKES OUR APPROACH TO TRAVEL UNIQUE?</h3>
            <p>
              We believe that travel should be as free and exploratory as a nomad. Here, we're not just your guides; we're your partners on a quest to make memories during your stay in China with our locally-vetted, expertly-curated experiences. <br/>
              We focus on delivering immersive experiences into the Chinese culture, providing genuine encounters that transcend mere sightseeing, allowing you to truly connect with the soul of China's rich heritage.
            </p>
            <h3>LET'S GET STARTED!</h3>
            <p>
              Join us as we unveil the mysteries of China, leaving your mark and memories on this ancient yet vibrant land.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
}
export default AboutUs;

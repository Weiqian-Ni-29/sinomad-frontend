import NavBarCustom from "../components/NavBarCustom";
import "./AboutUs.css";
// import teen1 from "../assets/imgs/teen1.webp";
// import teen2 from "../assets/imgs/teen2.webp";
// import teen3 from "../assets/imgs/teen3.webp";
// import teen4 from "../assets/imgs/teen4.webp";
function AboutUs() {
  return (
    <section id="aboutus" className="about-us">
      <div>
        <NavBarCustom title='About US'/>
        <div className="aboutus-intro">
          <p>
            Hi there! Welcome to SiNomad, a spirited young soul nurtured by an
            experienced Chinese travel agency.{" "}
          </p>
          <p>
            Our team is a powerhouse of talent, with members who are not only top
            graduates from QS top 50 universities but also seasoned professionals
            with global exposure. Our travels have taken us across different
            continents and into the heart of dozens of countries, granting us a
            deep understanding of both Eastern and Western cultures. This unique
            perspective allows us to create truly immersive and enriching travel
            experiences for you.
          </p>
          <p>
            We believe that travel should be as free and exploratory as a nomad.
            Here, we're not just your guides; we're your partners on a quest to
            experience the depth of Chinese culture.
          </p>
          <p>
            At SiNomad, we're dedicated to transforming every journey into a
            cultural feast, taking you through the corridors of history and the
            heartbeat of modernity. With each departure, we embark on a new
            adventure, and with each return, we harvest stories to cherish.
          </p>
          <p>
            Join us as we unveil the mysteries of China, leaving your mark and
            memories on this ancient yet vibrant land.
          </p>
        </div>
      </div>
    </section>
  );
}
export default AboutUs;

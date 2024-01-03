import SectionTitle from "./SectionTitle";

const About = ({ minHeight }) => {
  return (
    <section
      className="about wrapper"
      style={minHeight ? { minHeight: "100vh" } : null}
    >
      <SectionTitle title="About" />
      <p>
      Welcome to the blazing epicenter of creativity and innovation – Pyrokinesis, the annual techno-cultural fest of Assam Engineering College!  <br/>Get ready to embark on a scorching journey where technology meets culture, and sparks of brilliance ignite the atmosphere. <br/>
      Get ready to unravel the mystical tapestry of technology and culture as Pyrokinesis, the annual techno-cultural fest of Assam Engineering College, presents its theme for this year – "Enchanto Enigma." 
      </p>
      <p>
      Step into a realm where the ordinary transforms into the extraordinary, where every challenge is a puzzle waiting to be solved, and where innovation is shrouded in an air of enchantment.
      </p>
    </section>
  );
};

export default About;

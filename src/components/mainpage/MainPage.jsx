import Footer from "../common/footer/Footer.jsx";
import Experiences from "../experiences/Experiences.jsx";
import Projects from "../projects/Projects.jsx";

import Skills from "./skills/Skills.jsx";
import Welcome from "./welcome/Welcome.jsx";

const MainPage = () => {
  return (
    <>
      <Welcome />
      <Skills />
      <Experiences />
      <Projects />
      <Footer />
    </>
  );
};
export default MainPage;

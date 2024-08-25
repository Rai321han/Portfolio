import Footer from "./components/Footer";
import HeaderMarquee from "./components/HeaderMarquee";
import Intro from "./components/Intro";
import Resume from "./components/Resume";
import Social from "./components/Social";
import Tech from "./components/Tech";
import "./App.css";
import Location from "./components/Location";
import Education from "./components/Education";
import ProjectIntro from "./components/ProjectIntro";
import MyProjects from "./components/MyProjects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-[1450px] text-textColor text-xl md:gap-3 lg:gap-4  grid grid-cols-12 md:grid-cols-10 gap-2  grid-rows-[repeat(13,_auto)] md:grid-rows-[repeat(13,auto)]">
        <HeaderMarquee />
        <Intro />
        <Resume />
        <Tech />
        <Social />
        <Location />
        <Education />
        <ProjectIntro />
        <MyProjects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;

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
// import MyProjects from "./components/MyProjects";
import Contact from "./components/Contact";
import { ExpandableCard } from "./components/ProjectsCard/ExpandableCard";

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
        <div className="flex flex-col col-[1/14] gap-2 md:gap-3 md:col-[1/11] row-[10/11] md:row-[8/9]">
          {/* <MyProjects /> */}
          <ExpandableCard />
        </div>
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;

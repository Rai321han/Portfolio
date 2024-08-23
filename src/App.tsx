import Footer from "./components/Footer";
import HeaderMarquee from "./components/HeaderMarquee";
import Intro from "./components/Intro";
import Resume from "./components/Resume";
import Share from "./components/Share";
import Social from "./components/Social";
import Tech from "./components/Tech";
import Works from "./components/Works";

function App() {
  return (
    <div className="text-textColor text-xl grid grid-cols-12 gap-2 grid-row-20 grid-rows-[repeat(6,_auto)_repeat(3,auto)_auto]">
      <HeaderMarquee />
      <Intro />
      <Resume />
      <Tech />
      <Social />
      <Share />
      <Works />
      <Footer />
    </div>
  );
}

export default App;

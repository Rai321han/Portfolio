import Footer from "./components/Footer";
import HeaderMarquee from "./components/HeaderMarquee";
import Intro from "./components/Intro";
import Resume from "./components/Resume";
// import Share from "./components/Share";
import Social from "./components/Social";
import Tech from "./components/Tech";
import Works from "./components/Works";
import "./App.css";

function App() {
  return (
    <div className="flex justify-center items-center">
      <div className=" max-w-[1300px] text-textColor text-xl md:gap-3 lg:gap-4  grid grid-cols-12 md:grid-cols-10 gap-2  grid-rows-[repeat(6,_auto)_repeat(3,auto)_auto] md:grid-rows-[auto_auto_repeat(6,auto)_auto]">
        <HeaderMarquee />
        <Intro />
        <Resume />
        <Tech />
        <Social />
        {/* <Share /> */}
        <Works />
        <Footer />
      </div>
    </div>
  );
}

export default App;

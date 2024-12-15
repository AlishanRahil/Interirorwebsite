import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Brandssup from "./components/Brandssup";
import Services from "./components/Services";
import Banner from "./components/Banner";
import Banner2 from "./components/Banner2";
import Tesmonial from "./components/Tesmonial";
import Newslater from "./components/Newslater";
import Footer from "./components/Footer";
import Footer2 from "./components/Footer2";

export default function Home() {
  return (
   <div className=" overflow-x-hidden">
    <Navbar/>
    <Hero/>
    <Brandssup/>
    <Services/>
    <Banner/>
    <Banner2/>
    <Tesmonial/>
    <Newslater/>
    <Footer/> <br />
    <Footer2/>
    </div>
  );
}

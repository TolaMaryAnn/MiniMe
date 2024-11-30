import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import NewArrivals from "./components/NewArrival";
import AllProducts from "./components/AllProducts";
import Banner from "./components/Banner";
import PhotoMix from "./components/Photomix";
import QoutesSection from "./components/QoutesSection";
import Footer from "./components/Footer";



export default function Home() {
  return (
    <div >
      <Navbar />
      <Hero />
      <Products/>
      <NewArrivals/>
      <AllProducts/>
      <Banner/>
      <PhotoMix/>
      <QoutesSection/>
      <Footer/>
    </div>
  );
}

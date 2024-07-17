import Navbar from "@components/Navbar"
import Hero from "@sections/Hero";
import Filter from "@sections/Filter";
import Cards from "@sections/Cards";
import Copilot from "@sections/Copilot";
import BusinessCards from "@sections/BusinessCards";
import Footer from "@sections/Footer";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Filter />
      <Cards />
      <Copilot />
      <BusinessCards />
      <Footer />
    </div>
  );
}

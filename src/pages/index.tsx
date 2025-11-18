
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import WeOffer from "@/components/WeOffer";
import HalalCertification from "@/components/HalalCertification";
import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <Products />
        <WeOffer />
        <HalalCertification />
        <AboutUs />
        <Contact />
      </main>
      
    </div>
  );
};

export default Index;

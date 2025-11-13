import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import WeOffer from "@/components/WeOffer";
import HalalCertification from "@/components/HalalCertification";
import AboutUs from "@/components/Aboutus";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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
      <Footer />
    </div>
  );
};

export default Index;

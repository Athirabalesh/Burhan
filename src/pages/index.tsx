import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCategories from "@/components/ProductCategories";
import Features from "@/components/Features";
import HalalCertification from "@/components/HalalCertification";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProductCategories />
        <Features />
        <HalalCertification />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

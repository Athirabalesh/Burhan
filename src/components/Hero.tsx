import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-frozen-foods.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[600px] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImage})`,
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            FROZEN FRESH
            <br />
            <span className="text-secondary">FOOD PRODUCTS</span>
          </h1>
          <p className="text-xl text-white/90 mb-8">
            High-quality food products that combine taste, nutrition, and convenience. From seafood to snacks, all under one brand. Halal certified.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              View Products
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 text-white border-white hover:bg-white hover:text-primary">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

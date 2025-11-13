import { Button } from "@/components/ui/button";

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-secondary">Burhan</span>
            </h2>
          </div>
          
          <div className="space-y-8 text-primary-foreground/90">
            <div>
              <p className="text-lg leading-relaxed">
                Established in 2011, Burhan has been dedicated to delivering high-quality food products 
                that combine taste, nutrition, and convenience. With over a decade of experience, we take 
                pride in offering a wide variety of hygienically prepared, carefully packed, and ready-to-cook 
                items. Whether for homes, restaurants, or retailers, Burhan is a trusted name, delivering 
                quality and freshness from our kitchen to your table.
              </p>
            </div>

            <div className="bg-primary-foreground/10 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-secondary">Frozen Fresh Technology</h3>
              <p className="text-base leading-relaxed">
                Farmers are not getting proper value for their cultivation, and the main reason is that 
                the harvesting period comes together for crops and the supply will be high. If they are able 
                to keep the Agri products for more time, they will be able to find better market but unfortunately 
                these are perishable products so they can not be able to hold it for more than few days. But the 
                option in front of them is to sell it immediately for whatever price offered.
              </p>
              <p className="text-base leading-relaxed mt-4">
                For the above reason, we developed a new method of holding the Agri products for longer period 
                as fresh or value-added products. Even any processed food, we can keep it as Frozen Fresh that 
                means the product when we process at that time what is the quality, we keep the same quality for 
                more than three years. Also, Frozen Fresh products are no need to defrost it before cooking and 
                consuming it. It is always fresh, and no ice formed while freezing it. We can offer high quality 
                and much more shelf life as fresh.
              </p>
            </div>

            <div className="text-center mt-8">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                View Our Products
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <section id="about" className="py-16 sm:py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
         
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-secondary">Burhan</span>
            </h2>
          </div>

         
          <div className="space-y-8 sm:space-y-10 text-primary-foreground/90">
            <p className="text-base sm:text-lg leading-relaxed text-center sm:text-left">
              Established in 2011, Burhan has been dedicated to delivering high-quality food products
              that combine taste, nutrition, and convenience. With over a decade of experience, we take
              pride in offering a wide variety of hygienically prepared, carefully packed, and ready-to-cook
              items. Whether for homes, restaurants, or retailers, Burhan is a trusted name, delivering
              quality and freshness from our kitchen to your table.
            </p>

            <div className="bg-primary-foreground/10 p-4 sm:p-6 md:p-8 rounded-lg">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-secondary">
                Frozen Fresh Technology
              </h3>
              <p className="text-sm sm:text-base leading-relaxed">
                Farmers are not getting proper value for their cultivation, and the main reason is that
                the harvesting period comes together for crops and the supply will be high. If they are able
                to keep the Agri products for more time, they will be able to find better market but unfortunately
                these are perishable products so they cannot hold them for more than a few days. The option
                in front of them is to sell immediately for whatever price is offered.
              </p>
              <p className="text-sm sm:text-base leading-relaxed mt-4">
                For that reason, we developed a new method of holding Agri products for longer periods
                as fresh or value-added products. Our <strong>Frozen Fresh</strong> method keeps the same quality
                for more than three years — without ice formation and no need to defrost before cooking.
                The result: consistently fresh, high-quality food with extended shelf life.
              </p>
            </div>

            <div className="text-center mt-10">
              <Button
                size="lg"
                variant="secondary"
                className="text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3"
                onClick={() => navigate("/products")}
              >
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

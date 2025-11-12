import { Shield, CheckCircle2, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const HalalCertification = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-secondary/20 mb-6">
              <Shield className="h-12 w-12 text-secondary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-secondary">Halal</span> Certified
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              All our products meet the highest standards of halal certification, 
              ensuring quality and compliance with Islamic dietary guidelines
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 border-2 border-secondary/20 hover:border-secondary/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-secondary/10 p-3 rounded-lg">
                  <Award className="h-8 w-8 text-secondary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Certified Excellence</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our products are certified by recognized halal certification bodies, 
                    ensuring complete compliance with Islamic dietary laws. Every step of 
                    our production process is monitored and verified to maintain the 
                    highest halal standards.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-2 border-accent/20 hover:border-accent/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <CheckCircle2 className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Trusted Process</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    From sourcing to packaging, we maintain strict halal protocols. Our 
                    facilities are regularly audited, and we use only halal-approved 
                    ingredients and processes, giving you complete peace of mind with 
                    every purchase.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-secondary/10 via-accent/10 to-secondary/10 rounded-lg p-8 text-center">
            <div className="flex flex-wrap justify-center items-center gap-8 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <span className="font-semibold text-lg">100% Halal Ingredients</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <span className="font-semibold text-lg">Certified Facilities</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <span className="font-semibold text-lg">Regular Audits</span>
              </div>
            </div>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Our commitment to halal certification reflects our dedication to serving 
              the Muslim community with products they can trust and enjoy with complete confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HalalCertification;

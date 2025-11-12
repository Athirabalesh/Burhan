import { Snowflake, Shield, Truck, Award, Leaf, Clock } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Export Quality Standards",
    description: "International-grade processing and packaging",
  },
  {
    icon: Shield,
    title: "100% Hygienic & Safe",
    description: "Processed in clean, certified facilities",
  },
  {
    icon: Snowflake,
    title: "Freshness Locked In",
    description: "Quick freezing to retain nutrients and flavor",
  },
  {
    icon: Leaf,
    title: "No Added Preservatives",
    description: "Natural taste, healthier choice",
  },
  {
    icon: Clock,
    title: "Ready to Cook & Eat",
    description: "Save time without compromising on taste",
  },
  {
    icon: Truck,
    title: "Custom Bulk Orders",
    description: "Available for retailers, hotels, and caterers",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-secondary">Burhan?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by homes and businesses alike since 2011
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary/10 mb-6">
                <feature.icon className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

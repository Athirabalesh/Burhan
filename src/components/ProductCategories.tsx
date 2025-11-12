import { Card } from "@/components/ui/card";
import { Fish, Leaf, Cookie, Sandwich, Carrot } from "lucide-react";

const categories = [
  {
    icon: Fish,
    title: "Seafoods",
    description: "Fresh from the ocean, frozen to perfection. High-quality fish and prawns, cleaned and nutrition-ready",
    color: "bg-primary",
  },
  {
    icon: Leaf,
    title: "Vegan Products",
    description: "100% vegetarian products using Maida flour for meat-like texture. Healthy and pure",
    color: "bg-secondary",
  },
  {
    icon: Cookie,
    title: "Snacks",
    description: "Crispy delights for every craving. From samosas to crispy cutlets and crunchy fries",
    color: "bg-accent",
  },
  {
    icon: Sandwich,
    title: "Indian Breads",
    description: "Traditional taste, modern convenience. Soft parottas and wholesome chapatis ready in minutes",
    color: "bg-primary",
  },
  {
    icon: Carrot,
    title: "Vegetable Cuts",
    description: "Cleaned, chopped, and kitchen-ready. Pre-cut vegetables perfectly fresh and ready for cooking",
    color: "bg-secondary",
  },
];

const ProductCategories = () => {
  return (
    <section id="products" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-secondary">Product Range</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our wide selection of premium frozen foods, carefully selected and preserved for maximum quality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2"
            >
              <div className={`${category.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
                <category.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{category.title}</h3>
              <p className="text-muted-foreground">{category.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;

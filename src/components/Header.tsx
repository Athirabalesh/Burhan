import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-primary border-b border-primary/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold text-primary-foreground">
            <span className="text-secondary">BURHAN</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#home" className="text-primary-foreground hover:text-secondary transition-colors">
            Home
          </a>
          <a href="#products" className="text-primary-foreground hover:text-secondary transition-colors">
            Products
          </a>
          <a href="#about" className="text-primary-foreground hover:text-secondary transition-colors">
            About Us
          </a>
          <a href="#contact" className="text-primary-foreground hover:text-secondary transition-colors">
            Contact
          </a>
          <Button variant="secondary" size="sm">
            Get Started
          </Button>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-primary-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-primary/95 backdrop-blur-sm border-t border-primary/20">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="#home" className="text-primary-foreground hover:text-secondary transition-colors">
              Home
            </a>
            <a href="#products" className="text-primary-foreground hover:text-secondary transition-colors">
              Products
            </a>
            <a href="#about" className="text-primary-foreground hover:text-secondary transition-colors">
              About Us
            </a>
            <a href="#contact" className="text-primary-foreground hover:text-secondary transition-colors">
              Contact
            </a>
            <Button variant="secondary" size="sm" className="w-full">
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

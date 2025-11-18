const Footer = () => {
  return (
    <footer className="bg-[#2E6D68] text-white py-6">
      <div className="container mx-auto px-4 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <h2 className="text-2xl font-bold">BURHAN</h2>

          <p className="text-sm opacity-80">
            © 2024 Burhan International. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-300 text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
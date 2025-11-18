import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";  
import Footer from "./components/Footer";  
import Index from "./pages/index";
import NotFound from "./pages/NotFound";
import Products from "./components/Products";
import WeOffer from "./components/WeOffer";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
           <Route path="/weoffer" element={<WeOffer/>} />
          <Route path="/aboutus" element={<AboutUs />} /> 
           <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;






import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Pajegumai from "./pages/Pajegumai";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
        <Routes>
          {/* Lithuanian routes */}
          <Route path="/" element={<Home />} />
          <Route path="/apie" element={<About />} />
          <Route path="/paslaugos" element={<Services />} />
          <Route path="/produktai" element={<Products />} />
          <Route path="/pajegumai" element={<Pajegumai />} />
          <Route path="/kontaktai" element={<Contacts />} />
          
          {/* English routes */}
          <Route path="/en" element={<Home />} />
          <Route path="/en/about" element={<About />} />
          <Route path="/en/services" element={<Services />} />
          <Route path="/en/products" element={<Products />} />
          <Route path="/en/capabilities" element={<Pajegumai />} />
          <Route path="/en/contact" element={<Contacts />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;

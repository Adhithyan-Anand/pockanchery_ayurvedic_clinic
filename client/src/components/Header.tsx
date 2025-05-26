import { useState, useEffect } from "react";
import Logo from "./Logo";
import { cn } from "@/lib/utils";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 bg-white shadow-md transition-all duration-300",
      isScrolled && "shadow-md"
    )}>
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Logo />
        
        <div className="hidden md:flex space-x-1">
          <a href="#home" className="px-3 py-2 hover:text-primary text-sm font-medium transition-colors">HOME</a>
          <a href="#about" className="px-3 py-2 hover:text-primary text-sm font-medium transition-colors">ABOUT US</a>
          
          {/* <div className="relative group">
            <a href="#research" className="px-3 py-2 hover:text-primary text-sm font-medium transition-colors flex items-center">
              POCKANCHERY
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </a>
            <div className="absolute left-0 hidden pt-2 group-hover:block">
              <div className="bg-white shadow-lg rounded-md py-2 w-48">
                <a href="#heritage" className="block px-4 py-2 text-sm hover:bg-light-green hover:text-primary">Heritage</a>
                <a href="#philosophy" className="block px-4 py-2 text-sm hover:bg-light-green hover:text-primary">Philosophy</a>
              </div>
            </div>
          </div> */}
          
          <div className="relative group">
            <a href="#treatments" className="px-3 py-2 hover:text-primary text-sm font-medium transition-colors flex items-center">
              TREATMENTS
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </a>
            <div className="absolute left-0 hidden pt-2 group-hover:block">
              <div className="bg-white shadow-lg rounded-md py-2 w-48">
                <a href="#netra-tarpana" className="block px-4 py-2 text-sm hover:bg-light-green hover:text-primary">Netra Tarpana</a>
                <a href="#nasya" className="block px-4 py-2 text-sm hover:bg-light-green hover:text-primary">Nasya</a>
                <a href="#netra-dhara" className="block px-4 py-2 text-sm hover:bg-light-green hover:text-primary">Netra Dhara</a>
                <a href="#anjana" className="block px-4 py-2 text-sm hover:bg-light-green hover:text-primary">Anjana</a>
              </div>
            </div>
          </div>
          <a href="#contact" className="px-3 py-2 hover:text-primary text-sm font-medium transition-colors">CONTACT</a>
        </div>
        
        <div className="md:hidden">
          <button 
            className="text-gray-600 focus:outline-none" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden bg-white px-4 py-3 shadow-inner ${mobileMenuOpen ? "block" : "hidden"}`}>
        <a href="#home" className="block py-2 hover:text-primary text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>HOME</a>
        <a href="#about" className="block py-2 hover:text-primary text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>ABOUT US</a>
        <a href="#treatments" className="block py-2 hover:text-primary text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>TREATMENTS</a>
        <a href="#contact" className="block py-2 hover:text-primary text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>CONTACT</a>
      </div>
      
      <div className="hidden md:block bg-light-green py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div>
              <span className="text-primary font-medium"> Call For Enquiry & Appointment</span>
              <span className="ml-2"><a href="tel:9567077650" className="hover:underline">+91 95670 77650 (7AM - 8AM)</a></span> <span className="ml-2"><a href="tel:8893434393" className="hover:underline">+91 88934 34393 (9 PM to 10 PM)</a></span> 

            </div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center">
              <svg className="w-4 h-4 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <span>Valapad Beach, Thrissur, Kerala, India</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

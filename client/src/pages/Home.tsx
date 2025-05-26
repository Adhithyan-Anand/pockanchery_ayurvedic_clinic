import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MissionVisionAim from "@/components/MissionVisionAim";
import About from "@/components/About";
import Heritage from "@/components/Heritage";
import Research from "@/components/Research";
import Treatments from "@/components/Treatments";
import Conditions from "@/components/Conditions";
import Doctors from "@/components/Doctors";
import WhyChoose from "@/components/WhyChoose";
import Appointment from "@/components/Appointment";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import logo from "../assets/logo.png"

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Pockanchery Eye Care Clinic";

    // Simulate page loading or data fetching
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5 seconds delay

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="flex flex-col items-center justify-center h-screen bg-white">
          <img src={logo} alt="Clinic Logo" className="h-20 w-auto mb-4" />
          <a>Loading your path to a better vision</a>
          <div className="animate-spin h-10 w-10 border-t-4 border-blue-500 rounded-full"></div>
        </div>
      </div>

    );
  }

  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <MissionVisionAim />
      <About />
      <Heritage />
      <WhyChoose />
      <Treatments />
      <Conditions />
      <Doctors />
      <Appointment />
      <Location />
      <Footer />
    </div>
  );
}

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
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Pockanchery Eye Care Clinic";
  }, []);

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

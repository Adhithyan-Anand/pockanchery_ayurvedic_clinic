import { motion } from "framer-motion";
import RevealWrapper from "./RevealWrapper";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-70 bg-primary" style={{
        backgroundImage: "url('https://adhithyaelectronics.in/images/netradara.png')"
      }}></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent"></div>
      
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl text-white">
            <RevealWrapper delay={0.1}>
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4 text-shadow">
                Pockanchery
              </h1>
            </RevealWrapper>
            
            <RevealWrapper delay={0.3}>
              <h2 className="text-2xl md:text-3xl font-heading mb-6 text-shadow">
                Eye Care Clinic
              </h2>
            </RevealWrapper>
            
            <RevealWrapper delay={0.5}>
              <p className="text-lg mb-8 text-white/90">
                Combining ancient Ayurvedic wisdom with modern diagnostic techniques for holistic eye care.
              </p>
            </RevealWrapper>
            
            <RevealWrapper delay={0.7}>
              <motion.a 
                href="#appointment" 
                className="inline-block bg-accent hover:bg-accent/90 text-dark-green font-semibold py-3 px-8 rounded-lg shadow-lg transition-all hover:shadow-xl hover-grow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                BOOK AN APPOINTMENT
              </motion.a>
            </RevealWrapper>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-6 left-0 right-0 flex justify-center">
        <motion.a 
          href="#about" 
          className="text-white"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.a>
      </div>
    </section>
  );
}

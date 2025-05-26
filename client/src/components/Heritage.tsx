import RevealWrapper from "./RevealWrapper";
import heri from "../assets/heritage.png"

export default function Heritage() {
  return (
    <section id="heritage" className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <RevealWrapper>
              <h2 className="text-3xl font-heading font-bold mb-6">Our Rich Heritage</h2>
            </RevealWrapper>
            <RevealWrapper delay={0.2}>
              <p className="mb-6 text-lg">
                The Pockanchery family has a rich history in Ayurvedic medicine, tracing back over 200 years as royal physicians to the Zamorin Kings. Their approach combines traditional Ayurvedic wisdom with modern medical practices to provide holistic care.
              </p>
            </RevealWrapper>
            <RevealWrapper delay={0.3}>
              <div className="flex items-center">
                <div className="w-12 h-1 bg-accent mr-4"></div>
                <p className="font-accent text-xl">200+ years of Ayurvedic excellence</p>
              </div>
            </RevealWrapper>
          </div>
          
          <div className="order-1 md:order-2">
            <RevealWrapper>
              <img 
                src= {heri} 
                alt="Ayurvedic Heritage" 
                className="rounded-lg shadow-lg"
              />
            </RevealWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}

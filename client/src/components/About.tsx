import RevealWrapper from "./RevealWrapper";

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <RevealWrapper>
            <h2 className="text-3xl font-heading font-bold text-primary mb-2">About Our Eye Care Services</h2>
          </RevealWrapper>
          <RevealWrapper delay={0.1}>
            <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
          </RevealWrapper>
          <RevealWrapper delay={0.2}>
            <p className="max-w-3xl mx-auto text-lg">Combining ancient Ayurvedic wisdom with modern diagnostic techniques</p>
          </RevealWrapper>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <RevealWrapper>
            <img 
              src="https://adhithyaelectronics.in/images/serenity.png" 
              alt="Ayurvedic Eye Treatment" 
              className="rounded-lg shadow-lg w-full"
            />
          </RevealWrapper>
          
          <div>
            <RevealWrapper>
              <p className="mb-6">
                Pockanchery Eye Care Clinic is a renowned Ayurvedic Eye Care Clinic located in Valapad, Thrissur, Kerala. At our Clinic, we specialize in holistic and natural treatments for a wide range of eye disorders, combining ancient Ayurvedic wisdom with modern diagnostic techniques.
              </p>
            </RevealWrapper>
            <RevealWrapper delay={0.2}>
              <p className="mb-6">
                Our goal is to promote ocular health, improve vision, and prevent the progression of degenerative eye conditions through customized, non-invasive therapies.
              </p>
            </RevealWrapper>
            
            <RevealWrapper delay={0.3}>
              <div className="p-4 bg-light-green  text-justify rounded-lg mt-8" id="philosophy">
                <h3 className="text-xl font-heading text-center font-semibold text-primary mb-2">Our Philosophy</h3>
                <p>
                  In Ayurveda, the eyes are governed by the <b>Alochaka Pitta</b>, a sub-dosha of Pitta that controls visual perception. Imbalances in Pitta, Vata, or Kapha can lead to various eye disorders. We focus on balancing these doshas through individualized treatments, detoxification, dietary recommendations, and lifestyle changes.
                </p>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}

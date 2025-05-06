import { motion } from "framer-motion";
import RevealWrapper from "./RevealWrapper";

export default function Treatments() {
  const otherTreatments = [
    {
      id: "nasya",
      title: "Nasya (Nasal Administration)",
      description: "This procedure clears the upper respiratory tract and enhances the functioning of sense organs, including vision.",
      image: "https://adhithyaelectronics.in/images/nasya1.png"
    },
    {
      id: "netra-dhara",
      title: "Netra Dhara (Eye Irrigation)",
      description: "Continuous pouring of herbal decoctions over closed eyes to relieve eye strain, dryness, and inflammation.",
      image: "https://adhithyaelectronics.in/images/netradara.png"
    },
    {
      id: "anjana",
      title: "Anjana (Herbal Collyrium)",
      description: "Application of medicated herbal paste or liquid to cleanse the eyes and improve visual acuity.",
      image: "https://adhithyaelectronics.in/images/anjana.png"
    }
  ];

  const netraTarpanaConditions = [
    "Blurred vision", "Eye fatigue", "Dry Eye Syndrome",
    "Early-stage cataracts", "Computer Vision Syndrome", "Chronic eye allergies"
  ];

  return (
    <section id="treatments" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <RevealWrapper>
            <h2 className="text-3xl font-heading font-bold text-primary mb-2">Specialized Treatments</h2>
          </RevealWrapper>
          <RevealWrapper delay={0.1}>
            <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
          </RevealWrapper>
          <RevealWrapper delay={0.2}>
            <p className="max-w-3xl mx-auto text-lg">Holistic and natural treatments for a wide range of eye disorders</p>
          </RevealWrapper>
        </div>

        {/* Netra Tarpana */}
        <div id="netra-tarpana" className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <RevealWrapper>
                <h3 className="text-2xl font-heading font-semibold text-primary mb-4">
                 <b>Netra Tarpana (Eye Rejuvenation Therapy)</b> 
                </h3>
              </RevealWrapper>
              <RevealWrapper delay={0.1}>
                <p className="mb-4">
                  Nethra Tharpanam is a classical Ayurvedic treatment for the eyes. It is a rejuvenating therapy where medicated ghee is gently retained over the eyes for a specific period. This allows deep nourishment of the eye tissues, improves vision, and relieves eye fatigue.
                </p>
              </RevealWrapper>

              <RevealWrapper delay={0.2}>
                <div className="mb-4">
                  <h4 className="text-xl font-heading font-medium text-primary mb-2"><b>Why is it Done?</b></h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {netraTarpanaConditions.map((condition, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-secondary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span>{condition}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealWrapper>

              <RevealWrapper delay={0.2}>
                <div className="mb-4">
                  <h4 className="text-xl font-heading font-medium text-primary mb-2"><b>How is it Done?</b></h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {[
                      'Preparation: A soft dough ring made from black gram flour is formed around the eyes.',
                      'Therapy: Lukewarm medicated ghee is gently poured into the ring, completely covering the eyes while the patient lies down relaxed.',
                      'Soaking Time: The ghee is retained for 25–35 minutes, allowing the eyes to bathe and absorb its therapeutic benefits.',
                      'Post-care: The ghee is drained and the eyes are gently cleansed. Eyes should be bandaged and rest recommended afterward.'
                    ].map((step, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-secondary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>

                  <h4 className="text-xl font-heading font-medium text-primary mt-6 mb-2"><b>Benefits</b></h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {[
                      'Rejuvenates and strengthens the eye muscles',
                      'Improves eye moisture and vision clarity',
                      'Relieves tension and tiredness',
                      'Delays age-related degeneration of eyes',
                      'Provides cooling and calming effect on the mind'
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-secondary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <h4 className="text-xl font-heading font-medium text-primary mt-6 mb-2"><b>Treatment Duration</b></h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {[
                      'Often done as a course of 5–7 days',
                      'Each session lasts about 25–35 minutes'
                    ].map((duration, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-secondary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span>{duration}</span>
                      </li>
                    ))}
                  </ul>

                  <h4 className="text-xl font-heading font-medium text-primary mt-6 mb-2"><b>Post-Treatment Advice</b></h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {[
                      'Avoid screens, sunlight, or bright lights for further 7 days.',
                      'Use sunglasses if stepping out',
                      'Rest the eyes and avoid strain'
                    ].map((advice, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-secondary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span>{advice}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealWrapper>

            </div>

            <RevealWrapper>
              <img
                src="https://adhithyaelectronics.in/images/tarpan.png"
                alt="Netra Tarpana Treatment"
                className="rounded-lg shadow-lg"
              />
            </RevealWrapper>
          </div>
        </div>

        {/* Other Treatments */}
        <div className="grid md:grid-cols-3 gap-8">
          {otherTreatments.map((treatment, index) => (
            <RevealWrapper key={treatment.id} delay={0.1 * index}>
              <div id={treatment.id} className="p-6 bg-white rounded-lg shadow-md hover-grow">
                <div className="overflow-hidden rounded-lg mb-4">
                  <motion.img
                    src={treatment.image}
                    alt={treatment.title}
                    className="w-full h-48 object-cover rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-2">{treatment.title}</h3>
                <p className="mb-4">{treatment.description}</p>
                <a href="#contact" className="text-secondary hover:text-primary font-medium flex items-center">
                  Contact US
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}

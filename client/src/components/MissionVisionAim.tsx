import RevealWrapper from "./RevealWrapper";

export default function MissionVisionAim() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Aim */}
          <RevealWrapper className="h-full">
            <div className="p-6 bg-light-green rounded-lg shadow-md hover-grow h-full">
              <h3 className="text-2xl font-heading font-semibold text-primary mb-4">Aim</h3>
              <p className="mb-4">We provide effective treatment for:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Ocular Conditions</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Skin Diseases</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Gastro Intestinal Diseases</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Musculo-Skeletal Diseases</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Gynaecological Diseases</span>
                </li>
              </ul>
            </div>
          </RevealWrapper>
          
          {/* Vision */}
          <RevealWrapper className="h-full" delay={0.2}>
            <div className="p-6 bg-light-green rounded-lg shadow-md hover-grow h-full">
              <h3 className="text-2xl font-heading font-semibold text-primary mb-4">Vision</h3>
              <div className="mb-4 italic font-accent text-lg text-primary">
                
              </div>
              <p className="mb-2">Effectiveness without side effects</p>
              <p>"To achieve maximum effectiveness while minimizing or eliminating any potential side effects, ensuring optimal performance and safety in the process."</p>
            </div>
          </RevealWrapper>
          
          {/* Mission */}
          <RevealWrapper className="h-full" delay={0.4}>
            <div className="p-6 bg-light-green rounded-lg shadow-md hover-grow h-full">
              <h3 className="text-2xl font-heading font-semibold text-primary mb-4">Mission</h3>
              <p>Our mission is to assist patients suffering from various ailments in our society and help them return to mainstream life as healthy individuals.</p>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}

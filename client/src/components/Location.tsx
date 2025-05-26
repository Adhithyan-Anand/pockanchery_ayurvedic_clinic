import RevealWrapper from "./RevealWrapper";

export default function Location() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <RevealWrapper>
            <h2 className="text-3xl font-heading font-bold text-primary mb-2">Our Location</h2>
          </RevealWrapper>
          <RevealWrapper delay={0.1}>
            <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
          </RevealWrapper>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <RevealWrapper>
            {/* Map placeholder */}
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.286996189213!2d76.09975457528216!3d10.398765089727982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7f4a6b74d3acd%3A0x51a033f74ed8ec7!2sPockanchery%20Eye%20Care%20Clinic!5e0!3m2!1sen!2sin!4v1746361031478!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pockanchery Eye Care Clinic Location"
              ></iframe>
            </div>
          </RevealWrapper>

          <div>
            <RevealWrapper>
              <div className="p-6 bg-light-green rounded-lg">
                <h3 className="text-xl font-heading font-semibold text-primary mb-4">Visit Us</h3>

                <div className="mb-6">
                  <p className="flex items-start mb-4">
                    <svg className="w-5 h-5 text-primary mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span>
                      <strong className="block text-gray-800">Address:</strong>
                      Pockanchery Eye Care Clinic<br />
                      Valapad Beach <br />
                      Thrissur, Kerala, India - 680567
                    </span>
                  </p>

                  <p className="flex items-start mb-4">
                    <svg className="w-5 h-5 text-primary mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>
                      <strong className="block text-gray-800">Clinic Working Hours:</strong>
                      Daily : 8:30 AM - 1:00 PM<br />

                    </span>
                  </p>


                </div>

                <h4 className="font-medium text-primary mb-2">How to Reach Us</h4>
                <ul className="text-gray-700 list-disc list-inside mb-4">
                  <li><strong>Location:</strong> Our clinic is near Valapad Beach.</li>
                  <li><strong>Nearest Railway Station:</strong> Thrissur Station, about 25 km away.</li>
                  <li><strong>Transport Options:</strong> Auto-rickshaws and taxis are easily available from the station to reach us.</li>
                </ul>

              </div>
            </RevealWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}

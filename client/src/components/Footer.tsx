import { motion } from "framer-motion";
import Logo from "./Logo";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Treatments", href: "#treatments" },
    { name: "Contact", href: "#contact" }
  ];

  const treatmentLinks = [
    { name: "Netra Tarpana", href: "#netra-tarpana" },
    { name: "Nasya", href: "#nasya" },
    { name: "Netra Dhara", href: "#netra-dhara" },
    { name: "Anjana", href: "#anjana" }
  ];

  const contactInfo = [
    {
      icon: (
        <svg className="w-4 h-4 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
        </svg>
      ),
      text: "9567077650 (7AM to 8AM)\n8893434393 (9 PM to 10 PM)"
    },
    {
      icon: (
        <svg className="w-4 h-4 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
      text: "eyecareclinicpockanchery@gmail.com"
    },
    {
      icon: (
        <svg className="w-4 h-4 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
      ),
      text: "PO Valapad\nThrissur, Kerala - 680567"
    }
  ];
  

  const socialLinks = [
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
        </svg>
      ),
      href: "https://www.facebook.com/share/1KVXLWqzAb/?mibextid=qi2Omg"
    },

  ];

  return (
    <footer className="bg-dark-green text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Logo size="sm" className="bg-white" />
            </div>

            <p className="text-white/80 mb-4">
              Combining ancient Ayurvedic wisdom with modern diagnostic techniques for holistic eye care since 200+ years.
            </p>

            <div className="flex space-x-4 mb-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="text-white hover:text-accent"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >

                </motion.a>
              ))}
            </div>

            {/* Facebook Button */}
            <a
              href="https://www.facebook.com/share/1KVXLWqzAb/?mibextid=qi2Omg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M22.675 0h-21.35C.592 0 0 .592 0 1.325v21.351C0 23.408.592 24 1.325 24H12.82v-9.294H9.692V11.31h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.396h-3.12V24h6.116C23.408 24 24 23.408 24 22.675V1.325C24 .592 23.408 0 22.675 0z" />
              </svg>
              Follow us on Facebook
            </a>
          </div>


          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/80 hover:text-white">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Treatments</h3>
            <ul className="space-y-2">
              {treatmentLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/80 hover:text-white">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start">
                  {info.icon}
                  <span style={{ whiteSpace: 'pre-line' }}>{info.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Pockanchery Eye Care Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

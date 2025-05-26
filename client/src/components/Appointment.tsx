import { useState } from "react";
import { motion } from "framer-motion";
import RevealWrapper from "./RevealWrapper";

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // In a real implementation, you would send this data to the server
    // For demo purposes, we'll just clear the form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
    alert("Thank you for your enquiry. We will get back to you soon.");
  };

  return (
    <section id="appointment" className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 bg-light-green flex flex-col items-center justify-center text-center">
              <RevealWrapper>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">
                  Book a consultation
                </h2>
              </RevealWrapper>
              <RevealWrapper delay={0.1}>
                <p className="mb-6 text-gray-700">
                  To schedule a consultation, you can contact the clinic directly at the provided phone numbers.
                  It's advisable to call in advance, as appointment booking can be challenging during peak seasons.
                </p>
              </RevealWrapper>
              <RevealWrapper delay={0.2}>
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
              </RevealWrapper>
            </div>



            <div className="md:w-1/2 p-8">
              <RevealWrapper>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">Booking Numbers</h2>
              </RevealWrapper>
              <RevealWrapper delay={0.2}>
                <div className="mb-6">
                  <h3 className="font-medium text-primary mb-2">OPHTHALMOLOGY DEPARTMENT</h3>

                  <p className="flex items-center text-gray-700 mb-2">
                    <svg className="w-4 h-4 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:9567077650" className="hover:underline">9567077650 (7AM to 8AM)</a>
                  </p>

                  <p className="flex items-center text-gray-700 mb-2">
                    <svg className="w-4 h-4 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:9446361607" className="hover:underline">9446361607 (9:30PM to 10:30PM)</a>
                  </p>

                  <p className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:8893434393" className="hover:underline">8893434393 (9:00PM to 10:00PM)</a>
                  </p>
                </div>
              </RevealWrapper>


              <RevealWrapper delay={0.3}>
                <div>
                  <h3 className="font-medium text-primary mb-2">GENERAL MEDICINE & WOMEN'S HEALTH</h3>
                  <p className="flex items-center text-gray-700 mb-4">
                    <svg className="w-4 h-4 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    <a href="tel:9061547177" className="hover:underline">9061547177 (9:00PM to 10:00PM)</a>
                  </p>

                  <p className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    eyecareclinicpockanchery@gmail.com
                  </p>
                </div>
              </RevealWrapper>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

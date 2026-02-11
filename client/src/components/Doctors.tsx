import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RevealWrapper from "./RevealWrapper";
import man from "../assets/man.jpg"
import head from "../assets/head.jpg"
import lady from "../assets/lady.jpg"

export default function Doctors() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showScrollHint, setShowScrollHint] = useState(false);
  const scrollContentRef = useRef(null);

  const doctors = [
    {
      name: "Dr. P.R. SIDHARTHA SANKAR",
      qualifications: "B.A.M, Rtd. Specialist Senior Medical Officer (Netra)",
      specialty: "OPHTHALMOLOGY, ENT AND HEAD & NECK",
      bookingNumbers: [
        { number: "9567077650", time: "7am – 8am" },
        { number: "9446361607", time: "9:30pm – 10:30pm" }
      ],
      image: head,
      moreDetails:
        "Dr. P.R. Sidhartha Sankar is a <strong>Retired Specialist Senior Medical Officer</strong> from Netra.<br /><br />" +
        "He specializes in <strong>Ophthalmology, ENT, and Head & Neck diseases</strong>.<br /><br />" +
        "He completed his <strong>B.A.M</strong> degree from Vaidyaratnam Ayurveda College, Thaikattussery.<br /><br />" +
        "With over 30 years of experience, Dr. Sidhartha Sankar has served in:<br />" +
        "<ul class='list-disc list-inside mt-2 ml-4 text-gray-700'>" +
        "<li>AVM Municipal Ayurvedic Hospital, Irinjalakkuda</li>" +
        "<li>Government Ayurvedic Hospital, Thana (Kannur)</li>" +
        "<li>Ramavarma District Government Ayurveda Hospital, Thrissur</li>" +
        "</ul><br />" +
        "He is known for his <strong>empathetic approach</strong> and dedication to <strong>holistic treatment methods</strong> rooted in traditional Ayurveda.<br /><br />" +
        "<strong>Special Area of Focus:</strong><br />" +
        "<ul class='list-disc list-inside mt-2 ml-4 text-gray-700'>" +
        "<li>Myopia</li>" +
        "<li>Hypermetropia</li>" +
        "<li>Astigmatism</li>" +
        "<li>Presbyopia</li>" +
        "<li>Cataracts (Early Stage)</li>" +
        "<li>Dry Eye Syndrome</li>" +
        "<li>Digital Eye Strain</li>" +
        "<li>Retinitis Pigmentosa (Supportive Care)</li>" +
        "<li>Diabetic Retinopathy (Supportive Care)</li>" +
        "<li>Central Serous Retinopathy</li>" +
        "<li>Stye</li>" +
        "<li>Blepharospasm</li>" +
        "</ul>"
    },
    {
      name: "Dr. P.S. ADARSH",
      qualifications: "B.A.M.S, MS (Ay) Shalakyatantra",
      specialty: "OPHTHALMOLOGY, ENT AND HEAD & NECK",
      bookingNumbers: [
        { number: "8893434393", time: "9pm – 10pm" }
      ],
      image: man,
      onlineConsultation: true,
      moreDetails: `
    <p>Obtained <strong>B.A.M.S.</strong> degree from Vaidyaratnam Ayurveda College, Ollur, Thaikattussery.<br><br></p>
    <p>Received Post Graduation degree in <strong>M.S. Shalakyatantra</strong> from Amrita School of Ayurveda.</p>

    <p><strong>Special Area of Focus</strong></p>
    <div class="grid grid-cols-1 gap-x-6 text-gray-700 mt-3">
        <div>
            <p><strong>Ear</strong></p>
            <ul class="list-disc list-inside">
                <li>Ear ache</li>
                <li>Tinnitus</li>
                <li>Hearing Loss</li>
                <li>Benign Paroxysmal Positonal Vertigo</li>
                <li>Otorrhoea</li>
            </ul>
        </div>
        <div>
            <p><strong>Nose</strong></p>
            <ul class="list-disc list-inside">
                <li>Nasal Polyps</li>
                <li>Blockage</li>
                <li>Deviated Septum</li>
                <li>Anosmia</li>
                <li>Sinusitis</li>
            </ul>
        </div>
        <div>
            <p><strong>Throat</strong></p>
            <ul class="list-disc list-inside">
                <li>Sore Throat</li>
                <li>Hoarseness</li>
            </ul>
        </div>
        <div>
            <p><strong>Oro-Dental</strong></p>
            <ul class="list-disc list-inside">
                <li>Gingivitis</li>
                <li>Periodontitis</li>
                <li>Halitosis</li>
                <li>Tooth Sensitivity</li>
            </ul>
        </div>
        
    </div>

<div>
<p><strong>Ophthalmology</strong></p>
<ul class="list-disc list-inside">
        <li>Myopia</li>
        <li>Hypermetropia</li>
        <li>Astigmatism</li>
        <li>Presbyopia</li>
        <li>Cataracts (Early Stage)</li>
        <li>Dry Eye Syndrome</li>
        <li>Digital Eye Strain</li>
        <li>Retinitis Pigmentosa (Supportive Care)</li>
        <li>Diabetic Retinopathy (Supportive Care)</li>
        <li>Central Serous Retinopathy</li>
        <li>Stye</li>
        <li>Blepharospasm</li>
        </ul>
        </div>
        `

    },
    {
      name: "Dr. SREELAKSHMI ADARSH",
      qualifications: "B.A.M.S, MD (Ay) Kayachikitsa",
      specialty: "GENERAL MEDICINE & WOMEN'S HEALTH",
      bookingNumbers: [
        { number: "9061547177", time: "9pm – 10pm" }
      ],
      image: lady,
      onlineConsultation: true,
      moreDetails:

        "Received <strong>B.A.M.S.</strong> from Vaidyaratnam Ayurveda College.<br /><br />" +
        "Earned MD Kayachikitsa in 2022. Completed Certificate Course in <strong>Psychology Counselling and Smriti Meditation</strong>.<br /><br />" +
        "<strong>Special Areas of Focus:</strong><br />" +
        "<ul class='list-inside mt-2 text-gray-700 space-y-2'>" +

        "<li><strong>Rheumatology:</strong>" +
        "<ul class='list-disc list-inside ml-5'>" +
        "<li>Joint Pain and Swelling</li>" +
        "<li>Low Back Ache</li>" +
        "<li>Fibromyalgia</li>" +
        "</ul>" +
        "</li>" +

        "<li><strong>Gastroenterology:</strong>" +
        "<ul class='list-disc list-inside ml-5'>" +
        "<li>Gastritis</li>" +
        "<li>Loss of Appetite</li>" +
        "<li>Diarrhea</li>" +
        "<li>Constipation</li>" +
        "<li>Vomiting</li>" +
        "<li>Fatty Liver</li>" +
        "</ul>" +
        "</li>" +

        "<li><strong>Urology:</strong>" +
        "<ul class='list-disc list-inside ml-5'>" +
        "<li>Urinary Tract Infection (UTI)</li>" +
        "<li>Kidney Stone</li>" +
        "</ul>" +
        "</li>" +

        "<li><strong>Neurology:</strong>" +
        "<ul class='list-disc list-inside ml-5'>" +
        "<li>Parkinsonism</li>" +
        "<li>Muscle Weakness</li>" +
        "<li>Difficulty in Walking</li>" +
        "<li>Numbness of Hands and Feet</li>" +
        "<li>Depression</li>" +
        "<li>Sleeplessness</li>" +
        "</ul>" +
        "</li>" +

        "<li><strong>Pulmonology:</strong>" +
        "<ul class='list-disc list-inside ml-5'>" +
        "<li>Asthma</li>" +
        "<li>Chronic Obstructive Pulmonary Disease (COPD)</li>" +
        "</ul>" +
        "</li>" +

        "<li><strong>Dermatology:</strong>" +
        "<ul class='list-disc list-inside ml-5'>" +
        "<li>Atopic Dermatitis</li>" +
        "<li>Eczema</li>" +
        "<li>Psoriasis</li>" +
        "</ul>" +
        "</li>" +

        "<li><strong>Endocrinology:</strong>" +
        "<ul class='list-disc list-inside ml-5'>" +
        "<li>Adrenal Disorders</li>" +
        "<li>Pituitary Disorders</li>" +
        "<li>Thyroid Disorders</li>" +
        "</ul>" +
        "</li>" +

        "<li><strong>Gynecology:</strong>" +
        "<ul class='list-disc list-inside ml-5'>" +
        "<li>Polycystic Ovarian Disease (PCOD)</li>" +
        "<li>Endometriosis and Fibroids</li>" +
        "<li>Heavy Menstrual Bleeding</li>" +
        "<li>Amenorrhea</li>" +
        "</ul>" +
        "</li>" +

        "<li><strong>Lifestyle Disorders:</strong>" +
        "<ul class='list-disc list-inside ml-5'>" +
        "<li>Thyroid</li>" +
        "<li>Cholesterol</li>" +
        "<li>Diabetes</li>" +
        "<li>Hypertension</li>" +
        "</ul>" +
        "</li>" +

        "</ul>"


    }
  ];

  useEffect(() => {
    if (selectedDoctor) {
      const el = scrollContentRef.current;
      const checkScroll = () => {
        if (el && el.scrollHeight > el.clientHeight) {
          setShowScrollHint(true);
        } else {
          setShowScrollHint(false);
        }
      };
      checkScroll();

      const handleScroll = () => {
        if (el.scrollTop + el.clientHeight >= el.scrollHeight - 10) {
          setShowScrollHint(false);
        }
      };

      el.addEventListener("scroll", handleScroll);
      return () => el.removeEventListener("scroll", handleScroll);
    }
  }, [selectedDoctor]);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <RevealWrapper>
            <h2 className="text-3xl font-heading font-bold text-primary mb-2">Our Doctors</h2>
          </RevealWrapper>
          <RevealWrapper delay={0.1}>
            <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
          </RevealWrapper>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <RevealWrapper key={index} delay={0.6 * index}>
              <div className="bg-light-green rounded-lg overflow-hidden shadow-md hover-grow flex flex-col h-full">
                <motion.div
                  className="h-[330px] overflow-hidden flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-auto max-h-[280px] object-contain"
                  />
                </motion.div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-heading font-semibold text-primary mb-1">{doctor.name}</h3>
                  <p className="text-gray-600 mb-3">{doctor.qualifications}</p>

                  <div className="border-t border-gray-200 pt-4 mt-auto">
                    <h4 className="font-medium text-gray-800 mb-2">Speciality</h4>
                    <p className="text-gray-600 mb-4">{doctor.specialty}</p>

                    {doctor.onlineConsultation && (
                      <div className="flex items-center mb-2">
                        <span className="glow-dot"></span>
                        <span className="text-green-700 text-lg font-medium">Online consultation available</span>
                      </div>
                    )}

                    <h4 className="font-medium text-gray-800 mb-2">Booking</h4>
                    {doctor.bookingNumbers.map((booking, i) => (
                      <p key={i} className="text-gray-600 flex items-center mt-1">
                        <svg className="w-4 h-4 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        {booking.number} @ {booking.time}
                      </p>
                    ))}
                  </div>

                  <button
                    className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition"
                    onClick={() => setSelectedDoctor(doctor)}
                  >
                    See More
                  </button>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>



      {/* Modal */}
      <AnimatePresence>
        {selectedDoctor && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-6 rounded-xl w-full max-w-lg shadow-lg relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setSelectedDoctor(null)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
              >
                ✕
              </button>
              <div className="flex flex-col md:flex-row items-center mb-4">
                <img
                  src={selectedDoctor.image}
                  alt={selectedDoctor.name}
                  className="max-w-[150px] rounded-xl border-2 border-primary mr-4 mb-4 md:mb-0"
                />
                <div>
                  <h3 className="text-xl font-bold text-primary">{selectedDoctor.name}</h3>
                  <p className="text-gray-600">{selectedDoctor.qualifications}</p>
                  <p className="text-gray-600 mt-2 font-medium">{selectedDoctor.specialty}</p>
                </div>
              </div>
              <div
                ref={scrollContentRef}
                className="text-gray-700 max-h-[350px] overflow-y-auto pr-2"
                dangerouslySetInnerHTML={{ __html: selectedDoctor.moreDetails }}
              />

              {/* Floating Scroll Down Hint */}
              {showScrollHint && (
                <motion.div
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-primary text-white text-sm px-4 py-1.5 rounded-full shadow-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 1 }}
                >
                  Scroll down for more ↓
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

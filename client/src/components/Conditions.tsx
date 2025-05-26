import RevealWrapper from "./RevealWrapper";

export default function Conditions() {
  const conditions = [
    {
      title: "Refractive Errors",
      description: "Myopia, Hypermetropia & Astigmatism",

    },
    {
      title: "Dry Eye Syndrome",
      description: "Treatment for chronic dryness",

    },
    {
      title: "Computer Vision Syndrome",
      description: "Relief from digital eye strain",

    },
    {
      title: "Glaucoma",
      description: "Supportive therapy",

    },
    {
      title: "Diabetic Retinopathy",
      description: "Supportive care",

    },
    {
      title: "Conjunctivitis",
      description: "Treatment for eye inflammation",

    },
    {
      title: "Cataract",
      description: "Early-stage management",

    },
    {
      title: "Macular Degeneration",
      description: "Age-related treatment",

    }
  ];

  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <RevealWrapper>
            <h2 className="text-3xl font-heading font-bold mb-2">Conditions We Treat</h2>
          </RevealWrapper>
          <RevealWrapper delay={0.1}>
            <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
          </RevealWrapper>
          <RevealWrapper delay={0.2}>
            <p className="max-w-3xl mx-auto text-lg">Comprehensive care for various eye conditions</p>
          </RevealWrapper>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {conditions.map((condition, index) => (
            <RevealWrapper key={index} delay={0.1 * (index % 4)}>
              <div className="h-full min-h-[120px] p-4 bg-white rounded-lg flex flex-col items-center justify-center text-center hover:bg-white/20 transition-colors">
                <h3 className="font-medium text-black mt-3">{condition.title}</h3>
                <p className="text-sm text-black/80">{condition.description}</p>
              </div>
            </RevealWrapper>
          ))}
        </div>

      </div>
    </section>
  );
}

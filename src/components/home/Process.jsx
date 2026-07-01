import { processSteps } from "../../data/processData";
import Heading from "../ui/Heading";

const Process = () => {
  return (
    <section className="relative overflow-hidden py-[60px]">
      <Heading
        children1="Notre méthode. Votre réussite. "
        children2="Un process clair et éprouvé pour transformer vos objectifs en
            résultats concrets."
        textAlign="center"
      ></Heading>
      <div className="container mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="text-center mb-20"></div>

        {/* Timeline */}

        <div className="relative">
          {/* Blue Line */}

          <div className="absolute top-10 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#1565ff] to-transparent rounded-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 relative z-10">
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.id}
                  className="flex flex-col items-center text-center"
                >
                  {/* Circle */}

                  <div
                    className={`relative w-20 h-20 rounded-full flex items-center justify-center border transition duration-300
                    ${
                      step.active
                        ? "bg-[#FFC107] border-[#FFC107] shadow-[0_0_35px_rgba(255,193,7,.65)]"
                        : "bg-[#0A1630] border-[#1565ff] shadow-[0_0_25px_rgba(21,101,255,.35)]"
                    }`}
                  >
                    <Icon
                      size={26}
                      className={step.active ? "text-[#081322]" : "text-white"}
                    />

                    <div
                      className={`absolute -bottom-3 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm
                      ${
                        step.active
                          ? "bg-[#FFC107] text-black"
                          : "bg-[#1565ff] text-white"
                      }`}
                    >
                      {step.id}
                    </div>
                  </div>

                  {/* Title */}

                  <h3 className="mt-10 text-white font-bold text-2xl">
                    {step.title}
                  </h3>

                  {/* Blue line */}

                  <div className="w-10 h-[2px] bg-[#1565ff] my-5"></div>

                  {/* Description */}

                  <p className="text-gray-400 leading-8 text-[15px] max-w-[300px]  sm:max-w-[220px]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;

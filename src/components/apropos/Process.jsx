import Heading from "../ui/Heading";

const Process = () => {
  const steps = [
    {
      id: "01",
      title: "Découverte",
      description: "Analyse de vos besoins et de votre marché.",
    },
    {
      id: "02",
      title: "Stratégie",
      description: "Élaboration d'une stratégie sur-mesure.",
    },
    {
      id: "03",
      title: "Exécution",
      description: "Mise en place et gestion des actions.",
    },
    {
      id: "04",
      title: "Optimisation",
      description: "Analyse et optimisation continue.",
    },
  ];

  return (
    <section className="">
      <div className="container mx-auto px-5">
        <div className="rounded-2xl border border-white/10 bg-[#071126] p-8 md:p-12">
          {/* Header */}

          <Heading
            children1="Notre Approche"
            children2="Une méthode claire pour des résultats concrets"
            textAlign="center"
          ></Heading>

          {/* Timeline */}
          <div className="relative mt-16">
            {/* Line */}
            <div className="absolute left-0 right-0 top-5 hidden h-[2px] bg-yellow-500 md:block"></div>

            <div className="grid gap-10 md:grid-cols-4">
              {steps.map((step) => (
                <div key={step.id} className="relative text-center">
                  {/* Circle */}
                  <div className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full border-2 border-yellow-500 bg-[#071126] text-sm font-bold text-yellow-500">
                    {step.id}
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-xl font-semibold text-white">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-sm leading-7 text-gray-400">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;

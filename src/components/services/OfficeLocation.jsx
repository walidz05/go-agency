import {
  RiMapPin2Fill,
  RiArrowRightLine,
  RiCheckboxCircleLine,
  RiCupLine,
} from "react-icons/ri";

import mapImg from "../../assets/images/map.webp";

const OfficeLocation = () => {
  return (
    <section className="py-[60px]">
      <div className="container mx-auto">
        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
          {/* Left Card */}
          <div className="rounded-2xl border border-[#16356A] bg-[#071126] p-8">
            <h2 className="text-4xl font-bold text-white">Où nous trouver ?</h2>

            <p className="mt-2 text-gray-400">
              Venez nous rencontrer dans nos bureaux.
            </p>

            <div className="relative mt-8 overflow-hidden rounded-2xl">
              <img
                src={mapImg}
                alt="Map"
                className="h-[460px] w-full object-cover"
              />

              {/* Pin */}
              <div className="absolute left-1/2 top-20 -translate-x-1/2">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#101C35] shadow-[0_0_30px_rgba(255,196,0,0.4)]">
                  <RiMapPin2Fill className="text-3xl text-primary" />
                </div>
              </div>

              {/* Office Card */}
              <div className="absolute bottom-8 left-8 flex max-w-md gap-5 rounded-2xl border border-[#16356A] bg-[#08152D]/95 p-5 backdrop-blur">
                <div>
                  <h3 className="text-1xl font-semibold text-secondary">
                    Nos bureaux
                  </h3>

                  <p className="mt-3 text-gray-300">
                    123 Avenue Hassan II
                    <br />
                    Casablanca, Maroc
                  </p>

                  <button className="mt-5 flex items-center gap-2 rounded-lg border border-primary px-5 py-3 text-primary transition hover:bg-primary hover:text-black">
                    Itinéraire
                    <RiArrowRightLine />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="relative overflow-hidden rounded-2xl border border-[#16356A] bg-[#071126] p-8">
            <div className="absolute right-0 top-1/2 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />

            <h2 className="text-2xl font-bold leading-tight text-white">
              Discutons de <span className="text-secondary">votre projet</span>
              <br />
              autour d'un café <RiCupLine className="inline text-secondary" />
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              Que ce soit pour un audit, une campagne ou une collaboration à
              long terme, nous serons ravis de vous accompagner.
            </p>

            <div className="mt-10 space-y-5">
              {[
                "Audit gratuit de votre présence digitale",
                "Stratégies personnalisées et sur-mesure",
                "Accompagnement dédié et réactif",
                "Résultats mesurables et transparents",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <RiCheckboxCircleLine className="text-xl text-primary" />

                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>

            <button className="mt-10 flex items-center gap-2 rounded-lg border border-primary px-6 py-4 font-medium text-primary transition hover:bg-primary hover:text-black">
              Planifier un rendez-vous
              <RiArrowRightLine />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeLocation;

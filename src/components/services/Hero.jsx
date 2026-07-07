import serviceImg from "../../assets/images/services/services.webp";
import {
  HiOutlineChartBar,
  HiOutlineShieldCheck,
  HiOutlinePresentationChartLine,
} from "react-icons/hi2";

const Hero = () => {
  const services = [
    {
      id: 1,
      icon: HiOutlineChartBar,
      title: "Approche data-driven",
      description:
        "Des décisions basées sur les données pour maximiser le ROI.",
    },
    {
      id: 2,
      icon: HiOutlineShieldCheck,
      title: "Transparence totale",
      description: "Reporting clair et communication constante.",
    },
    {
      id: 3,
      icon: HiOutlinePresentationChartLine,
      title: "Résultats mesurables",
      description: "Nous nous concentrons sur ce qui compte vraiment.",
    },
  ];

  return (
    <section className="py-[60px]">
      <div className="container mx-auto ">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <span className="text-secondary text-sm font-semibold uppercase ">
              NOS SERVICES
            </span>

            <h2 className="mt-4 text-4xl font-bold text-white leading-tight">
              Des solutions marketing
              <br />
              pour booster votre
              <br />
              <span className="text-secondary">croissance digitale.</span>
            </h2>

            <p className="mt-6 max-w-xl text-sm sm:text-lg leading-8 text-gray-400">
              Nous combinons stratégie, créativité et technologie pour créer des
              campagnes performantes qui génèrent des résultats mesurables.
            </p>

            {/* Features */}
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <div
                    key={service.id}
                    className="border-l border-[#183B73] pl-5"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#183B73] bg-[#09152D]">
                      <Icon className="text-3xl text-primary" />
                    </div>

                    <h3 className="mt-5 text-[16px] font-semibold text-white">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-[14px] text-sm leading-5 text-gray-400">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <img
              loading="lazy"
              src={serviceImg}
              alt="Services"
              className="mx-auto w-full max-w-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

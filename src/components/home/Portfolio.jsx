import { portfolio } from "../../data/portfolioData";
import Heading from "../ui/Heading";

const Portfolio = () => {
  return (
    <section className=" container py-[60px] ">
      <div className="container-custom">
        {/* Header */}

        <Heading
          children1="NOS CLIENTS"
          children2="Nous transformons les idées de nos clients en expériences digitales performantes"
          textAlign="center"
        ></Heading>

        {/* Cards */}

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-10 ">
          {portfolio.map((item) => (
            <article
              key={item.id}
              className="
                group
                rounded-3xl
                overflow-hidden
                border
                border-white/5
                bg-card
                hover:border-primary/40
                duration-500
                hover:-translate-y-2
                hover:shadow-[0_15px_45px_rgba(0,87,183,.18)]
              "
            >
              <div className="h-64 w-full overflow-hidden rounded-t-2xl bg-[#0F172A] flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                                w-full
                                h-full
                                object-contain
                                p-6
                                transition-transform
                                duration-700
                                group-hover:scale-105
                              "
                />
              </div>

              <div className="p-7 text-center">
                <h3 className="text-xl font-semibold text-white mb-5">
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

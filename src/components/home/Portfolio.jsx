import { portfolio } from "../../data/portfolioData";
import { FaArrowRight } from "react-icons/fa";
import Heading from "../ui/Heading";

const Portfolio = () => {
  return (
    <section className=" container py-[60px]">
      <div className="container-custom">
        {/* Header */}

        <div className="flex items-center justify-between mb-[30px]">
          <Heading children2="Nos derniers succès" textAlign="left"></Heading>

          <button className="group flex items-center gap-2 text-primary font-semibold hover:text-secondary duration-300">
            Voir tous les projets
            <FaArrowRight
              size={20}
              className="group-hover:translate-x-1 duration-300"
            />
          </button>
        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
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
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    h-64
                    w-full
                    object-cover
                    duration-700
                    group-hover:scale-110
                  "
                />
              </div>

              <div className="p-7">
                <h3 className="text-xl font-semibold text-white mb-5">
                  {item.title}
                </h3>

                <h4 className="text-2xl font-bold text-primary mb-3">
                  {item.value}
                </h4>

                <p className="text-gray-400">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

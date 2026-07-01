import { HiOutlineArrowRight, HiCheckCircle } from "react-icons/hi2";
import { services } from "../../data/servicesData";
import Heading from "../ui/Heading";

const ServicesList = () => {
  return (
    <section className="py-[60px]">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="mb-14 text-center">
          <Heading
            children1="NOS EXPERTISES"
            children2="Nos services pour accélérer votre"
            textAlign="center"
          ></Heading>

          <p className="mt-4 text-gray-400">
            Des solutions complètes adaptées à vos objectifs business.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group flex flex-col rounded-2xl border border-[#16356A] bg-[#071126] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-primary"
              >
                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#16356A] bg-[#09162D]">
                  <Icon className="text-3xl text-primary" />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-semibold text-white">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-sm leading-7 text-gray-400">
                  {service.longDescription}
                </p>

                {/* List */}
                <ul className="mt-6 space-y-3">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-gray-300"
                    >
                      <HiCheckCircle className="text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button className="mt-auto flex items-center gap-2 pt-8 text-primary transition-all group-hover:gap-3">
                  En savoir plus
                  <HiOutlineArrowRight />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;

import Heading from "../ui/Heading";
import { services } from "../../data/servicesData";
import { Link } from "react-router-dom";
function Services() {
  return (
    <div className="container py-[60px]">
      <Heading
        children1="NOS SERVICES"
        children2="Des solutions complètes pour booster votre marque"
        textAlign="center"
      ></Heading>

      <div className="mx-auto max-w-7xl mt-[30px] ">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="
                  group
                  rounded-2xl
                  border
                  border-[#1B2943]
                  bg-[#101826]
                  p-7
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-[#0057B7]
                  hover:bg-[#131E2F]
                  hover:shadow-[0_0_30px_rgba(0,87,183,.20)]
                "
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl">
                  <Icon
                    size={30}
                    className="text-[#0057B7] transition group-hover:text-[#FFD700]"
                  />
                </div>

                <h3 className="mb-3 text-xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="leading-7 text-slate-400">
                  {service.description}
                </p>
                <div className="mt-[20px]"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Services;

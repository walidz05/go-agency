import { features } from "../../data/featuresData";

const Features = () => {
  return (
    <section className="py-[60px]">
      <div className="container mx-auto px-5">
        <div className="grid overflow-hidden rounded-2xl border border-[#153A73] bg-[#071126] md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className={`p-8 ${
                  index !== features.length - 1
                    ? "lg:border-r border-[#153A73]"
                    : ""
                }`}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#153A73] bg-[#0B1834]">
                  <Icon className="text-3xl text-secondary" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;

import { aboutContent, stats } from "../../data/aboutData";
import aboutImage from "../../assets/images/apropos/aboutImage.webp";

function Hero() {
  return (
    <section className="py-[60px]">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="text-sm uppercase  text-secondary font-semibold">
              {aboutContent.badge}
            </span>

            <h2 className="mt-4 text-3xl lg:text-5xl font-bold text-white leading-tight">
              {aboutContent.title}{" "}
              <span className="text-yellow-400">{aboutContent.highlight}</span>
            </h2>

            <p className="mt-6 max-w-xl text-sm sm:text-lg leading-8 text-gray-400">
              {aboutContent.description}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {stats.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.id}>
                    <div className="w-14 h-14 rounded-xl border border-yellow-400/30 flex items-center justify-center">
                      <Icon className="text-yellow-400 text-2xl" />
                    </div>

                    <h3 className="mt-4 text-3xl font-bold text-blue-500">
                      {item.number}
                    </h3>

                    <p className="mt-2 text-gray-400 text-sm">{item.title}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right */}
          <div>
            <img
              loading="lazy"
              src={aboutImage}
              alt="About"
              className="w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

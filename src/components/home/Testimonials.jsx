import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { testimonialsData } from "../../data/testimonialsData";
import Heading from "../ui/Heading";

const Testimonials = () => {
  return (
    <section className="py-[60px] px-6 container">
      <Heading
        children1="que nous-mémes."
        children2="ils parlent mieux de nous"
        textAlign="center"
      ></Heading>
      <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-[30px]">
        {testimonialsData.map((item) => {
          const Logo = item.logo;

          const text = item.text.replace(
            item.highlight,
            `__${item.highlight}__`
          );

          return (
            <div
              key={item.id}
              className="rounded-2xl border border-[#1b2a42] bg-[#081322] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500"
            >
              <FaQuoteLeft className="mb-5 text-3xl text-blue-600" />

              <div className="mb-6 flex gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={14} />
                ))}
              </div>

              <p className="leading-8 text-gray-300">
                {text.split("__").map((part, index) =>
                  index % 2 ? (
                    <span key={index} className="font-semibold text-blue-500">
                      {part}
                    </span>
                  ) : (
                    part
                  )
                )}
              </p>

              <div className="my-8 h-[2px] w-16 bg-blue-600"></div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-12 w-12 rounded-full border-2 border-blue-500 object-cover"
                  />

                  <div>
                    <h4 className="font-semibold text-white">{item.name}</h4>

                    <p className="text-sm text-gray-500">{item.role}</p>

                    <p className="text-sm text-blue-500">{item.company}</p>
                  </div>
                </div>

                <Logo className="text-3xl text-white" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;

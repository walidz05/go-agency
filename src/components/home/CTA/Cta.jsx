import { FaArrowRight } from "react-icons/fa";
import { ctaData } from "../../../data/CTAData";
import Button from "../../ui/Button";

export default function Cta() {
  const Icon = ctaData.icon;

  return (
    <section className="">
      <div className="container mx-auto ">
        <div className="relative overflow-hidden rounded-3xl border border-[#164EBC] bg-[#07132A] px-8 py-8">
          {/* Glow Left */}
          <div className="absolute -left-20 top-1/2 h-52 w-52 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[120px]" />

          {/* Glow Right */}
          <div className="absolute -right-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[130px]" />

          {/* Decorative Circle */}
          <div className="absolute right-64 top-0 h-72 w-72 rounded-full border border-blue-500/20" />
          <div className="absolute right-60 top-6 h-72 w-72 rounded-full border border-blue-500/10" />

          {/* Small Dot */}

          <div className="relative flex flex-col items-center justify-between gap-8 lg:flex-row">
            {/* Left */}
            <div className="flex items-center gap-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-blue-500/30 bg-[#0B1E42] shadow-[0_0_35px_rgba(59,130,246,.35)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 text-[#04101D]">
                  <Icon size={22} />
                </div>
              </div>

              <div>
                <h2 className="sm:text-3xl font-bold text-white">
                  {ctaData.title}
                </h2>

                <p className="mt-2 text-sm sm:text-lg text-slate-400">
                  {ctaData.description}
                </p>
              </div>
            </div>

            {/* Button */}

            <Button className="btn btn-secondary">
              {ctaData.button}{" "}
              <FaArrowRight className="transition duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

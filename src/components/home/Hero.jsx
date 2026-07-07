import heroImg from "../../assets/images/heor-right.webp";
import Button from "../ui/Button";
import {
  RiSparkling2Line,
  RiShieldCheckLine,
  RiFlashlightLine,
  RiLock2Line,
} from "react-icons/ri";
function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#040814] py-[60px]">
      {/* Glow */}
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-700/20 blur-[160px]" />

      <div className="container items-center sm:flex sm:min-h-min h-[80vh]">
        {/* Left */}
        <div className="sm:w-[55%] flex flex-col gap-3 items-baseline">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#1A3D73] bg-[#08152D] px-5 py-3 shadow-[0_0_25px_rgba(0,102,255,0.15)]">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0C1E3F] shadow-[0_0_15px_rgba(0,102,255,0.35)]">
              <RiSparkling2Line className="text-lg text-secondary" />
            </div>

            <span className="text-[11px] font-semibold uppercase tracking-[2px] text-secondary">
              Agence de communication
            </span>
          </div>
          <h1
            className=" lg:w-full
                        text-3xl
                        leading-tight
                        font-bold
                        text-white      
                        lg:text-5xl
                        "
          >
            Nous transformons votre
            <span className="text-secondary leading-normal  mr-2 ml-2">
              communication
            </span>
            <br />
            en moteur <span className="text-secondary">de croissance</span>
          </h1>

          <p className=" text-[12px]  sm:text-lg max-w-xl text-sm leading-8 text-gray-200 font-Manrope">
            Stratégie, contenu, publicité et technologie :{" "}
            <span className="text-white/80 font-bold">
              tout ce qu'il faut pour scaler votre marque.
            </span>
          </p>

          <div className="relative z-10 mt-5 sm:mt-10 flex flex-col gap-4 sm:flex-row sm:w-full w-[80%] ">
            <Button className="btn btn-primary ">Découvrir nos services</Button>

            <Button className="btn btn-secondary">
              Discutons de votre projet
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-8 text-white">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#16356A] bg-[#08152D]">
                <RiShieldCheckLine className="text-lg text-secondary" />
              </div>

              <span className="text-sm font-medium">Audit gratuit</span>
            </div>

            <div className="hidden h-8 w-px bg-[#1A3D73] md:block"></div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#16356A] bg-[#08152D]">
                <RiFlashlightLine className="text-lg text-secondary" />
              </div>

              <span className="text-sm font-medium">Réponse sous 24h</span>
            </div>

            <div className="hidden h-8 w-px bg-[#1A3D73] md:block"></div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#16356A] bg-[#08152D]">
                <RiLock2Line className="text-lg text-secondary" />
              </div>

              <span className="text-sm font-medium">Sans engagement</span>
            </div>
          </div>

          {/* Stats */}
        </div>

        {/* Right */}

        <div className="relative z-10 hidden lg:flex lg:w-[45%] items-center justify-center">
          {/* Blue Glow */}

          <div className="absolute h-[500px] w-[500px] rounded-full bg-blue-700/30 blur-[120px]" />

          {/* Phone */}

          <img
            src={heroImg}
            alt="heroImg"
            className="z-10 "
            fetchPriority="high"
            decoding="async"
          />

          {/* Floating Card 1 - Client Satisfaction */}
          <div className="absolute top-10 left-0 z-30 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl px-5 py-4 shadow-2xl animate-float">
            <div className="text-yellow-400 text-lg tracking-wide">★★★★★</div>

            <h3 className="mt-2 text-3xl font-bold text-white">98%</h3>

            <p className="text-sm text-gray-300">
              Client <br /> Satisfaction
            </p>
          </div>

          {/* Floating Card 2 - Leads */}
          <div className="absolute bottom-24 left-8 z-30 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl px-5 py-4 shadow-2xl animate-float-delay">
            <h3 className="text-3xl font-bold text-secondary">+125</h3>

            <p className="mt-1 text-white font-semibold">Leads</p>

            <p className="text-sm text-gray-300">This Month</p>
          </div>

          {/* Floating Card 3 - Partners */}
          <div className="absolute top-36 right-0 z-30 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl px-5 py-4 shadow-2xl animate-float-slow">
            <div className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>

              <span className="text-white font-semibold">Google Partner</span>
            </div>

            <div className="mt-3 flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-blue-500"></div>

              <span className="text-white font-semibold">Meta Partner</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

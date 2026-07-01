import {
  RiMailLine,
  RiPhoneLine,
  RiMapPinLine,
  RiTimeLine,
  RiFlashlightLine,
  RiShieldCheckLine,
  RiLock2Line,
} from "react-icons/ri";
import { HiOutlineArrowRight } from "react-icons/hi2";

const Hero = () => {
  return (
    <section className="py-[60px]">
      <div className="container mx-auto">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left */}
          <div>
            <span className="text-secondary text-sm font-semibold uppercas">
              Contactez-nous
            </span>

            <h2 className="mt-4 text-4xl font-bold text-white leading-tight">
              Parlons de votre projet
              <br />
              et <span className="text-secondary">concrétisons vos idées.</span>
            </h2>

            <p className="mt-6 max-w-xl text-sm sm:text-lg leading-8 text-gray-400">
              Une question, un projet ou simplement envie d'échanger ? Notre
              équipe est à votre écoute pour vous accompagner vers le succès.
            </p>

            {/* Features */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#16356A] bg-[#09152D]">
                  <RiFlashlightLine className="text-2xl text-secondary" />
                </div>

                <h4 className="mt-4 font-semibold text-white">
                  Réponse rapide
                </h4>

                <p className="mt-2 text-sm text-gray-400">
                  Nous vous répondons sous 24h maximum.
                </p>
              </div>

              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#16356A] bg-[#09152D]">
                  <RiShieldCheckLine className="text-2xl text-primary" />
                </div>

                <h4 className="mt-4 font-semibold text-white">
                  Sans engagement
                </h4>

                <p className="mt-2 text-sm text-gray-400">
                  Échangeons librement sur vos objectifs.
                </p>
              </div>

              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#16356A] bg-[#09152D]">
                  <RiLock2Line className="text-2xl text-primary" />
                </div>

                <h4 className="mt-4 font-semibold text-white">
                  Confidentialité
                </h4>

                <p className="mt-2 text-sm text-gray-400">
                  Vos informations sont 100% sécurisées.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-[#16356A] bg-[#071126] p-8">
            <h3 className="mb-8 text-2xl font-semibold text-white">
              Envoyez-nous un message
            </h3>

            <form className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Nom complet"
                  className="rounded-lg border border-[#16356A] bg-[#09152D] px-4 py-3 text-white outline-none focus:border-primary"
                />

                <input
                  type="email"
                  placeholder="Email professionnel"
                  className="rounded-lg border border-[#16356A] bg-[#09152D] px-4 py-3 text-white outline-none focus:border-primary"
                />

                <input
                  type="text"
                  placeholder="Entreprise"
                  className="rounded-lg border border-[#16356A] bg-[#09152D] px-4 py-3 text-white outline-none focus:border-primary"
                />

                <input
                  type="tel"
                  placeholder="Téléphone"
                  className="rounded-lg border border-[#16356A] bg-[#09152D] px-4 py-3 text-white outline-none focus:border-primary"
                />
              </div>

              <select className="w-full rounded-lg border border-[#16356A] bg-[#09152D] px-4 py-3 text-gray-400 outline-none focus:border-primary">
                <option>Service qui vous intéresse</option>
                <option>Marketing</option>
                <option>Social Media</option>
                <option>Site Web</option>
                <option>Production Vidéo</option>
              </select>

              <textarea
                rows={6}
                placeholder="Parlez-nous de votre projet..."
                className="w-full rounded-lg border border-[#16356A] bg-[#09152D] px-4 py-3 text-white outline-none focus:border-primary"
              />

              <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-4 font-semibold text-black transition hover:opacity-90">
                Envoyer le message
                <HiOutlineArrowRight />
              </button>

              <p className="text-center text-xs text-gray-500">
                En envoyant ce formulaire, vous acceptez notre politique de
                confidentialité.
              </p>
            </form>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="mt-12 grid gap-5 rounded-2xl border border-[#16356A] bg-[#071126] p-8 md:grid-cols-2 xl:grid-cols-4">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#09152D]">
              <RiMailLine className="text-2xl text-primary" />
            </div>

            <div>
              <h4 className="font-semibold text-white">Email</h4>
              <p className="text-gray-400">contact@gostudy.agency</p>
              <span className="text-sm text-gray-500">Réponse sous 24h</span>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#09152D]">
              <RiPhoneLine className="text-2xl text-primary" />
            </div>

            <div>
              <h4 className="font-semibold text-white">Téléphone</h4>
              <p className="text-gray-400">+212 6 12 34 56 78</p>
              <span className="text-sm text-gray-500">
                Lun - Ven : 9h00 - 18h00
              </span>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#09152D]">
              <RiMapPinLine className="text-2xl text-primary" />
            </div>

            <div>
              <h4 className="font-semibold text-white">Adresse</h4>
              <p className="text-gray-400">123 Avenue Hassan II</p>
              <span className="text-sm text-gray-500">Casablanca, Maroc</span>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#09152D]">
              <RiTimeLine className="text-2xl text-primary" />
            </div>

            <div>
              <h4 className="font-semibold text-white">Horaires</h4>
              <p className="text-gray-400">Lun - Ven : 9h00 - 18h00</p>
              <span className="text-sm text-gray-500">Sam : 10h00 - 14h00</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

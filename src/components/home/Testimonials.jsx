import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { testimonialsData } from "../../data/testimonialsData";
import Heading from "../ui/Heading";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section className="container py-[60px]">
      <Heading
        children1="ILS NOUS FONT CONFIANCE."
        children2="Découvrez pourquoi nos clients nous recommandent"
        textAlign="center"
      />

      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        spaceBetween={24}
        speed={800}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        className="mt-10 pb-14"
      >
        {testimonialsData.map((item) => {
          const text = item.text.replace(
            item.highlight,
            `__${item.highlight}__`
          );

          return (
            <SwiperSlide key={item.id} className="mt-10 pb-24">
              <div
                className="
                  h-full
                  min-h-[360px]
                  rounded-2xl
                  border
                  border-[#1b2a42]
                  bg-[#081322]
                  p-7
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-[#0057B7]
                  hover:shadow-[0_20px_60px_rgba(0,87,183,.25)]
                  flex
                  flex-col
                "
              >
                <FaQuoteLeft className="mb-5 text-3xl text-[#0057B7]" />

                <div className="mb-6 flex gap-1 text-[#FFD700]">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={14} />
                  ))}
                </div>

                <p className="flex-1 leading-8 text-gray-300">
                  {text.split("__").map((part, index) =>
                    index % 2 ? (
                      <span
                        key={index}
                        className="font-semibold text-[#0057B7]"
                      >
                        {part}
                      </span>
                    ) : (
                      part
                    )
                  )}
                </p>

                <div className="my-8 h-[2px] w-16 bg-[#0057B7]" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;

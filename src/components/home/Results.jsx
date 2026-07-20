import { useState } from "react";
import Heading from "../ui/Heading";
import { resultsData } from "../../data/resultsData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import { IoClose } from "react-icons/io5";

import "swiper/css";
import "swiper/css/pagination";

export default function Results() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="relative overflow-hidden py-[60px]">
      <div className="container">
        <Heading
          children1="NOS RÉSULTATS"
          children2="Des résultats concrets, mesurables et durables"
          textAlign="center"
        />

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          loop
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="mt-10 pb-14"
        >
          {resultsData.map((item) => (
            <SwiperSlide key={item.id} className="mt-10 pb-24">
              <div
                className="
                  rounded-3xl
                  border
                  border-[#16345E]
                  bg-[#081322]
                  p-3
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-blue-500
                "
              >
                <div className="aspect-[16/9] overflow-hidden rounded-2xl bg-[#081322] flex items-center justify-center">
                  <img
                    src={item.img}
                    alt={item.title}
                    onClick={() => setSelectedImage(item.img)}
                    className="
                      h-full
                      w-full
                      object-contain
                      cursor-zoom-in
                      transition-transform
                      duration-500
                      hover:scale-105
                    "
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Modal */}
        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            className="
              fixed
              inset-0
              z-[9999]
              flex
              items-center
              justify-center
              bg-black/90
              backdrop-blur-md
              p-6
            "
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="
                absolute
                top-6
                right-6
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-white/10
                text-white
                transition
                hover:bg-white/20
              "
            >
              <IoClose size={28} />
            </button>

            <img
              src={selectedImage}
              alt="Preview"
              onClick={(e) => e.stopPropagation()}
              className="
                max-h-[90vh]
                max-w-[90vw]
                rounded-2xl
                object-contain
                shadow-[0_30px_80px_rgba(0,0,0,.6)]
              "
            />
          </div>
        )}
      </div>
    </section>
  );
}

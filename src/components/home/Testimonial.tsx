"use client";
import { useEffect } from "react";
import { Image } from "@heroui/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { testimonials } from "@/lib/constants/testimonial";

export default function TestimonialSection() {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      
      .testimonial-swiper .swiper-slide {
        transition: all 300ms ease;
        opacity: 0.5;
        transform: scale(0.8);
      }

      .testimonial-swiper .swiper-slide-active {
        opacity: 1;
        transform: scale(1);
      }

      .testimonial-swiper .swiper-pagination {
        position: relative;
        margin-top: 40px;
      }

      .testimonial-swiper .swiper-pagination-bullet {
        width: 12px;
        height: 12px;
        background: #e2e8f0;
        opacity: 1;
        margin: 0 6px;
        transition: all 300ms ease;
      }

      .testimonial-swiper .swiper-pagination-bullet-active {
        background: #FF3E54;
        width: 24px;
        border-radius: 6px;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="max-w-screen-2xl mx-auto px-4 md:px-0 space-y-6 md:space-y-12">
      <div className="text-center">
        <h2 className="text-secondary capitalize text-base md:text-2xl font-bold">
          \ From our Customers \
        </h2>
        <h1 className="text-2xl md:text-4xl font-bold ">Testimonials</h1>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        centeredSlides={true}
        slidesPerView={1.2}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1.8,
          },
          1024: {
            slidesPerView: 2.2,
          },
        }}
        className="testimonial-swiper"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-full h-20 w-20 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {testimonial.position}
                  </p>
                </div>
              </div>
              <blockquote className="text-gray-700 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

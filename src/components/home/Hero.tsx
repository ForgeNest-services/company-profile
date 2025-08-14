"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import ViewMoreButton from "../commons/ViewMoreButton";
import { motion } from "framer-motion";
import { fadeIn, textVariant, cardVariant } from "@/lib/motion";
export default function Hero() {
  return (
    <section className="max-w-screen-xl mx-auto space-y-6 md:space-y-12 px-4 md:px-0">
      <div className="flex flex-col-reverse md:flex-row justify-center md:justify-between items-center gap-y-6 relative">
        <div className="space-y-6 max-w-lg ">
          <h2 className="text-secondary capitalize text-base md:text-2xl font-bold">
            \ we are here \
          </h2>
          {/* decorator */}
          <div className="absolute top-20 -left-20 z-0">
            <svg
              width="200"
              height="200"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle opacity="0.1" cx="100" cy="100" r="100" fill="#FF3E54" />
            </svg>
          </div>

          <motion.h1
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold "
          >
            Better Insights For Business Growth
          </motion.h1>
          <div>
            <ViewMoreButton />
          </div>
        </div>
        <Image
          src="/common/hero.svg"
          alt=""
          width={600}
          height={600}
          className="object-contain "
        />
        <div className="hidden md:block absolute -bottom-20 left-1/2 -translate-x-1/2 z-0">
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.5" cx="100" cy="100" r="100" fill="#E7E9EE" />
          </svg>
        </div>
      </div>
    </section>
  );
}

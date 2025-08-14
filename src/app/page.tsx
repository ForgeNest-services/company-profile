import Decorator from "@/components/commons/Decorators";
import AboutUs from "@/components/home/AboutUs";
import BlogSection from "@/components/home/Blogs";
import Contact from "@/components/home/Contact";
import Expertise from "@/components/home/Expertise";
import GetInTouch from "@/components/home/GetInTouch";
import Hero from "@/components/home/Hero";
import Leaders from "@/components/home/Leaders";
import Process from "@/components/home/Process";
import TestimonialSection from "@/components/home/Testimonial";
import WhatWeDo from "@/components/home/WhatWeDo";

export default function Home() {
  return (
    <main className="max-w-screen-4xl mx-auto space-y-6 md:space-y-12 lg:space-y-24 mb-20 text-primary relative">
      <Hero />
      <Decorator />
      <div className="bg-offWhite py-11">
        <AboutUs />
      </div>
      <Process />
      <WhatWeDo />
      <Expertise />
      <div className="bg-offWhite py-11">
        {" "}
        <Leaders />
      </div>
      <div className="bg-primary py-11">
        <Contact />
      </div>
      <TestimonialSection />
      <BlogSection />
      <GetInTouch />
    </main>
  );
}

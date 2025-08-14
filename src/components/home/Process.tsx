import processSteps from "@/lib/constants/process";
import Image from "next/image";

export default function Process() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 md:px-0 space-y-6 md:space-y-12">
      <div className="text-center">
        <h2 className="text-secondary capitalize text-base md:text-2xl font-bold">
          \ Planning \
        </h2>
        <h1 className="text-2xl md:text-4xl  font-bold ">Our Process</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-3 md:gap-x-12">
        {processSteps.map((step) => (
          <div
            key={step.id}
            className="rounded-3xl bg-offWhite p-4 md:p-12 shadow-sm border md:border-none space-y-6 relative"
          >
            <Image src={step.icon} alt={step.title} width={50} height={50} />
            <div className="absolute top-0 right-3 md:right-10 font-extrabold text-2xl md:text-5xl opacity-10">
              {step.number}
            </div>

            <h1 className="text-sm md:text-xl font-extrabold">{step.title}</h1>
            <div>
              <svg
                width="90"
                height="6"
                viewBox="0 0 90 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="60" height="6" rx="3" fill="#FF3E54" />
                <rect x="70" width="20" height="6" rx="3" fill="#FF3E54" />
              </svg>
            </div>
            <p className="text-xs md:text-base font-medium max-w-56 text-justify">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

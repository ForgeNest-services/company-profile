import services from "@/lib/constants/expertise";
import Image from "next/image";

export default function Expertise() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 md:px-0 space-y-6 md:space-y-12">
      <div className="text-center">
        <h2 className="text-secondary capitalize text-base md:text-2xl font-bold">
          \ Services \
        </h2>
        <h1 className="text-2xl md:text-4xl font-bold ">Our Expertice</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-3 md:gap-x-12">
        {services.map((data) => (
          <div
            key={data.id}
            className="rounded-3xl bg-offWhite p-4 md:p-12 shadow-sm border md:border-none space-y-6 relative"
          >
            <Image src={data.icon} alt={data.title} width={50} height={50} />

            <h1 className="text-sm md:text-xl font-extrabold">{data.title}</h1>
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
              {data.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

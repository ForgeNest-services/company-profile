import leaders from "@/lib/constants/leaders";
import Image from "next/image";

export default function Leaders() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 md:px-0 space-y-6 md:space-y-12">
      <div className="text-center">
        <h2 className="text-secondary capitalize text-base md:text-2xl font-bold">
          \ Team \
        </h2>
        <h1 className="text-2xl md:text-4xl  font-bold ">Our Leaders</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-3 md:gap-x-12">
        {leaders.map((team) => (
          <div
            key={team.id}
            className="p-4 rounded-3xl border md:border-0 shadow-lg"
          >
            <Image
              src={team.image}
              alt=""
              width={500}
              height={500}
              className="object-cover object-center h-48 w-full mx-auto"
              priority
            />
            <h1 className="text-base md:text-xl font-bold text-secondary text-center">
              {team.name}
            </h1>
            <p className="uppercase text-sm md:text-base font-medium text-center">
              {team.position}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

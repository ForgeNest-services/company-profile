import Link from "next/link";
import { Button } from "../ui/button";

export default function GetInTouch() {
  return (
    <section className="max-w-screen-lg mx-auto px-4 md:px-0">
      <div className="p-10 bg-primary flex flex-col justify-center items-center gap-y-6 rounded-3xl">
        <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white text-center">
          “Some of the History of Our Company is that we are Catching up through
          Video”
        </p>
        <Link href="">
          <Button className="bg-secondary text-base font-semibold rounded-3xl w-full">
            Get In Touch
          </Button>
        </Link>
      </div>
    </section>
  );
}

import Link from "next/link";

export default function ViewMoreButton() {
  return (
    <div>
      <Link
        href=""
        className="bg-secondary font-semibold rounded-3xl px-3 py-2 md:py-3 md:px-5 text-white text-sm md:text-base inline-block"
      >
        View More
      </Link>
    </div>
  );
}

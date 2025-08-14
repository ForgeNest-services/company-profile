import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        width={200}
        height={200}
        alt="Forgenest Services Nepal"
        src="/common/logofull.png"
        priority={true}
      />
    </Link>
  );
}

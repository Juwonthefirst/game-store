import Link from "next/link";

import { bangers } from "@/utils/fonts";

const CtaButton = () => {
  return (
    <Link
      className={`block border-2 w-fit md:text-lg lg:text-xl border-accent bg-accent/40 py-1 px-3 rounded-xl [&:hover,&:active]:bg-accent transition-colors ${bangers.className}`}
      href="shop"
    >
      Shop now
    </Link>
  );
};

export default CtaButton;

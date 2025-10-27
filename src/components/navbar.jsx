"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useGlitch } from "react-powerglitch";

import { bangers } from "@/utils/fonts";
import glitchConfig from "@/utils/glitch-config";

const NavBar = () => {
  const location = usePathname();
  const glitch = useGlitch(glitchConfig);
  const currentPage = location.split("/")[1] || "/";
  const className =
    "p-2 rounded-full items-center data-[iscurrent=true]:text-accent-light data-[iscurrent=true]:scale-125";
  return (
    <div className="fixed flex items-center justify-between top-0 left-0 z-10 w-full px-6 py-1 backdrop-blur-md backdrop-saturate-150">
      <div ref={glitch.ref} className="flex gap-1">
        <Image width={24} height={24} src={"/vite.svg"} alt="vite games logo" />
        <p
          className={`${bangers.className} hidden md:block text-lg lg:text-xl`}
        >
          Vite Games
        </p>
      </div>

      <nav className="flex items-center text-sm  gap-4 *:hover:text-accent-light">
        <Link
          className={className}
          href="/"
          data-iscurrent={currentPage === "/"}
        >
          <p>Home</p>
        </Link>
        <Link
          className={className}
          href="shop"
          data-iscurrent={currentPage === "shop"}
        >
          <p>Shop</p>
        </Link>
        <Link
          className={className}
          href="cart"
          data-iscurrent={currentPage === "cart"}
        >
          <p>Cart</p>
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;

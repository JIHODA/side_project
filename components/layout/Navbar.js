"use client";

import Image from "next/image";
import mainlogo from "@/public/assets/무배경_가로로고4_white.png";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollTop = window.scrollY;
      setIsHidden(currentScrollTop > lastScrollTop);
      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollTop]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed p-5 top-0 w-full transition-opacity duration-500 ease-in-out ${
        isHidden ? "opacity-0" : "opacity-100"
      } w-full flex items-center justify-between`}
    >
      <div className="">
        <Image
          src={mainlogo}
          alt="logo"
          priority
          className="m-auto md:m-0 cursor-pointer"
          onClick={scrollToTop}
        />
      </div>
    </nav>
  );
}

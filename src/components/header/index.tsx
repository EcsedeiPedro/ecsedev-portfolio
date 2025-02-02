"use client";

import Link from "next/link";
import { Container } from "../container";
import { EcsedevLogo } from "../logo";
import navItems from "./mock-data";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { MobileNav } from "./mobile-nav";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 py-6 px-4 z-[999] transition-all duration-300 ${
        isScrolled ? "backdrop-blur-sm" : ""
      }`}
    >
      <Container className="flex justify-between items-center">
        <Link href="/">
          <EcsedevLogo className="max-w-[140px] lg:max-w-full" fill="#DC2626" />
        </Link>

        {/* desktop */}
        <ul className="hidden lg:flex gap-6">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="text-white font-medium text-sm lowercase"
            >
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>

        <Button className="hidden lg:block bg-wine text-white">
          contact me
        </Button>

        {/* mobile */}
        <MobileNav />
      </Container>
    </nav>
  );
};

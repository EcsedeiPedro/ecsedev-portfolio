import Link from "next/link";
import { Container } from "../container";
import { EcsedevLogo } from "../logo";
import navItems from "./mock-data";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from "../ui/sheet";

export const Header = () => {
  return (
    <nav className="fixed w-full top-0 bg-transparent py-6 px-4">
      <Container className="flex justify-between items-center">
        <Link href="/">
          <EcsedevLogo className="max-w-[140px] lg:max-w-full" fill="#BE3144" />
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
          Entre em Contato
        </Button>

        {/* mobile */}
        <Sheet>
          <SheetTrigger className="block lg:hidden">
            <Menu className="block" color="white" />
          </SheetTrigger>

          <SheetContent>
            <SheetTitle />

            <SheetDescription />

            <ul className="flex flex-col gap-6 lg:hidden py-10 px-4">
              {navItems.map((item) => (
                <li
                  key={item.name}
                  className="text-cerise font-medium text-sm lowercase"
                >
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </Container>
    </nav>
  );
};

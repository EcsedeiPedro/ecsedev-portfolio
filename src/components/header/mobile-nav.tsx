import { Menu } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from "../ui/sheet";
import Link from "next/link";
import navItems from "./mock-data";
import { Button } from "../ui/button";

export const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="block lg:hidden">
        <Menu className="block" color="white" />
      </SheetTrigger>

      <SheetContent className="z-[1111] bg-white">
        <SheetTitle />

        <SheetDescription />

        <ul className="flex flex-col gap-6 lg:hidden py-10 px-4">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="text-cerise font-medium text-lg lowercase"
            >
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>

        <Button className="block lg:hidden bg-wine text-white">
          contact me
        </Button>
      </SheetContent>
    </Sheet>
  );
};

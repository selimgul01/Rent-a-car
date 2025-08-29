import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { HeaderData } from "@/constans";
import HeaderItem from "./HeaderItem";
const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon className="lg:hidden flex" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between mx-auto mt-8 space-y-6">
            {
                HeaderData?.map((item,i) => (
                    <HeaderItem key={i}  label= {item.label} href={item.href} />
                ))
            }
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;

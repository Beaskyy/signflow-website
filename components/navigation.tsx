import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navigation } from "@/lib/data";
import { AlignJustify } from "lucide-react";
import Link from "next/link";

const Navigation = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <AlignJustify className="md:hidden size-5 text-[#333333]" />
      </SheetTrigger>
      <SheetContent side="left" className="p-5 pt-10">
        {navigation.map((item: { name: string; href: string }) => (
          <Link key={item.name} href={item.href} className="text-[#333333] font-medium text-sm tracking-[-0.2px] hover:text-[#000000] active:text-[#000000]">
            {item.name}
          </Link>
        ))} 
      </SheetContent>
    </Sheet>
  );
};

export default Navigation;

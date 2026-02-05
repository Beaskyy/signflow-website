import { navigation } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "./navigation";

const Header = () => {
  return (
    <div className="flex justify-between items-center h-20 p-5">
      <Image src="/logo.svg" alt="logo" width={147} height={40} className="md:w-[147px] md:h-[40px] w-[100px] h-[28px]" />
      <div className="hidden md:flex items-center gap-10">
        <div className="flex items-center gap-8">
          {navigation.map((item: { name: string; href: string }) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[#333333] font-medium text-sm tracking-[-0.2px] hover:text-[#000000] active:text-[#000000]"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="w-[121px] h-11 rounded-full bg-[#222222] text-white flex justify-center items-center gap-1 hover:shadow-2xl cursor-pointer">
          <p className="text-base tracking-[-0.3px] font-medium">Try Free</p>
          <ArrowRight className="size-5" />
        </div>
      </div>
      <div className="md:hidden">
      <Navigation />
      </div>
    </div>
  );
};

export default Header;

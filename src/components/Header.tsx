"use client";

import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"; // Assuming you might add this back later
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";


export default function Header() {

  return (
    <header className="absolute top-0 left-0 w-full z-20 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8"> {/* Using standard container with padding */}
        <div className="flex justify-between items-center py-4 md:py-6">
          {/* Logo - Increased Size */}
          <Link href="/" className="z-50">
            {/* --- SIZE CHANGE IS HERE --- */}
            <div className="relative w-20 h-20 sm:w-28 sm:h-28"> 
            {/* --------------------------- */}
              <Image
                src="/logo.svg" 
                alt="Acoustc Den Logo" 
                fill
                className="object-contain"
              />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./logo";
import Container from "./container";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react"; 

const NAV_LINKS = [
  { name: "Features", href: "#" },
  { name: "Products", href: "#" },
  { name: "Socials", href: "#" },
  { name: "Pricing", href: "#" },
];

const linkClass =
  "font-display text-sm text-neutral-600 transition-colors hover:text-neutral-900";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" border-b border-neutral-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <Container >
        <div className="flex items-center justify-between h-16">
          <Logo />

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className={linkClass}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="sm">
              Login
            </Button>
            <Button size="sm">Signup</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <Button size="sm">Signup</Button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-neutral-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div className="absolute bg-white w-full z-99 md:hidden border-t border-neutral-100 py-4 pb-6 space-y-4 animate-in fade-in slide-in-from-top-5 duration-200">
            <ul className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="block text-base font-medium text-neutral-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-2 pt-4 border-t border-neutral-100">
              <Button variant="outline" className="w-full">Login</Button>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;
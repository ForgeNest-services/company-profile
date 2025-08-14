"use client";

import Link from "next/link";
import Logo from "./Logo";
import { navLinks } from "@/lib/constants/navlinks";
import { Button } from "../ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white opacity-90 max-w-screen-4xl mx-auto px-4">
      <nav className="max-w-screen-2xl mx-auto flex justify-between items-center py-2">
        <Logo />
        {/* DESKTOP NAV */}
        <div className="hidden md:flex justify-center items-center gap-x-5">
          <ul className="flex justify-start items-center gap-x-6">
            {navLinks.map((item, index) => (
              <li key={index} className="text-primary text-base font-semibold">
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <Button className="bg-secondary text-base font-semibold rounded-3xl">
            Get In Touch
          </Button>
        </div>
        {/* Mobile Nav Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-primary" />
          ) : (
            <Menu className="h-6 w-6 text-primary" />
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 w-64 h-screen bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 space-y-6">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((item, index) => (
              <li key={index} className="text-primary text-base font-semibold">
                <Link href={item.href} onClick={() => setIsOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="">
            <Button
              className="bg-secondary text-base font-semibold rounded-3xl w-full"
              onClick={() => setIsOpen(false)}
            >
              Get In Touch
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

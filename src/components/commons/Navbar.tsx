"use client";

import { Link as ScrollLink } from "react-scroll";
import { useState, useEffect } from "react";
import { Menu, X, Sparkles, ArrowRight } from "lucide-react";
import Image from "next/image";

// Navigation links data
const navLinks = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },
  { label: "Services", to: "services" },
  { label: "Contact", to: "contact" },
];

// Mock Logo component
const Logo = () => (
  <div className="flex items-center space-x-3">
    <Image
      src="/logos/logonotxt.png"
      alt="Forgenest services"
      width={50}
      height={50}
    />
    <div className="hidden sm:block">
      <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Forgenest Services
      </div>
    </div>
  </div>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Intersection observer for active section
    const observerOptions = {
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe sections
    const sections = ["home", "about", "services", "contact"];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-white/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-screen-2xl w-full mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="relative z-10">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="group transition-transform duration-300 hover:scale-105 cursor-pointer inline-block"
          >
            <Logo />
          </ScrollLink>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex justify-center items-center gap-x-8">
          {/* Navigation Links */}
          <ul className="flex justify-start items-center gap-x-8">
            {navLinks.map((item, index) => {
              const isActive = activeSection === item.to;

              return (
                <li key={index} className="relative">
                  <ScrollLink
                    to={item.to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    spy={true}
                    className={`group relative text-base font-semibold transition-all duration-300 py-2 px-1 cursor-pointer ${
                      isActive
                        ? "text-blue-600"
                        : isScrolled
                        ? "text-slate-700 hover:text-blue-600"
                        : "text-white hover:text-blue-300"
                    }`}
                  >
                    {item.label}

                    {/* Active indicator */}
                    <div
                      className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${
                        isActive
                          ? "w-full opacity-100"
                          : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                      }`}
                    />

                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-blue-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-100 -z-10" />
                  </ScrollLink>
                </li>
              );
            })}
          </ul>

          {/* CTA Button */}
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className={`group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-base font-semibold rounded-xl px-6 py-2.5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 cursor-pointer inline-flex items-center ${
              !isScrolled ? "ring-2 ring-white/20" : ""
            }`}
          >
            <Sparkles className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
            Get In Touch
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </ScrollLink>
        </div>

        {/* Mobile Nav Button */}
        <button
          className="lg:hidden relative z-10 p-2 rounded-xl transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6">
            <Menu
              className={`absolute inset-0 w-6 h-6 transition-all duration-300 transform ${
                isOpen ? "rotate-180 scale-0" : "rotate-0 scale-100"
              } ${isScrolled ? "text-slate-700" : "text-white"}`}
            />
            <X
              className={`absolute inset-0 w-6 h-6 transition-all duration-300 transform ${
                isOpen ? "rotate-0 scale-100" : "rotate-180 scale-0"
              } ${isScrolled ? "text-slate-700" : "text-white"}`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 w-80 h-screen bg-gradient-to-br from-white via-blue-50 to-indigo-50 backdrop-blur-xl border-l border-white/20 shadow-2xl transform transition-all duration-300 ease-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile header */}
          <div className="flex items-center justify-between p-6 border-b border-white/20">
            <Logo />
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-xl hover:bg-white/20 transition-colors duration-200"
            >
              <X className="w-5 h-5 text-slate-700" />
            </button>
          </div>

          {/* Mobile navigation */}
          <div className="flex-1 px-6 py-8 space-y-6">
            <ul className="space-y-4">
              {navLinks.map((item, index) => {
                const isActive = activeSection === item.to;

                return (
                  <li key={index}>
                    <ScrollLink
                      to={item.to}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      onClick={() => setIsOpen(false)}
                      className={`group w-full text-left py-3 px-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-between cursor-pointer ${
                        isActive
                          ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                          : "text-slate-700 hover:bg-white/50 hover:text-blue-600"
                      }`}
                      style={{
                        animationDelay: `${index * 100}ms`,
                        animation: isOpen
                          ? `slideInRight 0.3s ease-out forwards`
                          : "none",
                      }}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      )}
                      <ArrowRight
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isActive
                            ? "text-white"
                            : "text-gray-400 group-hover:text-blue-500"
                        } group-hover:translate-x-1`}
                      />
                    </ScrollLink>
                  </li>
                );
              })}
            </ul>

            {/* Mobile CTA */}
            <div className="pt-6 border-t border-white/20">
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setIsOpen(false)}
                className="group w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 flex items-center justify-center cursor-pointer"
              >
                <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Get In Touch
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </ScrollLink>
            </div>

            {/* Mobile footer */}
            <div className="pt-8 text-center">
              <div className="text-sm text-gray-500 space-y-2">
                <p>Ready to start your project?</p>
                <div className="flex items-center justify-center space-x-2 text-blue-600">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="font-medium">
                    Available for new projects
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </header>
  );
}

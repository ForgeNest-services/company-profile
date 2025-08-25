"use client";

import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  ArrowUp,
  Sparkles,
  Heart,
  ExternalLink,
  Send,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    // Scroll to top button visibility
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    const element = document.querySelector("footer");
    if (element) observer.observe(element);

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "#",
      color: "hover:bg-blue-600",
      hoverColor: "group-hover:text-blue-400",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "#",
      color: "hover:bg-gray-700",
      hoverColor: "group-hover:text-gray-300",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "#",
      color: "hover:bg-blue-400",
      hoverColor: "group-hover:text-blue-300",
    },
  ];

  const quickLinks = [
    { name: "Home", action: scrollToTop },
    { name: "About", action: () => scrollToSection("about") },
    { name: "Services", action: () => scrollToSection("services") },
    { name: "Contact", action: () => scrollToSection("contact") },
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: "forgenestservices@gmail.com",
      color: "text-blue-400",
    },
    {
      icon: Phone,
      text: "+977 9868211546",
      color: "text-green-400",
    },
    {
      icon: MapPin,
      text: "Kathmandu, Nepal - Global Reach",
      color: "text-purple-400",
    },
  ];

  return (
    <>
      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
        </button>
      )}

      <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-700"></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animation: `float ${
                  5 + Math.random() * 3
                }s ease-in-out infinite alternate`,
              }}
            />
          ))}
        </div>

        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div
              className={`lg:col-span-2 space-y-8 transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              {/* Logo and brand */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">FN</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      ForgeNest
                    </h3>
                    <p className="text-gray-400 text-sm">Services Pvt. Ltd.</p>
                  </div>
                </div>

                <p className="text-gray-300 max-w-md leading-relaxed text-lg">
                  Building innovative digital solutions for the future.
                  We&apos;re passionate about creating technology that makes a
                  difference.
                </p>
              </div>

              {/* Contact info */}
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-4 text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <div
                      className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <contact.icon
                        className={`w-5 h-5 ${contact.color} group-hover:scale-110 transition-transform duration-300`}
                      />
                    </div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {contact.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Mission statement */}
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-start space-x-3">
                  <Sparkles className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      <span className="font-semibold text-white">
                        Our Mission:
                      </span>{" "}
                      To empower businesses with cutting-edge digital solutions
                      that drive growth and innovation in an ever-evolving
                      world.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div
              className={`space-y-6 transition-all duration-1000 delay-200 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <div className="w-2 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mr-3"></div>
                Quick Links
              </h3>

              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={link.action}
                      className="group flex items-center text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2"
                    >
                      <div className="w-1 h-1 bg-blue-400 rounded-full mr-3 group-hover:w-2 group-hover:bg-purple-400 transition-all duration-300"></div>
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Additional links */}
              <div className="pt-6 border-t border-white/10">
                <div className="space-y-3 text-sm">
                  <a
                    href="#"
                    className=" text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    Privacy Policy
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a
                    href="#"
                    className=" text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    Terms of Service
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links & Newsletter */}
            <div
              className={`space-y-8 transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              {/* Social links */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <div className="w-2 h-6 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mr-3"></div>
                  Follow Us
                </h3>

                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`group w-12 h-12 bg-white/10 ${social.color} rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg backdrop-blur-sm`}
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Newsletter signup */}
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h4 className="font-semibold text-white mb-3 flex items-center">
                  <Send className="w-4 h-4 mr-2 text-blue-400" />
                  Stay Updated
                </h4>
                <p className="text-sm text-gray-300 mb-4">
                  Get the latest news and insights delivered to your inbox.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Stats or awards */}
              <div className="text-center space-y-3">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  100+
                </div>
                <p className="text-sm text-gray-400">Happy Clients Worldwide</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 backdrop-blur-sm bg-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div
              className={`flex flex-col md:flex-row justify-between items-center gap-4 transition-all duration-1000 delay-500 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
            >
              <p className="text-gray-400 text-sm flex items-center">
                © {currentYear} ForgeNest Services Pvt. Ltd. Made with
                <Heart className="w-4 h-4 mx-1 text-red-400 animate-pulse" />
                in Nepal
              </p>

              <div className="flex items-center gap-4 text-sm">
                <span className="text-gray-500">Powered by Innovation</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Custom animations */}
        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-8px) rotate(180deg);
            }
          }
        `}</style>
      </footer>
    </>
  );
}

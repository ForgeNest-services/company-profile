import React from "react";

import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import { navLinks } from "@/lib/constants/navlinks";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8 px-4 md:px-0">
      <div className="max-w-screen-xl mx-auto  grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Navigation Links */}
        <div>
          <Logo />
          <ul className="font-semibold">
            {navLinks.map((link) => (
              <li key={link.href} className="mb-2">
                <Link href={link.href} className="hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul>
            <li className="flex items-center mb-2">
              <Mail className="mr-2" /> forgenestservices@gmail.com
            </li>
            <li className="flex items-center mb-2">
              <MapPin className="mr-2" /> Shankharapur-09, Kathmandu, Bagmati,
              Nepal
            </li>
            <li className="flex items-center mb-2">
              <Phone className="mr-2" /> (+977) 9868211546
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <ul className="flex space-x-4">
            <li>
              <a href="https://facebook.com" aria-label="Facebook">
                <Facebook />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" aria-label="Twitter">
                <Twitter />
              </a>
            </li>
            <li>
              <a href="https://instagram.com" aria-label="Instagram">
                <Instagram />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" aria-label="LinkedIn">
                <Linkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-8 border-white" />

      {/* Copyright Section */}
      <div className="text-center">
        &copy; {new Date().getFullYear()} Forgenest Services Pvt. Ltd. All
        rights reserved.
      </div>
    </footer>
  );
}

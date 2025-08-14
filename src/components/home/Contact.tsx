import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Send,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function Contact() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 md:px-0 space-y-6 md:space-y-12 pb-12">
      <div className="text-center">
        <h2 className="text-secondary capitalize text-base md:text-2xl font-bold">
          \ get In touch \
        </h2>
        <h1 className="text-2xl md:text-4xl font-bold text-white">
          Hey! Let's Have A Talk
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {/* Contact Form */}
        <div className="bg-offWhite p-6 rounded-3xl">
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm md:text-lg">
                Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Your Name"
                className="bg-gray-200 rounded-3xl"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm md:text-lg">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Your Email"
                className="bg-gray-200 rounded-3xl"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm md:text-lg">
                Phone
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Your Phone"
                className="bg-gray-200 rounded-3xl"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm md:text-lg">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Your Message"
                rows={4}
                className="bg-gray-200 rounded-3xl resize-none"
              />
            </div>
            <Button
              type="submit"
              className="bg-secondary hover:bg-secondary/90 text-sm md:text-base rounded-3xl text-white"
              size={"lg"}
            >
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </Button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="space-y-8">
          <div className="bg-zinc-900/50 p-6 rounded-3xl space-y-6">
            <h3 className="text-xl font-bold mb-4 text-white">
              Contact Information
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-secondary p-3 rounded-full">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-400">Phone</p>
                  <p className="text-white">+977 9868211546</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-secondary p-3 rounded-full">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-400">Email</p>
                  <p className="text-white">contact@forgenestservices.com.np</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-secondary p-3 rounded-full">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-400">Address</p>
                  <p className="text-white">Shankharapur 09, Kathmandu</p>
                </div>
              </div>
            </div>
            {/* Follow Us Section */}
            <div className="">
              <h3 className="text-xl font-bold mb-4 text-white">Follow Us</h3>
              <div className="flex gap-4">
                <Button size="icon" variant="secondary" asChild>
                  <a href="#">
                    <Facebook className="h-4 w-4" />
                  </a>
                </Button>
                <Button size="icon" variant="secondary" asChild>
                  <a href="#">
                    <Twitter className="h-4 w-4" />
                  </a>
                </Button>
                <Button size="icon" variant="secondary" asChild>
                  <a href="#">
                    <Instagram className="h-4 w-4" />
                  </a>
                </Button>
                <Button size="icon" variant="secondary" asChild>
                  <a href="#">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

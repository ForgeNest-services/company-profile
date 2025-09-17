"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Send,
  Loader2,
  CheckCircle,
} from "lucide-react";
import { submitContactForm, type ContactFormData } from '@/actions/contact';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({ type: 'error', message: 'Please fill in all required fields.' });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });
    
    try {
      const contactFormData: ContactFormData = {
        name: formData.name,
        email: formData.email,
        subject: 'Contact Form Inquiry',
        message: `Phone: ${formData.phone || 'Not provided'}\n\nMessage:\n${formData.message}`
      };
      
      const result = await submitContactForm(contactFormData);
      
      if (result.success) {
        setSubmitStatus({ type: 'success', message: result.message });
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        setSubmitStatus({ type: 'error', message: result.message });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({ type: 'error', message: 'An unexpected error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

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
          {/* Status Messages */}
          {submitStatus.type && (
            <div className={`p-4 rounded-2xl mb-6 ${submitStatus.type === 'success' ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
              <div className="flex items-center">
                {submitStatus.type === 'success' ? (
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                ) : (
                  <div className="w-5 h-5 rounded-full bg-red-500 mr-2" />
                )}
                <p className={`text-sm font-medium ${submitStatus.type === 'success' ? 'text-green-800' : 'text-red-800'}`}>
                  {submitStatus.message}
                </p>
              </div>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm md:text-lg">
                Name *
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                disabled={isSubmitting}
                required
                className="bg-gray-200 rounded-3xl disabled:opacity-50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm md:text-lg">
                Email *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                disabled={isSubmitting}
                required
                className="bg-gray-200 rounded-3xl disabled:opacity-50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm md:text-lg">
                Phone
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className="bg-gray-200 rounded-3xl disabled:opacity-50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm md:text-lg">
                Message *
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                disabled={isSubmitting}
                required
                className="bg-gray-200 rounded-3xl resize-none disabled:opacity-50"
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-secondary hover:bg-secondary/90 text-sm md:text-base rounded-3xl text-white disabled:opacity-50 disabled:cursor-not-allowed"
              size={"lg"}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
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

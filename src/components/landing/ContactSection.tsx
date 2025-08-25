"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { submitContactForm, type ContactFormData } from "@/actions/contact";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  MessageSquare,
  Clock,
  Globe,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [isVisible, setIsVisible] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("contact");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const result = await submitContactForm(formData);

      if (result.success) {
        setSubmitStatus({ type: "success", message: result.message });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus({ type: "error", message: result.message });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "info@forgenestservices.com.np",
      description: "We'll respond within 24 hours",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+977 9868211546",
      description: "Sunday - Friday, 9AM - 6PM",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "Remote First",
      description: "Global team, local expertise",
      gradient: "from-purple-500 to-indigo-500",
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 -left-32 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-32 -right-32 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animation: `float ${
                4 + Math.random() * 4
              }s ease-in-out infinite alternate`,
            }}
          />
        ))}
      </div>

      <div className="max-w-screen-2xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-12 lg:mb-20 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-600/10 border border-blue-200 rounded-full text-blue-700 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            Let's Connect
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-4 lg:mb-6">
            Get In
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Ready to start your project? We&apos;d love to hear from you. Send
            us a message and we&apos;ll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Contact Info */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="space-y-4 sm:space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 mb-6 sm:mb-8 text-center sm:text-left">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto sm:mx-0 mb-3 sm:mb-0">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">
                  Let's Start Something Great
                </h3>
              </div>

              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/50 hover:scale-105"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${info.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <info.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-base sm:text-lg text-slate-900 mb-1 sm:mb-2 group-hover:text-blue-600 transition-colors">
                        {info.title}
                      </h4>
                      <p className="text-slate-700 font-medium mb-1 group-hover:text-slate-900 transition-colors text-sm sm:text-base break-words">
                        {info.value}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500 group-hover:text-gray-600 transition-colors">
                        {info.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover indicator */}
                  <div className="mt-3 sm:mt-4 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></div>
                </div>
              ))}
            </div>

            {/* Additional info */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-1 rounded-xl sm:rounded-2xl">
              <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-slate-900 mb-1 sm:mb-2 text-sm sm:text-base">
                      Quick Response Promise
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      We understand time is valuable. Our team commits to
                      responding to all inquiries within 24 hours, often much
                      sooner. Your project deserves immediate attention.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-2xl border border-white/50">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-6 sm:mb-8">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <Send className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  Send us a Message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="group">
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full px-4 py-3 bg-white/50 border-2 rounded-xl focus:ring-4 focus:ring-blue-100 transition-all duration-300 text-slate-900 placeholder-gray-400 ${
                        focusedField === "name"
                          ? "border-blue-500 shadow-lg transform scale-[1.02]"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="group">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full px-4 py-3 bg-white/50 border-2 rounded-xl focus:ring-4 focus:ring-blue-100 transition-all duration-300 text-slate-900 placeholder-gray-400 ${
                        focusedField === "email"
                          ? "border-blue-500 shadow-lg transform scale-[1.02]"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="group">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("subject")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full px-4 py-3 bg-white/50 border-2 rounded-xl focus:ring-4 focus:ring-blue-100 transition-all duration-300 text-slate-900 placeholder-gray-400 ${
                      focusedField === "subject"
                        ? "border-blue-500 shadow-lg transform scale-[1.02]"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    placeholder="What can we help you with?"
                  />
                </div>

                <div className="group">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={6}
                    className={`w-full px-4 py-3 bg-white/50 border-2 rounded-xl focus:ring-4 focus:ring-blue-100 transition-all duration-300 text-slate-900 placeholder-gray-400 resize-none ${
                      focusedField === "message"
                        ? "border-blue-500 shadow-lg transform scale-[1.02]"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    placeholder="Tell us about your project or question..."
                  />
                </div>

                {/* Status Message */}
                {submitStatus.type && (
                  <div
                    className={`p-4 rounded-xl flex items-center gap-3 transition-all duration-300 ${
                      submitStatus.type === "success"
                        ? "bg-green-50 border-2 border-green-200 text-green-700"
                        : "bg-red-50 border-2 border-red-200 text-red-700"
                    }`}
                  >
                    {submitStatus.type === "success" ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-red-500" />
                    )}
                    <span className="font-medium">{submitStatus.message}</span>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full !text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed py-4 text-lg font-semibold flex items-center justify-center gap-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </section>
  );
}

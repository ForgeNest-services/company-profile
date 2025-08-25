"use client";

import {
  Code,
  Palette,
  Rocket,
  Shield,
  Smartphone,
  Globe,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Star,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("services");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Code,
      title: "Custom Development",
      description:
        "Tailored software solutions built to meet your specific business requirements and goals.",
      color: "blue",
      gradient: "from-blue-500 to-cyan-500",
      features: [
        "Full-stack Development",
        "API Integration",
        "Database Design",
      ],
      popular: false,
    },
    {
      icon: Globe,
      title: "Web Applications",
      description:
        "Modern, responsive web applications that deliver exceptional user experiences across all devices.",
      color: "green",
      gradient: "from-green-500 to-emerald-500",
      features: [
        "Responsive Design",
        "PWA Development",
        "Performance Optimization",
      ],
      popular: true,
    },
    {
      icon: Smartphone,
      title: "Mobile Solutions",
      description:
        "Native and cross-platform mobile applications that engage users and drive business growth.",
      color: "purple",
      gradient: "from-purple-500 to-indigo-500",
      features: ["iOS & Android", "Cross-platform", "App Store Deployment"],
      popular: false,
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Intuitive and beautiful user interfaces designed with your users and business goals in mind.",
      color: "pink",
      gradient: "from-pink-500 to-rose-500",
      features: ["User Research", "Wireframing", "Prototyping"],
      popular: false,
    },
    {
      icon: Shield,
      title: "Security & Performance",
      description:
        "Robust, secure solutions optimized for performance, scalability, and reliability.",
      color: "orange",
      gradient: "from-orange-500 to-red-500",
      features: ["Security Audits", "Performance Testing", "Monitoring Setup"],
      popular: false,
    },
    {
      icon: Rocket,
      title: "Digital Transformation",
      description:
        "Strategic guidance and implementation to modernize your business processes and technology stack.",
      color: "indigo",
      gradient: "from-indigo-500 to-blue-500",
      features: ["Strategy Consulting", "Process Automation", "Tech Migration"],
      popular: false,
    },
  ];

  return (
    <section
      id="services"
      className=" py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 -left-32 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-32 -right-32 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse delay-1000"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
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
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            Our Services
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            What We
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Deliver
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We specialize in creating digital solutions that drive real business
            results. Here&apos;s how we can accelerate your success story.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`group relative bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Popular badge */}
                {service.popular && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 px-3 py-1 rounded-full text-xs font-bold flex items-center">
                    <Star className="w-3 h-3 mr-1" />
                    Popular
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`relative w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className="w-8 h-8 text-white" />

                  {/* Glow effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300`}
                  ></div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <div
                    className={`space-y-2 transition-all duration-300 ${
                      activeCard === index
                        ? "max-h-32 opacity-100"
                        : "max-h-0 opacity-0 overflow-hidden"
                    }`}
                  >
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-400"
                      >
                        <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover indicator */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-500"></div>

                {/* Background glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Process Steps */}
        <div
          className={`mb-16 transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Our Process
            </h3>
            <p className="text-gray-300">How we bring your vision to life</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understanding your needs and goals",
              },
              {
                step: "02",
                title: "Design",
                description: "Creating the perfect solution blueprint",
              },
              {
                step: "03",
                title: "Develop",
                description: "Building with precision and care",
              },
              {
                step: "04",
                title: "Deploy",
                description: "Launching and supporting your success",
              },
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">
                      {process.step}
                    </span>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-400/50 to-transparent"></div>
                  )}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {process.title}
                </h4>
                <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div
          className={`text-center transition-all duration-1000 delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your project and explore how we can bring your
              vision to life with cutting-edge solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="border-2 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:border-white/40">
                View Our Work
              </button>
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
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
}

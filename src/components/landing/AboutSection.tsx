"use client";

import {
  Lightbulb,
  Target,
  Users,
  Zap,
  ArrowRight,
  TrendingUp,
  Award,
  Clock,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    years: 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate counters
          const targetValues = { projects: 150, clients: 75, years: 3 };
          const duration = 2000;
          const steps = 60;
          const stepDuration = duration / steps;

          let currentStep = 0;
          const interval = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;

            setCounters({
              projects: Math.floor(targetValues.projects * progress),
              clients: Math.floor(targetValues.clients * progress),
              years: Math.floor(targetValues.years * progress),
            });

            if (currentStep >= steps) {
              clearInterval(interval);
              setCounters(targetValues);
            }
          }, stepDuration);

          return () => clearInterval(interval);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("about");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Cutting-edge solutions for modern challenges",
      color: "blue",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Target,
      title: "Precision",
      description: "Attention to detail in every project",
      color: "green",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Building lasting relationships with our clients",
      color: "purple",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      icon: Zap,
      title: "Agility",
      description: "Fast adaptation to your evolving needs",
      color: "orange",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-600/10 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-6">
            <Award className="w-4 h-4 mr-2" />
            Our Story & Values
          </div>

          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-6">
            Crafting Digital
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We&apos;re a passionate team dedicated to creating innovative
            solutions that help businesses thrive in the digital transformation
            era.
          </p>
        </div>

        {/* Stats bar */}
        <div
          className={`mb-20 transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                  {counters.projects}+
                </div>
                <div className="text-gray-600 font-medium">
                  Projects Delivered
                </div>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                  {counters.clients}+
                </div>
                <div className="text-gray-600 font-medium">Happy Clients</div>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                  {counters.years}+
                </div>
                <div className="text-gray-600 font-medium">Years Growing</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Story */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-500 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
                  Our Journey
                </h3>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                ForgeNest was founded with a simple yet powerful vision: to
                bridge the gap between innovative technology and practical
                business solutions. We believe in the transformative power of
                well-crafted software.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                From our humble beginnings to becoming a trusted partner for
                businesses worldwide, our commitment to excellence and customer
                satisfaction drives everything we do. We&apos;re here to grow
                alongside your success story.
              </p>
            </div>

            {/* Mission statement */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-1 rounded-2xl">
              <div className="bg-white rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">
                      Our Mission
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      To empower businesses with innovative digital solutions
                      that drive growth, efficiency, and competitive advantage
                      in an ever-evolving marketplace.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button className="group inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                Learn more about our approach
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right side - Values grid */}
          <div
            className={`transition-all duration-1000 delay-700 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/50 hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <value.icon className="w-7 h-7 text-white" />
                  </div>

                  <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {value.title}
                  </h4>

                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {value.description}
                  </p>

                  {/* Hover indicator */}
                  <div className="mt-4 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></div>
                </div>
              ))}
            </div>

            {/* Floating element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Custom CSS for additional animations */}
      <style jsx>{`
        .animate-counter {
          animation: countUp 2s ease-out forwards;
        }

        @keyframes countUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}

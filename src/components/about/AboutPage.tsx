"use client";

import { Award, Users, Target, Lightbulb, TrendingUp, Shield } from 'lucide-react';
import Link from 'next/link';
import { generateOrganizationSchema } from '@/lib/seo';

export default function AboutPage() {
  const organizationSchema = generateOrganizationSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                About{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Forgenest Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                We are Nepal's leading IT solutions provider, dedicated to empowering businesses 
                through innovative technology and exceptional service since 2021.
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Story</h2>
              <div className="prose prose-lg prose-gray max-w-none">
                <p className="text-xl text-gray-600 leading-relaxed">
                  Founded in 2021, Forgenest Services began with a simple mission: to bridge the gap 
                  between innovative technology and practical business solutions. Our journey started 
                  with a small team of passionate developers and has grown into Nepal's trusted 
                  IT partner for businesses of all sizes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These core values guide everything we do and define who we are as a company.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Lightbulb,
                  title: 'Innovation',
                  description: 'We embrace cutting-edge technologies and creative solutions.'
                },
                {
                  icon: Target,
                  title: 'Precision',
                  description: 'We deliver accurate, high-quality solutions that meet exact requirements.'
                },
                {
                  icon: Users,
                  title: 'Partnership',
                  description: 'We build lasting relationships with our clients based on trust and mutual success.'
                },
                {
                  icon: TrendingUp,
                  title: 'Growth',
                  description: 'We help businesses and our team members achieve sustainable growth.'
                },
                {
                  icon: Shield,
                  title: 'Reliability',
                  description: 'We provide dependable solutions and consistent support.'
                },
                {
                  icon: Award,
                  title: 'Excellence',
                  description: 'We strive for excellence in every project and client interaction.'
                }
              ].map((value, index) => (
                <div key={index} className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can help your business achieve its technology goals.
            </p>
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300"
            >
              Contact Us Today
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
"use client";

import { 
  Code2, 
  Globe, 
  Smartphone, 
  Palette, 
  Cloud, 
  Shield,
  Rocket,
  Zap,
  CheckCircle,
  ArrowRight,
  Users,
  TrendingUp,
  Award,
  Star
} from 'lucide-react';
import Link from 'next/link';
import { generateServiceSchema, generateFAQSchema } from '@/lib/seo';

export default function ServicesPage() {
  const services = [
    {
      id: 'custom-software',
      icon: Code2,
      title: 'Custom Software Development',
      description: 'Tailored software solutions designed to meet your specific business requirements and drive operational efficiency.',
      features: [
        'Full-stack web application development',
        'Enterprise software solutions',
        'API development and integration',
        'Database design and optimization',
        'Legacy system modernization',
        'Scalable architecture design'
      ],
      technologies: ['React', 'Node.js', 'Python', 'Java', 'PostgreSQL', 'MongoDB'],
      price: 'Starting from NPR 50,000',
      category: 'Software Development'
    },
    {
      id: 'web-applications',
      icon: Globe,
      title: 'Web Application Development',
      description: 'Modern, responsive web applications that deliver exceptional user experiences across all devices and platforms.',
      features: [
        'Responsive web design',
        'Progressive Web Apps (PWA)',
        'E-commerce platforms',
        'Content Management Systems',
        'Real-time applications',
        'Performance optimization'
      ],
      technologies: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
      price: 'Starting from NPR 30,000',
      category: 'Web Development'
    },
    {
      id: 'mobile-development',
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that engage users and drive business growth.',
      features: [
        'iOS and Android development',
        'Cross-platform solutions',
        'App Store optimization',
        'Push notifications',
        'Offline functionality',
        'App maintenance and updates'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
      price: 'Starting from NPR 75,000',
      category: 'Mobile Development'
    },
    {
      id: 'ui-ux-design',
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Intuitive and beautiful user interfaces designed with your users and business goals in mind.',
      features: [
        'User research and analysis',
        'Wireframing and prototyping',
        'Visual design and branding',
        'Usability testing',
        'Design system creation',
        'Accessibility compliance'
      ],
      technologies: ['Figma', 'Adobe Creative Suite', 'Sketch', 'InVision'],
      price: 'Starting from NPR 25,000',
      category: 'Design'
    },
    {
      id: 'cloud-solutions',
      icon: Cloud,
      title: 'Cloud Solutions & Migration',
      description: 'Scalable cloud infrastructure and migration services to modernize your IT operations.',
      features: [
        'Cloud strategy and planning',
        'Infrastructure migration',
        'DevOps implementation',
        'Container orchestration',
        'Monitoring and optimization',
        'Security and compliance'
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'],
      price: 'Starting from NPR 40,000',
      category: 'Cloud Computing'
    },
    {
      id: 'digital-transformation',
      icon: Rocket,
      title: 'Digital Transformation',
      description: 'Strategic guidance and implementation to modernize your business processes and technology stack.',
      features: [
        'Digital strategy consulting',
        'Process automation',
        'Technology assessment',
        'Change management',
        'Training and support',
        'Performance measurement'
      ],
      technologies: ['Various based on needs'],
      price: 'Custom pricing',
      category: 'Consulting'
    }
  ];

  const faqs = [
    {
      question: 'What types of businesses do you work with?',
      answer: 'We work with businesses of all sizes, from startups to large enterprises, across various industries including healthcare, finance, education, e-commerce, and manufacturing.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity and scope. Simple websites take 2-4 weeks, while complex applications can take 3-6 months. We provide detailed timelines during project planning.'
    },
    {
      question: 'Do you provide ongoing support and maintenance?',
      answer: 'Yes, we offer comprehensive maintenance and support packages to ensure your applications remain secure, updated, and performing optimally.'
    },
    {
      question: 'Can you work with our existing systems?',
      answer: 'Absolutely! We specialize in system integration and can work with your existing infrastructure, databases, and third-party services.'
    },
    {
      question: 'What is your development process?',
      answer: 'We follow an agile development methodology with regular communication, milestone deliveries, and iterative feedback to ensure project success.'
    }
  ];

  // Generate structured data
  const servicesStructuredData = services.map(service => 
    generateServiceSchema({
      name: service.title,
      description: service.description,
      price: service.price,
      category: service.category
    })
  );

  const faqStructuredData = generateFAQSchema(faqs);

  return (
    <>
      {/* Structured Data */}
      {servicesStructuredData.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Comprehensive{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  IT Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                From custom software development to digital transformation, we provide 
                end-to-end IT solutions that drive business growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#services"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300"
                >
                  Explore Services
                </Link>
                <Link
                  href="#contact"
                  className="border-2 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300"
                >
                  Get Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Service Portfolio
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer a comprehensive range of IT services designed to meet the evolving 
                needs of modern businesses.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {services.map((service, index) => (
                <div 
                  key={service.id}
                  className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mr-4">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {service.title}
                        </h3>
                        <div className="text-blue-600 font-semibold">
                          {service.price}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <Link
                      href={`/services/${service.id}`}
                      className="flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                    <Link
                      href="#contact"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Forgenest Services?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine technical expertise with business understanding to deliver 
                solutions that drive real results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Award,
                  title: 'Proven Expertise',
                  description: '5+ years of experience delivering successful IT projects'
                },
                {
                  icon: Users,
                  title: 'Expert Team',
                  description: 'Certified developers and designers with deep technical knowledge'
                },
                {
                  icon: TrendingUp,
                  title: 'Business Growth',
                  description: 'Solutions designed to scale with your business needs'
                },
                {
                  icon: Shield,
                  title: 'Quality Assurance',
                  description: 'Rigorous testing and quality control processes'
                }
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Get answers to common questions about our services and process.
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your requirements and create a solution that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/blogs"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300"
              >
                Read Our Blog
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
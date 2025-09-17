"use client";

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Loader2, CheckCircle } from 'lucide-react';
import { generateLocalBusinessSchema } from '@/lib/seo';
import { submitContactForm, type ContactFormData } from '@/actions/contact';

export default function ContactPage() {
  const localBusinessSchema = generateLocalBusinessSchema();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    budget: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setSubmitStatus({ type: 'error', message: 'Please fill in all required fields.' });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });
    
    try {
      const contactFormData: ContactFormData = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        subject: formData.service || 'General Inquiry',
        message: `Service: ${formData.service || 'Not specified'}\nPhone: ${formData.phone || 'Not provided'}\nBudget: ${formData.budget || 'Not specified'}\n\nMessage:\n${formData.message}`
      };
      
      const result = await submitContactForm(contactFormData);
      
      if (result.success) {
        setSubmitStatus({ type: 'success', message: result.message });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          service: '',
          message: '',
          budget: ''
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Get in{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Touch
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Ready to start your next project? Contact us for a free consultation 
                and let's discuss how we can help your business grow.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Details */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Office Location</h3>
                      <p className="text-gray-600">
                        Shankharapur 09, Kathmandu<br />
                        Nepal
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                      <p className="text-gray-600">
                        <a href="tel:+9779868211546" className="hover:text-blue-600 transition-colors">
                          +977 9868211546
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:contact@forgenestservices.com.np" className="hover:text-blue-600 transition-colors">
                          contact@forgenestservices.com.np
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="flex items-center mb-8">
                  <MessageSquare className="w-8 h-8 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Send us a Message</h2>
                </div>
                
                {/* Status Messages */}
                {submitStatus.type && (
                  <div className={`p-4 rounded-lg mb-6 ${submitStatus.type === 'success' ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
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
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                    >
                      <option value="">Select a service</option>
                      <option value="custom-software">Custom Software Development</option>
                      <option value="web-development">Web Application Development</option>
                      <option value="mobile-development">Mobile App Development</option>
                      <option value="ui-ux-design">UI/UX Design</option>
                      <option value="cloud-solutions">Cloud Solutions</option>
                      <option value="digital-transformation">Digital Transformation</option>
                      <option value="consultation">Free Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Description *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      placeholder="Tell us about your project requirements..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                    ></textarea>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Budget (NPR)
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-50k">Under NPR 50,000</option>
                      <option value="50k-100k">NPR 50,000 - 100,000</option>
                      <option value="100k-250k">NPR 100,000 - 250,000</option>
                      <option value="250k-500k">NPR 250,000 - 500,000</option>
                      <option value="500k-plus">NPR 500,000+</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:from-blue-600 disabled:hover:to-purple-600"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about working with Forgenest Services.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  question: "How quickly can you start my project?",
                  answer: "We typically begin new projects within 1-2 weeks after contract signing, depending on our current workload and project complexity."
                },
                {
                  question: "Do you provide ongoing support after project completion?",
                  answer: "Yes, we offer various maintenance and support packages to ensure your application continues to perform optimally after launch."
                },
                {
                  question: "Can you work with our existing team?",
                  answer: "Absolutely! We're experienced in collaborating with in-house teams and can integrate seamlessly into your existing workflows."
                },
                {
                  question: "What information do you need to provide a quote?",
                  answer: "We need details about your project requirements, timeline, budget range, and any specific technologies or integrations needed."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
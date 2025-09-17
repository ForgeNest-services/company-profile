import type { Metadata } from 'next';
import ContactPage from '@/components/contact/ContactPage';

export const metadata: Metadata = {
  title: 'Contact Forgenest Services - Get Free IT Consultation in Nepal',
  description: 'Contact Forgenest Services for custom software development, web applications, and IT consulting. Located in Kathmandu, Nepal. Get free consultation and project quotes.',
  keywords: [
    'contact Forgenest Services',
    'IT consultation Nepal',
    'software development quotes',
    'Forgenest Services Kathmandu',
    'IT company contact Nepal',
    'free IT consultation',
    'software development inquiry',
    'web development contact',
    'mobile app development consultation',
    'IT services contact Nepal'
  ],
  openGraph: {
    title: 'Contact Forgenest Services - Get Free IT Consultation',
    description: 'Contact us for custom software development, web applications, and IT consulting. Free consultation and project quotes available.',
    images: ['/contact/contact-hero.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Forgenest Services - Get Free IT Consultation',
    description: 'Contact us for custom software development, web applications, and IT consulting. Free consultation and project quotes available.',
    images: ['/contact/contact-hero.jpg'],
  },
  alternates: {
    canonical: 'https://www.forgenestservices.com.np/contact',
  },
};

export default function Page() {
  return <ContactPage />;
}
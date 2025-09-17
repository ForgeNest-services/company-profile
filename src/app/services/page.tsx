import type { Metadata } from 'next';
import ServicesPage from '@/components/services/ServicesPage';

export const metadata: Metadata = {
  title: 'IT Services - Custom Software, Web & Mobile Development | Forgenest Services',
  description: 'Comprehensive IT services including custom software development, web applications, mobile apps, UI/UX design, and digital transformation. Expert solutions from Nepal\'s leading IT company.',
  keywords: [
    'IT services Nepal',
    'custom software development',
    'web application development',
    'mobile app development',
    'UI/UX design services',
    'digital transformation consulting',
    'software development company Nepal',
    'web development services',
    'mobile app development Nepal',
    'technology consulting'
  ],
  openGraph: {
    title: 'IT Services - Custom Software, Web & Mobile Development',
    description: 'Comprehensive IT services including custom software development, web applications, mobile apps, and digital transformation consulting.',
    images: ['/services/services-hero.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IT Services - Custom Software, Web & Mobile Development',
    description: 'Comprehensive IT services including custom software development, web applications, mobile apps, and digital transformation consulting.',
    images: ['/services/services-hero.jpg'],
  },
  alternates: {
    canonical: 'https://www.forgenestservices.com.np/services',
  },
};

export default function Page() {
  return <ServicesPage />;
}
import type { Metadata } from 'next';
import AboutPage from '@/components/about/AboutPage';

export const metadata: Metadata = {
  title: 'About Forgenest Services - Leading IT Company in Nepal',
  description: 'Learn about Forgenest Services, Nepal\'s trusted IT solutions provider. Our experienced team delivers custom software development, web applications, and digital transformation services since 2021.',
  keywords: [
    'about Forgenest Services',
    'IT company Nepal history',
    'software development team Nepal',
    'technology company Kathmandu',
    'IT services provider Nepal',
    'custom software development company',
    'web development company Nepal',
    'digital transformation experts',
    'Forgenest Services team',
    'Nepal IT industry'
  ],
  openGraph: {
    title: 'About Forgenest Services - Leading IT Company in Nepal',
    description: 'Learn about Forgenest Services, Nepal\'s trusted IT solutions provider with experienced team and proven track record.',
    images: ['/about/about-hero.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Forgenest Services - Leading IT Company in Nepal',
    description: 'Learn about Forgenest Services, Nepal\'s trusted IT solutions provider with experienced team and proven track record.',
    images: ['/about/about-hero.jpg'],
  },
  alternates: {
    canonical: 'https://www.forgenestservices.com.np/about',
  },
};

export default function Page() {
  return <AboutPage />;
}
import type { Metadata } from 'next';
import BlogsPage from '@/components/blog/BlogsPage';

export const metadata: Metadata = {
  title: 'IT Blog - Expert Insights & Technology Trends | Forgenest Services',
  description: 'Stay updated with the latest IT trends, development guides, and expert insights from Forgenest Services. Comprehensive articles on web development, mobile apps, cloud computing, and digital transformation.',
  keywords: [
    'IT blog',
    'technology blog',
    'web development tutorials',
    'mobile app development',
    'cloud computing guides',
    'digital transformation',
    'software development blog',
    'tech insights',
    'programming tutorials',
    'IT company blog Nepal'
  ],
  openGraph: {
    title: 'IT Blog - Expert Insights & Technology Trends | Forgenest Services',
    description: 'Discover expert insights on web development, mobile apps, cloud computing, and digital transformation from Nepal\'s leading IT company.',
    images: ['/blogs/blog-hero.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IT Blog - Expert Insights & Technology Trends',
    description: 'Expert insights on web development, mobile apps, cloud computing, and digital transformation.',
    images: ['/blogs/blog-hero.jpg'],
  },
  alternates: {
    canonical: 'https://www.forgenestservices.com.np/blogs',
  },
};

export default function Page() {
  return <BlogsPage />;
}
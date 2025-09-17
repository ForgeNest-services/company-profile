import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getPostBySlug, blogPosts } from '@/data/blogs';
import BlogPostPage from '@/components/blog/BlogPostPage';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.seo.metaTitle,
    description: post.seo.metaDescription,
    keywords: post.seo.keywords,
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.seo.metaTitle,
      description: post.seo.metaDescription,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      section: post.category,
      tags: post.tags,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seo.metaTitle,
      description: post.seo.metaDescription,
      images: [post.image],
    },
    alternates: {
      canonical: `https://www.forgenestservices.com.np/blogs/${post.slug}`,
    },
    other: {
      'article:author': post.author.name,
      'article:published_time': post.publishedAt,
      'article:section': post.category,
      'article:tag': post.tags.join(','),
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    notFound();
  }

  return <BlogPostPage post={post} />;
}
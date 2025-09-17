"use client";

import { useState } from 'react';
import { BlogPost, blogPosts } from '@/data/blogs';
import { 
  Calendar, 
  Clock, 
  User, 
  Share2, 
  Facebook, 
  Twitter, 
  Linkedin,
  Link as LinkIcon,
  ArrowLeft,
  ArrowRight,
  Tag,
  BookOpen,
  ChevronRight,
  Home
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

interface BlogPostPageProps {
  post: BlogPost;
}

export default function BlogPostPage({ post }: BlogPostPageProps) {
  const [showShareMenu, setShowShareMenu] = useState(false);

  // Get related posts from the same category
  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  // Get previous and next posts
  const currentIndex = blogPosts.findIndex(p => p.id === post.id);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = post.title;

  const handleShare = (platform: string) => {
    const url = shareUrl;
    const title = encodeURIComponent(shareTitle);
    
    let shareLink = '';
    
    switch (platform) {
      case 'facebook':
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${title}`;
        break;
      case 'linkedin':
        shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        setShowShareMenu(false);
        return;
    }
    
    if (shareLink) {
      window.open(shareLink, '_blank', 'width=600,height=400');
      setShowShareMenu(false);
    }
  };

  // Create structured data for the blog post
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "author": {
      "@type": "Person",
      "name": post.author.name
    },
    "publisher": {
      "@type": "Organization",
      "name": "Forgenest Services Pvt. Ltd.",
      "logo": {
        "@type": "ImageObject",
        "url": "https://res.cloudinary.com/dpnhdq9eg/image/upload/v1756144318/Primary_RGB_kwha6h.png"
      }
    },
    "datePublished": post.publishedAt,
    "dateModified": post.publishedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": shareUrl
    },
    "keywords": post.tags.join(', '),
    "articleSection": post.category,
    "wordCount": post.content.split(' ').length,
    "timeRequired": `PT${post.readTime}M`,
    "inLanguage": "en-US"
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <article className="min-h-screen bg-white">
        {/* Breadcrumbs */}
        <nav className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600 transition-colors flex items-center">
                <Home className="w-4 h-4 mr-1" />
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/blogs" className="hover:text-blue-600 transition-colors">
                Blog
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link href={`/blogs?category=${post.category}`} className="hover:text-blue-600 transition-colors">
                {post.category}
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-gray-900 truncate">{post.title}</span>
            </div>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Article Header */}
          <header className="mb-12">
            <div className="mb-6">
              <Link
                href="/blogs"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mb-6"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </div>

            {/* Categories and Tags */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                {post.category}
              </span>
              {post.tags.slice(0, 3).map((tag) => (
                <Link
                  key={tag}
                  href={`/blogs?tag=${encodeURIComponent(tag)}`}
                  className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full hover:bg-gray-200 transition-colors"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </Link>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              {post.title}
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {post.excerpt}
            </p>

            {/* Meta Information */}
            <div className="flex items-center justify-between border-t border-gray-200 pt-6">
              <div className="flex items-center space-x-6 text-gray-500">
                <div className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  <span className="font-medium">{post.author.name}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{post.readTime} min read</span>
                </div>
              </div>

              {/* Share Button */}
              <div className="relative">
                <button
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </button>

                {showShareMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                    <div className="py-2">
                      <button
                        onClick={() => handleShare('facebook')}
                        className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        <Facebook className="w-4 h-4 mr-3 text-blue-600" />
                        Facebook
                      </button>
                      <button
                        onClick={() => handleShare('twitter')}
                        className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        <Twitter className="w-4 h-4 mr-3 text-blue-400" />
                        Twitter
                      </button>
                      <button
                        onClick={() => handleShare('linkedin')}
                        className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        <Linkedin className="w-4 h-4 mr-3 text-blue-700" />
                        LinkedIn
                      </button>
                      <button
                        onClick={() => handleShare('copy')}
                        className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        <LinkIcon className="w-4 h-4 mr-3 text-gray-500" />
                        Copy Link
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative mb-12 overflow-hidden rounded-2xl">
            <Image
              src={post.image}
              alt={post.title}
              width={800}
              height={400}
              className="w-full h-96 object-cover"
              priority
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg prose-gray max-w-none">
            <ReactMarkdown
              components={{
                h1: ({ children }) => <h1 className="text-3xl font-bold text-gray-900 mt-12 mb-6">{children}</h1>,
                h2: ({ children }) => <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">{children}</h2>,
                h3: ({ children }) => <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">{children}</h3>,
                h4: ({ children }) => <h4 className="text-lg font-semibold text-gray-900 mt-6 mb-2">{children}</h4>,
                p: ({ children }) => <p className="text-gray-700 leading-relaxed mb-6">{children}</p>,
                ul: ({ children }) => <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2">{children}</ol>,
                li: ({ children }) => <li className="leading-relaxed">{children}</li>,
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-50 rounded-r-lg my-8 text-gray-800 italic">
                    {children}
                  </blockquote>
                ),
                code: ({ children }) => (
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800">
                    {children}
                  </code>
                ),
                pre: ({ children }) => (
                  <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto my-8">
                    {children}
                  </pre>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          {/* Article Footer */}
          <footer className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{post.author.name}</div>
                  <div className="text-gray-600 text-sm">
                    Published on {new Date(post.publishedAt).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation between posts */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {prevPost && (
                <Link
                  href={`/blogs/${prevPost.slug}`}
                  className="group flex items-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <ArrowLeft className="w-6 h-6 text-gray-400 mr-4 flex-shrink-0" />
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Previous Article</div>
                    <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {prevPost.title}
                    </div>
                  </div>
                </Link>
              )}
              
              {nextPost && (
                <Link
                  href={`/blogs/${nextPost.slug}`}
                  className="group flex items-center justify-end p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors md:col-start-2"
                >
                  <div className="text-right">
                    <div className="text-sm text-gray-600 mb-1">Next Article</div>
                    <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {nextPost.title}
                    </div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400 ml-4 flex-shrink-0" />
                </Link>
              )}
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <section>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      href={`/blogs/${relatedPost.slug}`}
                      className="group bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
                    >
                      <div className="relative w-full h-32 overflow-hidden rounded-lg mb-4">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                        {relatedPost.title}
                      </h4>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center mt-3 text-xs text-gray-500">
                        <Clock className="w-3 h-3 mr-1" />
                        {relatedPost.readTime} min read
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </footer>
        </div>
      </article>
    </>
  );
}
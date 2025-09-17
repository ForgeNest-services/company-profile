"use client";

import { useState, useMemo, useEffect } from 'react';
import { blogPosts, categories, tags, getFeaturedPosts } from '@/data/blogs';
import { Search, Filter, Clock, Calendar, User, ArrowRight, Tag, BookOpen } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTag, setSelectedTag] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  const featuredPosts = getFeaturedPosts();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const matchesTag = !selectedTag || post.tags.includes(selectedTag);

      return matchesSearch && matchesCategory && matchesTag;
    });
  }, [searchTerm, selectedCategory, selectedTag]);

  const BlogPostCard = ({ post, featured = false }: { post: any, featured?: boolean }) => {
    const cardClasses = featured 
      ? "group relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200 hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
      : "group bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.01]";

    return (
      <article className={cardClasses}>
        {featured && (
          <div className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Featured
          </div>
        )}
        
        <div className={`relative ${featured ? 'mb-6' : 'mb-4'} overflow-hidden rounded-xl`}>
          <div className={`aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center ${featured ? 'h-48' : 'h-40'}`}>
            <BookOpen className={`${featured ? 'w-12 h-12' : 'w-8 h-8'} text-gray-400`} />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
              {post.category}
            </span>
            {post.tags.slice(0, 2).map((tag: string) => (
              <span 
                key={tag}
                className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full cursor-pointer hover:bg-gray-200 transition-colors"
                onClick={() => setSelectedTag(tag)}
              >
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>

          <h2 className={`font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight ${featured ? 'text-2xl' : 'text-lg'}`}>
            {post.title}
          </h2>

          <p className={`text-gray-600 leading-relaxed ${featured ? 'text-base' : 'text-sm'}`}>
            {post.excerpt}
          </p>

          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0 pt-4 border-t border-gray-100">
            <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs md:text-sm text-gray-500">
              <div className="flex items-center">
                <User className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                <span className="truncate">{post.author.name}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                <span>{post.readTime} min read</span>
              </div>
            </div>

            <Link 
              href={`/blogs/${post.slug}`}
              className="group inline-flex items-center justify-center md:justify-start text-blue-600 hover:text-blue-700 font-medium text-sm bg-blue-50 md:bg-transparent px-4 py-2 md:px-0 md:py-0 rounded-lg md:rounded-none transition-colors"
            >
              Read More
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </article>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Expert Insights &{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Tech Trends
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Stay ahead with our comprehensive guides on web development, mobile apps, 
              cloud computing, and digital transformation strategies.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <div className="bg-white rounded-2xl p-4 md:p-6 mb-12 shadow-lg border border-gray-200">
          <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-3 md:gap-4">
            {/* Search */}
            <div className="relative md:col-span-1">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
            </div>

            {/* Category Filter */}
            <div className="relative md:col-span-1">
              <Filter className="absolute left-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white text-sm"
              >
                <option value="All">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Tag Filter */}
            <div className="md:col-span-1">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedTag('')}
                  className={`px-3 py-2 rounded-full text-xs md:text-sm font-medium transition-colors whitespace-nowrap ${
                    !selectedTag ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  All Tags
                </button>
                {tags.slice(0, isMobile ? 2 : 3).map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(selectedTag === tag ? '' : tag)}
                    className={`px-3 py-2 rounded-full text-xs md:text-sm font-medium transition-colors whitespace-nowrap ${
                      selectedTag === tag 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Posts */}
        {searchTerm === '' && selectedCategory === 'All' && !selectedTag && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {featuredPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} featured={true} />
              ))}
            </div>
          </section>
        )}

        {/* All Posts */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              {searchTerm || selectedCategory !== 'All' || selectedTag ? 'Filtered Results' : 'All Articles'}
            </h2>
            <div className="text-gray-600">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
            </div>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                  setSelectedTag('');
                }}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </section>

        {/* Newsletter Signup */}
        <section className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
          <p className="text-xl mb-8 opacity-90">
            Get the latest insights on technology trends and development best practices delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
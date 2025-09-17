import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getFeaturedPosts, blogPosts } from "@/data/blogs";

export default function BlogSection() {
  // Get latest 3 blog posts (featured posts + recent posts)
  const featuredPosts = getFeaturedPosts();
  const recentPosts = blogPosts.slice(0, 3);
  const displayPosts = featuredPosts.length > 0 ? featuredPosts.slice(0, 3) : recentPosts;

  return (
    <section className="max-w-screen-xl mx-auto px-4 md:px-0 space-y-6 md:space-y-12">
      <div className="text-center">
        <h2 className="text-secondary capitalize text-base md:text-2xl font-bold">
          \ Our Blog \
        </h2>
        <h1 className="text-2xl md:text-4xl font-bold ">Latest Posts</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayPosts.map((post, index) => (
          <Link key={post.id} href={`/blogs/${post.slug}`}>
            <Card
              className={`overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer
                ${index === 2 ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <CardHeader>
                <h3 className="text-xl font-bold text-secondary line-clamp-2">{post.title}</h3>
                <p className="text-sm text-gray-500">{new Date(post.publishedAt).toLocaleDateString()}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">
                    {post.readTime} min read
                  </span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}

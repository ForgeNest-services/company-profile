import React from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { blogs } from "@/lib/constants/blogs";

export default function BlogSection() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 md:px-0 space-y-6 md:space-y-12">
      <div className="text-center">
        <h2 className="text-secondary capitalize text-base md:text-2xl font-bold">
          \ Our Blog \
        </h2>
        <h1 className="text-2xl md:text-4xl font-bold ">Latest Post</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <Card
            key={blog.id}
            className={`overflow-hidden transition-transform duration-300 hover:scale-105
              ${index === 2 ? "sm:col-span-2 lg:col-span-1" : ""}`}
          >
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
              />
            </div>
            <CardHeader>
              <h3 className="text-xl font-bold text-secondary">{blog.title}</h3>
              <p className="text-sm text-gray-500">{blog.date}</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

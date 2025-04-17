import { useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BlogCard } from "@/components/ui/blog-card";
import { profileData } from "@/data";
import { Link } from "wouter";

export default function Blog() {
  const { blogPosts } = profileData;

  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Navbar />
      <main className="py-16 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 dark:text-white">
              Blog
            </h1>
            <button 
              onClick={() => window.location.href = "/"}
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
            >
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="font-medium">Back to Home</span>
            </button>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mb-12">
            Thoughts, insights, and tutorials on software development, architecture, and emerging technologies.
            Here, I share my experiences and knowledge in building high-performance systems, distributed applications,
            and other tech topics.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <BlogCard
                  id={post.id}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  readTime={post.readTime}
                  tags={post.tags}
                  imageUrl={post.imageUrl}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
}
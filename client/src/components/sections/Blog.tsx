import { motion } from "framer-motion";
import { BlogCard } from "@/components/ui/blog-card";
import { SocialButton } from "@/components/ui/social-button";
import { profileData } from "@/data";
import { Link } from "wouter";
import { Book } from "lucide-react";

export function Blog() {
  // Show only first 3 blog posts on the home page
  const featuredPosts = profileData.blogPosts.slice(0, 3);
  
  return (
    <section id="blog" className="py-16 md:py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-heading font-bold text-center mb-6 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Blog
        </motion.h2>
        
        <motion.p 
          className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Thoughts, insights, and tutorials on software development, architecture, and emerging technologies.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
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

        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <SocialButton
            href="/blog"
            icon={<Book className="w-5 h-5" />}
            label="View All Posts"
            variant="outline"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/blog";
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
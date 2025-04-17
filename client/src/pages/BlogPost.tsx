import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRoute, Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { profileData } from "@/data";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReactMarkdown from "react-markdown";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  imageUrl?: string;
}

export default function BlogPost() {
  const [, params] = useRoute("/blog/:id");
  const [post, setPost] = useState<BlogPost | null>(null);
  
  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);
    
    // Find the post
    if (params && params.id) {
      const foundPost = profileData.blogPosts.find(post => post.id === params.id);
      if (foundPost) {
        setPost(foundPost);
        document.title = `${foundPost.title} | Vrushank Patel`;
      }
    }
    
    return () => {
      document.title = "Vrushank Patel | Senior Software Developer";
    };
  }, [params]);
  
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Post not found</h1>
          <button
            onClick={() => window.location.href = "/blog"}
            className="text-primary hover:text-primary/80 dark:text-primary-400 dark:hover:text-primary-300"
          >
            Back to all posts
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Navbar />
      <main className="py-16 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="mb-8">
            <button
              onClick={() => window.location.href = "/blog"}
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 dark:text-primary-400 dark:hover:text-primary-300 transition-colors mb-6"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to all posts</span>
            </button>
            
            {post.imageUrl && (
              <div className="w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            )}
            
            <div className="flex flex-wrap gap-2 mb-3">
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 dark:text-white mb-4">
              {post.title}
            </h1>
            
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-8">
              <div className="flex items-center mr-4">
                <CalendarDays className="w-4 h-4 mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md mb-8">
            <article className="prose prose-lg dark:prose-invert max-w-none">
              <ReactMarkdown>
                {post.content}
              </ReactMarkdown>
            </article>
            
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <div>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Written by</h4>
                <p className="text-base font-semibold text-gray-900 dark:text-white">Vrushank Patel</p>
              </div>
              
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Share2 className="w-4 h-4" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
}
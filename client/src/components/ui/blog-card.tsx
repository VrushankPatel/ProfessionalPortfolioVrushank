import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, ChevronRight } from "lucide-react";
import { Link } from "wouter";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  imageUrl?: string;
}

export function BlogCard({
  id,
  title,
  excerpt,
  date,
  readTime,
  tags,
  imageUrl
}: BlogCardProps) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 flex flex-col h-full"
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
    >
      {imageUrl && (
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-6 flex-grow">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
              {tag}
            </Badge>
          ))}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
          <div className="flex items-center mr-4">
            <CalendarDays className="w-4 h-4 mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{readTime}</span>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {excerpt}
        </p>
      </div>
      <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700/50">
        <Button 
          variant="link" 
          className="text-primary hover:text-primary/80 dark:text-primary-400 dark:hover:text-primary-300 p-0 h-auto"
          onClick={() => window.location.href = `/blog/${id}`}
        >
          Read more <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </motion.div>
  );
}
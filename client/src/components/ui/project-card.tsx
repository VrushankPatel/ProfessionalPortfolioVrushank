import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { SmallSocialButton } from "./social-button";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  links: {
    demo?: string;
    github?: string;
    docs?: string;
    dockerhub?: string;
  };
  primaryTech: string;
  techColor?: string;
}

export function ProjectCard({
  title,
  description,
  technologies,
  links,
  primaryTech,
  techColor = "blue"
}: ProjectCardProps) {
  const colorVariants = {
    blue: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    green: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
    red: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
    orange: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
    yellow: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
    indigo: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300",
    purple: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
    pink: "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300",
  };

  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 flex flex-col h-full"
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="p-6 flex-grow">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
          <span className={`px-2 py-1 text-xs font-medium rounded ${colorVariants[techColor as keyof typeof colorVariants] || colorVariants.blue}`}>
            {primaryTech}
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="outline" className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
      <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700/50 flex flex-wrap gap-3">
        {links.docs && (
          <SmallSocialButton 
            href={links.docs} 
            icon={<svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>} 
            label="Documentation" 
          />
        )}
        {links.github && (
          <SmallSocialButton 
            href={links.github} 
            icon={<svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
            </svg>} 
            label="View Code" 
          />
        )}
        {links.demo && (
          <SmallSocialButton 
            href={links.demo} 
            icon={<svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>} 
            label="Live Demo" 
          />
        )}
        {links.dockerhub && (
          <SmallSocialButton 
            href={links.dockerhub} 
            icon={<svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>} 
            label="Docker Hub" 
          />
        )}
      </div>
    </motion.div>
  );
}

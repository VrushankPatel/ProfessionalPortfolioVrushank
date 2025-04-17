import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CertificationCardProps {
  title: string;
  description: string;
  icon: string;
  link: string;
  color?: string;
}

export function CertificationCard({
  title,
  description,
  icon,
  link,
  color = "primary"
}: CertificationCardProps) {
  const colorVariants = {
    primary: "bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400",
    blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
    green: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
    purple: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
    red: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400",
    orange: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
    yellow: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400",
    indigo: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400",
    pink: "bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400",
    gray: "bg-gray-100 dark:bg-gray-700/30 text-gray-600 dark:text-gray-400",
  };

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group h-[230px]"
      whileHover={{ y: -5 }}
    >
      <div className="p-6 flex-grow">
        <div className="flex items-center mb-3">
          <div className={cn("p-2 rounded-lg mr-3", colorVariants[color as keyof typeof colorVariants] || colorVariants.primary)}>
            <i className={`${icon} w-5 h-5 flex items-center justify-center`}></i>
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">{title}</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
      </div>
      <div className="px-6 py-3 bg-gray-50 dark:bg-gray-700/50 flex items-center text-sm text-primary-600 dark:text-primary-400 font-medium">
        <span className="group-hover:translate-x-1 transition-transform duration-300">View Certificate</span>
        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </div>
    </motion.a>
  );
}

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface SocialButtonProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
  icon: React.ReactNode;
  label: string;
  variant?: 
    | "primary" 
    | "secondary" 
    | "github" 
    | "linkedin" 
    | "resume" 
    | "email" 
    | "codersrank" 
    | "outline";
  size?: "sm" | "md" | "lg";
}

export function SocialButton({
  href,
  icon,
  label,
  variant = "primary",
  size = "md",
  className,
  ...props
}: SocialButtonProps) {
  const variants = {
    primary: "bg-primary hover:bg-primary/90 text-white",
    secondary: "bg-secondary hover:bg-secondary/90 text-white",
    github: "bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-800 text-white",
    linkedin: "bg-[#0077b5] hover:bg-[#0077b5]/90 text-white",
    resume: "border-2 border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 text-gray-700 dark:text-gray-300",
    email: "bg-[#d14836] hover:bg-[#d14836]/90 text-white",
    codersrank: "bg-[#2d333b] hover:bg-[#2d333b]/90 text-white",
    outline: "border-2 border-gray-300 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400",
  };

  const sizes = {
    sm: "text-xs px-3 py-1.5 gap-1.5",
    md: "text-sm px-4 py-2 gap-2",
    lg: "text-base px-5 py-3 gap-2.5"
  };

  return (
    <motion.a
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 group",
        variants[variant],
        sizes[size],
        className
      )}
      whileHover={{ y: -2 }}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      <motion.span
        className="inline-block"
        initial={{ y: 0 }}
        whileHover={{ y: -3 }}
        transition={{ duration: 0.3 }}
      >
        {icon}
      </motion.span>
      <span>{label}</span>
    </motion.a>
  );
}

export function SmallSocialButton({
  href,
  icon,
  label,
  variant = "outline",
  className,
  ...props
}: Omit<SocialButtonProps, "size">) {
  return (
    <motion.a
      href={href}
      className={cn(
        "inline-flex items-center gap-1 text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 group",
        className
      )}
      whileHover={{ x: 3 }}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {icon}
      <span>{label}</span>
    </motion.a>
  );
}

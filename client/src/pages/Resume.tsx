import { Navbar } from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { SocialButton } from "@/components/ui/social-button";
import { profileData } from "@/data";
import { Printer, Download, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Resume() {
  const { name, title, profilePic, socialLinks, summary, skills, professionalExperience, education, certifications } = profileData;
  
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Set the title
    document.title = `Resume - ${name} | ${title}`;
    
    return () => {
      document.title = `${name} | ${title}`;
    };
  }, [name, title]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-50 dark:bg-gray-900 min-h-screen"
    >
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Actions Bar (non-printable) */}
        <div className="print:hidden mb-8 flex flex-wrap items-center justify-between gap-4">
          <Link href="/">
            <a className="inline-flex items-center gap-2 text-primary hover:text-primary/80 dark:text-primary-400 dark:hover:text-primary-300 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Portfolio</span>
            </a>
          </Link>
          
          <div className="flex gap-3">
            <SocialButton
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePrint();
              }}
              icon={<Printer className="w-5 h-5" />}
              label="Print Resume"
              variant="primary"
            />
            
            <SocialButton
              href="/resume.pdf"
              icon={<Download className="w-5 h-5" />}
              label="Download PDF"
              variant="outline"
            />
          </div>
        </div>
        
        {/* Resume Content */}
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 print:shadow-none print:p-0 print:dark:bg-white print:dark:text-black">
          {/* Header */}
          <header className="mb-8 pb-8 border-b border-gray-200 dark:border-gray-700 print:dark:border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-center gap-4">
                <img 
                  src={profilePic} 
                  alt={name} 
                  className="w-24 h-24 rounded-full object-cover border-2 border-gray-200 dark:border-gray-700 print:dark:border-gray-200"
                />
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white print:dark:text-gray-900">{name}</h1>
                  <p className="text-xl text-gray-600 dark:text-gray-300 print:dark:text-gray-600">{title}</p>
                </div>
              </div>
              
              <div className="flex flex-col gap-1">
                <a href={`mailto:${socialLinks.email}`} className="text-primary dark:text-primary-400 hover:underline print:dark:text-primary">
                  {socialLinks.email}
                </a>
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary dark:text-primary-400 hover:underline print:dark:text-primary">
                  LinkedIn: vrushank-patel
                </a>
                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-primary dark:text-primary-400 hover:underline print:dark:text-primary">
                  GitHub: VrushankPatel
                </a>
              </div>
            </div>
            
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2 print:dark:text-gray-800">Summary</h2>
              <p className="text-gray-600 dark:text-gray-300 print:dark:text-gray-600">
                {summary}
              </p>
            </div>
          </header>
          
          {/* Skills */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 print:dark:text-gray-800">
              Technical Skills
            </h2>
            <div className="space-y-2">
              {skills.map((skillCategory, index) => (
                <div key={index}>
                  <h3 className="font-medium text-gray-700 dark:text-gray-300 print:dark:text-gray-700">
                    {skillCategory.category}:
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 print:dark:text-gray-600">
                    {skillCategory.items.map(item => item.name).join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </section>
          
          {/* Experience */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 print:dark:text-gray-800">
              Professional Experience
            </h2>
            <div className="space-y-6">
              {professionalExperience.map((job, index) => (
                <div key={index} className="pb-5 last:pb-0 border-b last:border-b-0 border-gray-200 dark:border-gray-700 print:dark:border-gray-200">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-gray-200 print:dark:text-gray-800">{job.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 print:dark:text-gray-600">{job.company}</p>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 mt-1 sm:mt-0 print:dark:text-gray-500">
                      {job.period}
                    </p>
                  </div>
                  <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-1 print:dark:text-gray-600">
                    {job.responsibilities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
          
          {/* Education */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 print:dark:text-gray-800">
              Education
            </h2>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200 print:dark:text-gray-800">{edu.degree}</h3>
                    <p className="text-gray-600 dark:text-gray-400 print:dark:text-gray-600">{edu.institution}</p>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 mt-1 sm:mt-0 print:dark:text-gray-500">
                    {edu.year}
                  </p>
                </div>
              ))}
            </div>
          </section>
          
          {/* Certifications */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 print:dark:text-gray-800">
              Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
              {certifications.slice(0, 6).map((cert, index) => (
                <div key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-primary dark:text-primary-400 mt-0.5 flex-shrink-0 print:dark:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <div className="ml-2">
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="font-medium text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary-400 print:dark:text-gray-800 print:hover:dark:text-gray-800"
                    >
                      {cert.title}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
}

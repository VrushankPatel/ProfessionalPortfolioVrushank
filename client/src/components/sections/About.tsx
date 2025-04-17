import { motion } from "framer-motion";
import { profileData } from "@/data";

export function About() {
  const { name, socialLinks, professionalContributions } = profileData;

  return (
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.h2 
            className="text-3xl font-heading font-bold text-center mb-12 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>

          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I'm a passionate Software developer with 5+ years of experience, specialized in high performance trading systems, capital markets, and payment platforms. Skilled in Java, Python, Apache Kafka, Reactive programming, and cloud-native technologies.
          </motion.p>

          <motion.div 
            className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Professional Contributions</h3>
            <ul className="space-y-4">
              {professionalContributions.map((contribution, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                >
                  <svg className="w-6 h-6 text-primary dark:text-primary-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <div className="ml-3">
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      <a 
                        href={contribution.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-primary dark:text-primary-400 hover:underline"
                      >
                        {contribution.title}
                      </a>
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">{contribution.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.a 
              href={socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-300" 
              aria-label="LinkedIn"
              whileHover={{ y: -3 }}
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
            </motion.a>
            
            <motion.a 
              href={socialLinks.codersrank} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-300" 
              aria-label="CodersRank"
              whileHover={{ y: -3 }}
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22.89 4.56l-9.1-4.49a3.13 3.13 0 00-2.34-.13 2.3 2.3 0 00-1.28.79L.76 13.22a1.74 1.74 0 00-.07 2.29l5.61 6.52a3 3 0 001.93 1.12c.58.08 1.22 0 1.87-.35l12.35-7.16a3.62 3.62 0 001.55-2 3.07 3.07 0 00-.06-2h0a8.4 8.4 0 00-1.05-7.08z M16.16 9.09a2.35 2.35 0 11-3.27 0 2.35 2.35 0 013.27 0z"></path>
              </svg>
            </motion.a>
            
            <motion.a 
              href={`mailto:${socialLinks.email}`} 
              className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-300" 
              aria-label="Email"
              whileHover={{ y: -3 }}
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
              </svg>
            </motion.a>
            
            <motion.a 
              href={socialLinks.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-300" 
              aria-label="GitHub"
              whileHover={{ y: -3 }}
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

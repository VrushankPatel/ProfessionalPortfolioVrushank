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
    
    // Add print-specific styles to head
    const style = document.createElement('style');
    style.setAttribute('media', 'print');
    style.innerHTML = `
      @page {
        size: A4;
        margin: 10mm;
      }
      body {
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
      }
      .print-container {
        width: 100%;
        max-width: 100%;
        padding: 0;
      }
      .print-resume {
        box-shadow: none !important;
        padding: 0 !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.title = `${name} | ${title}`;
      document.head.removeChild(style);
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
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 print:shadow-none print:p-0 print:dark:bg-white print:dark:text-black print-resume">
          {/* Header */}
          <header className="mb-6 pb-2 border-b border-gray-200 dark:border-gray-700 print:dark:border-gray-200">
            <div className="text-center mb-2">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white print:dark:text-gray-900">{name}</h1>
            </div>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-2 text-sm text-gray-600 dark:text-gray-300 print:dark:text-gray-600">
              <a href={`mailto:${socialLinks.email}`} className="text-primary dark:text-primary-400 hover:underline print:dark:text-primary">
                {socialLinks.email}
              </a>
              <span className="hidden md:inline">•</span>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary dark:text-primary-400 hover:underline print:dark:text-primary">
                linkedin.com/in/vrushank-patel
              </a>
              <span className="hidden md:inline">•</span>
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-primary dark:text-primary-400 hover:underline print:dark:text-primary">
                github.com/VrushankPatel
              </a>
              <span className="hidden md:inline">•</span>
              <span>Singapore, SG</span>
            </div>
          </header>
          
          {/* Skills */}
          <section className="mb-6">
            <h2 className="text-base font-bold uppercase text-gray-800 dark:text-gray-200 mb-3 print:dark:text-gray-800 border-b border-gray-200 dark:border-gray-700 pb-1">
              Technical Skills
            </h2>
            <div className="space-y-2">
              <div>
                <h3 className="font-medium text-sm text-gray-700 dark:text-gray-300 print:dark:text-gray-700 inline">
                  Programming Languages:
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 print:dark:text-gray-600 inline ml-2">
                  Java, Python, Go, JavaScript, SQL
                </p>
              </div>
              <div>
                <h3 className="font-medium text-sm text-gray-700 dark:text-gray-300 print:dark:text-gray-700 inline">
                  Frameworks:
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 print:dark:text-gray-600 inline ml-2">
                  Spring Boot, Apache Kafka, React, Flask, Node.js, Express.js
                </p>
              </div>
              <div>
                <h3 className="font-medium text-sm text-gray-700 dark:text-gray-300 print:dark:text-gray-700 inline">
                  Databases:
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 print:dark:text-gray-600 inline ml-2">
                  PostgreSQL, MySQL, MongoDB, Redis, OrientDB
                </p>
              </div>
              <div>
                <h3 className="font-medium text-sm text-gray-700 dark:text-gray-300 print:dark:text-gray-700 inline">
                  Cloud / DevOps:
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 print:dark:text-gray-600 inline ml-2">
                  AWS, Docker, Kubernetes, GitLab CI/CD, Jenkins, Firebase
                </p>
              </div>
              <div>
                <h3 className="font-medium text-sm text-gray-700 dark:text-gray-300 print:dark:text-gray-700 inline">
                  Other Skills:
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 print:dark:text-gray-600 inline ml-2">
                  Reactive Programming, Microservices, TDD, CI/CD, DevOps, System Architecture
                </p>
              </div>
            </div>
          </section>
          
          {/* Experience */}
          <section className="mb-6">
            <h2 className="text-base font-bold uppercase text-gray-800 dark:text-gray-200 mb-3 print:dark:text-gray-800 border-b border-gray-200 dark:border-gray-700 pb-1">
              Experience (5+ Years)
            </h2>
            <div className="space-y-4">
              <div className="pb-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200 print:dark:text-gray-800">Senior Software Developer</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 print:dark:text-gray-600">NASDAQ</p>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-0 sm:mt-0 print:dark:text-gray-500">
                    Jan 2022 - Present | Singapore, SG
                  </p>
                </div>
                <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-300 space-y-1 print:dark:text-gray-600">
                  <li>Develop and maintain high-performance trading systems supporting millions of transactions per day</li>
                  <li>Optimize market data processing algorithms reducing latency by 35%</li>
                  <li>Lead implementation of new regulatory compliance features for the NYSE matching engine (MME), a lightning-fast and automatic orders matching and trade execution engine</li>
                  <li>Design and implement efficient, scalable Java and Python solutions for capital markets applications, focusing on low-latency processing in high-frequency trading systems</li>
                  <li>Deliver mission-critical components for trading infrastructure that handles $1B+ in transactions daily</li>
                  <li>Implement real-time data processing pipelines using Apache Kafka, RxJava, and optimized multi-threading to support market operations</li>
                  <li>Conduct code reviews and mentor junior developers to ensure optimal system design and performance</li>
                </ul>
              </div>
              
              <div className="pb-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200 print:dark:text-gray-800">Software Engineer</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 print:dark:text-gray-600">Capsys Technologies Pvt Ltd</p>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-0 sm:mt-0 print:dark:text-gray-500">
                    Jun 2019 - Dec 2021 | Ahmedabad, IN
                  </p>
                </div>
                <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-300 space-y-1 print:dark:text-gray-600">
                  <li>Led modernization of legacy card management systems (CMS) to microservice architecture</li>
                  <li>Developed middleware solutions (Zeus-GPI) for financial message brokering (Swift MX, ISO 20022)</li>
                  <li>Implemented robust error handling and monitoring for mission-critical payment systems</li>
                  <li>Collaborated with banking clients to design custom integration solutions</li>
                  <li>Reduced system downtime by 75% through improved fault tolerance and automated recovery</li>
                </ul>
              </div>
              
              <div className="pb-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200 print:dark:text-gray-800">Junior Developer</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 print:dark:text-gray-600">Tech Innovations Inc.</p>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-0 sm:mt-0 print:dark:text-gray-500">
                    Aug 2018 - May 2019 | Ahmedabad, IN
                  </p>
                </div>
                <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-300 space-y-1 print:dark:text-gray-600">
                  <li>Assisted in development of web applications using React and Java Spring Boot</li>
                  <li>Created automated test suites improving code coverage by 40%</li>
                  <li>Implemented UI components following design specifications</li>
                  <li>Fixed bugs and performance issues in existing applications</li>
                </ul>
              </div>
            </div>
          </section>
          
          {/* Education */}
          <section className="mb-6">
            <h2 className="text-base font-bold uppercase text-gray-800 dark:text-gray-200 mb-3 print:dark:text-gray-800 border-b border-gray-200 dark:border-gray-700 pb-1">
              Education
            </h2>
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <div>
                  <h3 className="font-semibold text-sm text-gray-800 dark:text-gray-200 print:dark:text-gray-800">Master of Computer Applications (MCA)</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 print:dark:text-gray-600">Gujarat Technological University</p>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-0 sm:mt-0 print:dark:text-gray-500">
                  May 2018 | Ahmedabad
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <div>
                  <h3 className="font-semibold text-sm text-gray-800 dark:text-gray-200 print:dark:text-gray-800">Bachelor of Computer Applications (BCA)</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 print:dark:text-gray-600">Sardar Patel University</p>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-0 sm:mt-0 print:dark:text-gray-500">
                  May 2015 | Gujarat
                </p>
              </div>
            </div>
          </section>
          
          {/* Certifications */}
          <section className="mb-6">
            <h2 className="text-base font-bold uppercase text-gray-800 dark:text-gray-200 mb-3 print:dark:text-gray-800 border-b border-gray-200 dark:border-gray-700 pb-1">
              Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
              <div className="flex items-start">
                <svg className="w-4 h-4 text-primary dark:text-primary-400 mt-0.5 flex-shrink-0 print:dark:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div className="ml-2">
                  <a href="https://bcert.me/sefawhitn" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary-400 print:dark:text-gray-800 print:hover:dark:text-gray-800">
                    Scrum Alliance CSPO
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-4 h-4 text-primary dark:text-primary-400 mt-0.5 flex-shrink-0 print:dark:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div className="ml-2">
                  <a href="https://courses.cognitiveclass.ai/certificates/e73685d94f344d92b329712d7dceac5c" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary-400 print:dark:text-gray-800 print:hover:dark:text-gray-800">
                    IBM Blockchain
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-4 h-4 text-primary dark:text-primary-400 mt-0.5 flex-shrink-0 print:dark:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div className="ml-2">
                  <a href="https://drive.google.com/file/d/1rgkx3sx-quvh7SUVxVdWT5iELAWM5b4y/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary-400 print:dark:text-gray-800 print:hover:dark:text-gray-800">
                    Nutanix Hybrid Cloud
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-4 h-4 text-primary dark:text-primary-400 mt-0.5 flex-shrink-0 print:dark:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div className="ml-2">
                  <a href="https://drive.google.com/file/d/1-ory7-vSeIpgnFXzP_oDQGzHQf8yJiV5/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary-400 print:dark:text-gray-800 print:hover:dark:text-gray-800">
                    AWS Data Analytics
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-4 h-4 text-primary dark:text-primary-400 mt-0.5 flex-shrink-0 print:dark:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div className="ml-2">
                  <a href="https://graduation.udacity.com/confirm/EL966DFN" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary-400 print:dark:text-gray-800 print:hover:dark:text-gray-800">
                    Deep Learning Nanodegree
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-4 h-4 text-primary dark:text-primary-400 mt-0.5 flex-shrink-0 print:dark:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div className="ml-2">
                  <a href="https://drive.google.com/file/d/1r7c2GWMveQTFBI2w0Vbt-LC2LRHth3o6/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary-400 print:dark:text-gray-800 print:hover:dark:text-gray-800">
                    Intel AI Edge
                  </a>
                </div>
              </div>
            </div>
          </section>
          
          {/* Projects Footer */}
          <div className="text-center mt-4 text-xs text-gray-500 dark:text-gray-400 print:dark:text-gray-500">
            <p>APEX · Source · Bluelink · Maxine · Complexica · Other Projects · More</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

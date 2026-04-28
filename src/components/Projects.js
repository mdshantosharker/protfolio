"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const ProjectCard = ({ project, onClick }) => (
  <motion.div 
    layoutId={`card-${project.id}`}
    whileHover={{ y: -10 }}
    className="relative group h-[450px] rounded-[3rem] overflow-hidden bg-slate-900 cursor-pointer shadow-2xl"
    onClick={() => onClick(project)}
  >
    <div className="absolute inset-0">
      <img 
        src={project.image} 
        alt={project.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
      />
    </div>
    
    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
    
    <div className="absolute bottom-0 left-0 w-full p-10 flex flex-col gap-4">
      <motion.div 
        layoutId={`title-${project.id}`}
        className="flex flex-col gap-2"
      >
        <span className="text-primary-container font-black uppercase tracking-[0.3em] text-[10px]">Featured Project</span>
        <h4 className="text-3xl font-black text-white tracking-tighter leading-none">{project.name}</h4>
      </motion.div>
      
      <motion.button 
        className="mt-4 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-bold text-sm tracking-widest uppercase hover:bg-white hover:text-slate-900 transition-all flex items-center justify-center gap-2 self-start"
      >
        View Details
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </motion.button>
    </div>
  </motion.div>
);

const ProjectModal = ({ project, onClose }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12 overflow-y-auto bg-slate-900/80 backdrop-blur-xl"
    onClick={onClose}
  >
    <motion.div 
      layoutId={`card-${project.id}`}
      className="w-full max-w-6xl bg-white rounded-[4rem] overflow-hidden shadow-2xl relative"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close Button */}
      <button 
        onClick={onClose}
        className="absolute top-8 right-8 w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center z-50 hover:scale-110 transition-transform"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="flex flex-col lg:flex-row h-full">
        {/* Left Side: Image & Links */}
        <div className="lg:w-1/2 relative h-[300px] lg:h-auto overflow-hidden">
          <img 
            src={project.image} 
            alt={project.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent lg:bg-gradient-to-r" />
          
          <div className="absolute bottom-10 left-10 flex flex-wrap gap-4">
            <a href={project.live} target="_blank" className="px-8 py-4 bg-primary-container text-white font-black text-xs tracking-widest uppercase rounded-full shadow-lg hover:scale-105 transition-transform flex items-center gap-2">
              Live Project
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a href={project.github} target="_blank" className="px-8 py-4 bg-white text-slate-900 font-black text-xs tracking-widest uppercase rounded-full shadow-lg hover:scale-105 transition-transform flex items-center gap-2 border border-slate-100">
              GitHub Client
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Right Side: Details */}
        <div className="lg:w-1/2 p-10 md:p-20 overflow-y-auto max-h-[80vh] lg:max-h-none">
          <motion.div 
            layoutId={`title-${project.id}`}
            className="flex flex-col gap-4 mb-10"
          >
            <span className="text-primary-container font-black uppercase tracking-[0.5em] text-xs">Featured Project</span>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none">{project.name}</h2>
          </motion.div>

          <div className="flex flex-col gap-10">
            {/* Tech Stack */}
            <div>
              <h6 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-4">Technology Stack</h6>
              <div className="flex flex-wrap gap-3">
                {project.stack.map((tech, i) => (
                  <span key={i} className="px-5 py-2 bg-slate-50 text-slate-600 font-bold text-xs rounded-full border border-slate-100 shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <h6 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-4">Brief Description</h6>
              <p className="text-slate-500 font-medium leading-relaxed text-lg">
                {project.description}
              </p>
            </div>

            {/* Challenges */}
            <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
              <h6 className="text-xs font-black text-slate-900 uppercase tracking-[0.3em] mb-4">Challenges Faced</h6>
              <p className="text-slate-500 font-medium leading-relaxed">
                {project.challenges}
              </p>
            </div>

            {/* Future Plans */}
            <div>
              <h6 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-4">Potential Improvements & Future Plans</h6>
              <p className="text-slate-500 font-medium leading-relaxed">
                {project.future}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: "AI SaaS Platform",
      image: "/ai_saas_project_1777411272402.png",
      stack: ["Next.js", "TypeScript", "OpenAI API", "Tailwind CSS", "Stripe"],
      description: "A comprehensive AI-powered Software-as-a-Service platform that enables users to generate content, analyze data, and manage workflows using advanced machine learning models.",
      live: "https://example.com",
      github: "https://github.com",
      challenges: "Integrating multiple AI models while maintaining low latency and optimizing token usage for cost-effectiveness was a major technical hurdle. We implemented a sophisticated caching layer to solve this.",
      future: "Plan to integrate custom fine-tuned models and add a team collaboration feature with real-time editing capabilities.",
    },
    {
      id: 2,
      name: "Luxury E-commerce",
      image: "/ecommerce_project_1777411290811.png",
      stack: ["React", "Redux", "Node.js", "Express", "MongoDB", "Framer Motion"],
      description: "An ultra-modern e-commerce ecosystem designed for a high-end luxury brand. Features seamless animations, a robust checkout system, and a customized admin dashboard.",
      live: "https://example.com",
      github: "https://github.com",
      challenges: "Ensuring 60FPS animations while managing large product images and a complex state for the shopping cart across different sessions was a key focus.",
      future: "Implementing AR (Augmented Reality) for product visualization and integrating an AI-based personal stylist assistant.",
    },
    {
      id: 3,
      name: "Crypto Dashboard",
      image: "/crypto_dashboard_project_1777411441725.png",
      stack: ["Vite", "Web3.js", "React Query", "Chart.js", "PostgreSQL"],
      description: "A high-performance financial dashboard for tracking cryptocurrency portfolios in real-time. Connects directly to multiple wallets and exchanges for live data analysis.",
      live: "https://example.com",
      github: "https://github.com",
      challenges: "Managing high-frequency data updates from multiple WebSocket connections without triggering unnecessary re-renders in the UI components.",
      future: "Adding predictive analytics using historical data and implementing one-click trading across multiple decentralized exchanges.",
    },
  ];

  return (
    <section className="py-40 bg-white relative" id="projects">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-24 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="text-primary-container font-black uppercase tracking-[0.5em] text-xs px-10 py-3 bg-white rounded-full border border-slate-100 shadow-sm">
              Portfolio
            </span>
          </motion.div>
          <h3 className="text-7xl md:text-9xl font-black text-slate-900 tracking-tighter leading-none">
            Featured <span className="text-slate-200">Projects.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={setSelectedProject} 
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;

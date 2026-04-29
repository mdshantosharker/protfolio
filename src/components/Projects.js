"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const ProjectCard = ({ project, onClick }) => (
  <motion.div 
    layoutId={`card-${project.id}`}
    whileHover={{ y: -12 }}
    className="group relative h-[450px] w-full rounded-[2.5rem] overflow-hidden cursor-pointer isolate"
    onClick={() => onClick(project)}
  >
    {/* Background Glow */}
    <div className="absolute inset-0 bg-primary-container/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl" />

    {/* Main Card Container */}
    <div className="absolute inset-[2px] rounded-[2.4rem] overflow-hidden bg-slate-900 border border-white/10 group-hover:border-primary-container/50 transition-colors duration-500 z-10">
      
      {/* Project Image */}
      <div className="absolute inset-0 h-full w-full">
        <img 
          src={project.image} 
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent opacity-90 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950 opacity-80" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
        
        {/* Animated Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4 overflow-hidden">
          {project.stack.slice(0, 3).map((tech, i) => (
            <span 
              key={i} 
              className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-white font-bold text-[9px] tracking-widest uppercase border border-white/10 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 3 && (
            <span 
              className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-white font-bold text-[9px] tracking-widest uppercase border border-white/10 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
              style={{ transitionDelay: `300ms` }}
            >
              +{project.stack.length - 3}
            </span>
          )}
        </div>

        {/* Title Area */}
        <motion.div layoutId={`title-${project.id}`} className="relative z-20">
           <h4 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-2 group-hover:text-primary-container transition-colors duration-500 leading-none">
             {project.name}
           </h4>
        </motion.div>

        {/* Description snippet & Button container */}
        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
          <div className="overflow-hidden">
            <p className="text-slate-300 text-sm line-clamp-2 mt-4 font-medium">
              {project.description}
            </p>
          </div>
        </div>

        {/* View Details Button - floats up */}
        <div className="translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200 mt-6">
           <button className="flex items-center justify-center gap-3 w-full sm:w-auto text-[10px] font-black text-white uppercase tracking-[0.2em] bg-primary-container/20 hover:bg-primary-container px-8 py-4 rounded-full backdrop-blur-md border border-primary-container/50 hover:border-transparent hover:text-slate-900 transition-all duration-300 shadow-xl">
             View Details
             <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
             </svg>
           </button>
        </div>
      </div>
    </div>
  </motion.div>
);

const ProjectModal = ({ project, onClose }) => {
  // Prevent scrolling on body when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8 bg-slate-900/70 backdrop-blur-lg"
      onClick={onClose}
    >
      <motion.div 
        layoutId={`card-${project.id}`}
        className="w-full max-w-3xl bg-white rounded-[2rem] overflow-hidden shadow-2xl relative my-auto flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <motion.button 
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-black/40 hover:bg-black/70 text-white rounded-full flex items-center justify-center z-50 transition-colors backdrop-blur-md"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </motion.button>

        {/* Image Header */}
        <div className="relative h-48 sm:h-64 md:h-72 w-full overflow-hidden shrink-0 group">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            src={project.image} 
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
          <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
            <motion.div layoutId={`title-${project.id}`}>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-none">{project.name}</h2>
            </motion.div>
          </div>
        </div>

        {/* Content Body */}
        <div 
          className="p-6 md:p-8 bg-slate-50 flex-1 overflow-y-auto"
          style={{ scrollbarWidth: 'thin', scrollbarColor: '#cbd5e1 transparent' }}
        >
          <div className="flex flex-col gap-6 md:gap-8">
            
            {/* Tech Stack */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            >
              <h6 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <span className="w-4 h-px bg-slate-300"></span> Technologies
              </h6>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech, i) => (
                  <span key={i} className="px-3 py-1.5 bg-white text-slate-700 font-bold text-[10px] uppercase tracking-wider rounded-md border border-slate-200 shadow-sm hover:border-primary-container transition-colors cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Description */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            >
              <h6 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <span className="w-4 h-px bg-slate-300"></span> Overview
              </h6>
              <p className="text-slate-600 font-medium text-sm md:text-base leading-relaxed">
                {project.description}
              </p>
            </motion.div>

            {/* Grid for Challenges & Future */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
               <div className="p-5 bg-white rounded-2xl border border-rose-100 shadow-sm hover:shadow-md transition-shadow">
                  <h6 className="text-[10px] font-black text-rose-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                     <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                     Challenges Faced
                  </h6>
                  <p className="text-slate-600 font-medium text-xs leading-relaxed">
                    {project.challenges}
                  </p>
               </div>
               <div className="p-5 bg-white rounded-2xl border border-emerald-100 shadow-sm hover:shadow-md transition-shadow">
                  <h6 className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                     <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                     Future Plans
                  </h6>
                  <p className="text-slate-600 font-medium text-xs leading-relaxed">
                    {project.future}
                  </p>
               </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-slate-200 mt-2"
            >
               <a 
                 href={project.live} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex-1 py-4 bg-primary-container text-white font-black text-xs tracking-widest uppercase rounded-xl flex items-center justify-center gap-2 hover:bg-primary-container/90 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-container/30"
               >
                 Live Project
                 <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                 </svg>
               </a>
               <a 
                 href={project.github} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex-1 py-4 bg-slate-900 text-white font-black text-xs tracking-widest uppercase rounded-xl flex items-center justify-center gap-2 hover:bg-slate-800 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/30"
               >
                 GitHub Repo
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                 </svg>
               </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: "KeenKeeper",
      image: "/keenKeeper.png",
      stack: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "React Router", "Context API"],
      description: "KeenKeeper is a sophisticated productivity and task management application focused on helping users organize daily routines, track goals, and maintain a high level of efficiency.",
      live: "https://keenkeeperctv.netlify.app/",
      github: "https://github.com/mdshantosharker/KeenKeeper",
      challenges: "Creating a highly interactive and drag-and-drop enabled UI that performs smoothly across both desktop and mobile devices.",
      future: "Adding collaborative team workspaces and deep integration with popular calendars.",
    },
    {
      id: 2,
      name: "Lawyer Appointment",
      image: "/lawyer.png",
      stack: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "React Router", "Context API"],
      description: "A comprehensive Lawyer Appointment Booking Application designed to seamlessly connect clients with legal professionals. It features real-time booking, user authentication, and an intuitive dashboard for managing schedules.",
      live: "https://lawyer-appoinmnet.netlify.app/",
      github: "https://github.com/mdshantosharker/Lawyer-Appointment-Booking-Application",
      challenges: "Implementing a robust real-time calendar and managing state for available time slots dynamically while preventing double bookings.",
      future: "Plan to integrate video consultation capabilities and an AI-driven legal assistant for initial query filtering.",
    },
    {
      id: 3,
      name: "FlagshipFaceOff",
      image: "/flagship.png",
      stack: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "React Router", "Context API"],
      description: "A dynamic mobile phone comparison platform, FlagshipFaceOff, allowing users to compare the latest flagship smartphones side-by-side with detailed specifications and user reviews.",
      live: "https://flagshipphones.netlify.app/",
      github: "https://github.com/mdshantosharker/FlagshipFaceOff",
      challenges: "Structuring the complex nested specification data so it can be easily compared and rendered without performance issues.",
      future: "Integrating a real-time price tracking system and user-generated benchmark scores.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden" id="projects">
      {/* Background Decorative Blob */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-container/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 md:mb-32 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-px bg-primary-container"></div>
            <span className="text-primary-container font-black uppercase tracking-[0.5em] text-xs">
              Portfolio
            </span>
            <div className="w-12 h-px bg-primary-container"></div>
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-slate-900 tracking-tighter leading-none"
          >
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-600">Projects.</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <ProjectCard 
                project={project} 
                onClick={setSelectedProject} 
              />
            </motion.div>
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

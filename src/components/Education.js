"use client";

import { motion } from "framer-motion";

const EducationCard = ({ year, degree, institution, details, isLeft }) => (
  <div className={`relative flex items-center justify-between w-full mb-20 ${isLeft ? "flex-row-reverse" : "flex-row"}`}>
    {/* Empty space for the other side */}
    <div className="hidden md:block w-[45%]" />

    {/* Year Node on the Timeline */}
    <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
      <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        className="w-12 h-12 rounded-full bg-white border-4 border-primary-container shadow-[0_0_20px_rgba(0,193,142,0.3)] flex items-center justify-center font-black text-xs text-primary-container"
      >
        {year.split("-")[0]}
      </motion.div>
      <div className="h-full w-1 bg-gradient-to-b from-primary-container to-transparent absolute top-12 bottom-0" />
    </div>

    {/* The Content Card */}
    <motion.div 
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, type: "spring" }}
      className={`w-full md:w-[45%] ml-16 md:ml-0 bg-white/40 backdrop-blur-3xl border border-white/40 rounded-[2.5rem] p-10 shadow-2xl relative group overflow-hidden`}
    >
      {/* Accent Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/5 blur-3xl group-hover:bg-primary-container/10 transition-colors" />
      
      <div className="flex flex-col gap-4">
        <span className="text-primary-container font-black text-xs tracking-[0.3em] uppercase px-6 py-2 bg-slate-50 rounded-full border border-slate-100 self-start">
          {year}
        </span>
        <h4 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter leading-tight">
          {degree}
        </h4>
        <h5 className="text-lg font-bold text-slate-500 italic">
          {institution}
        </h5>
        <div className="w-12 h-1 bg-slate-100 my-2" />
        <p className="text-slate-400 font-medium leading-relaxed">
          {details}
        </p>
      </div>
    </motion.div>
  </div>
);

const Education = () => {
  const educationData = [
    {
      year: "2020 - 2024",
      degree: "Bachelor of Computer Science",
      institution: "Your University Name Here",
      details: "Focused on Software Engineering, Data Structures, and Modern Web Architectures. Maintained a high academic standing with major projects in Full-Stack Development.",
    },
    {
      year: "2018 - 2020",
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Your College Name Here",
      details: "Specialized in Science. Completed with excellence in Mathematics and Physics, laying the foundation for computer science studies.",
    },
    {
      year: "2016 - 2018",
      degree: "Secondary School Certificate (SSC)",
      institution: "Your School Name Here",
      details: "Academic foundation in general sciences. Developed early interests in technology and problem solving.",
    },
  ];

  return (
    <section className="py-40 bg-white overflow-hidden relative" id="education">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-container/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="text-primary-container font-black uppercase tracking-[0.5em] text-xs px-10 py-3 bg-white rounded-full border border-slate-100 shadow-sm">
              My Journey
            </span>
          </motion.div>
          <h3 className="text-7xl md:text-9xl font-black text-slate-900 tracking-tighter leading-none">
            Educational <span className="text-slate-200">Qualification.</span>
          </h3>
        </div>

        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-slate-100 via-slate-200 to-transparent" />

          {educationData.map((edu, index) => (
            <EducationCard 
              key={index} 
              {...edu} 
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

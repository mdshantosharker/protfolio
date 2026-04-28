"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const Skills = () => {
  const [isHovered, setIsHovered] = useState(false);

  const skills = [
    { name: "React", color: "#61DAFB", path: "M22.215 11.23c-.015-.011-.03-.021-.046-.03a.5.5 0 0 0-.05-.03.5.5 0 0 0-.05-.02c-.02-.01-.04-.01-.06-.015a.5.5 0 0 0-.06-.01.5.5 0 0 0-.06 0c-.02 0-.04 0-.06 0s-.04 0-.06 0a.5.5 0 0 0-.06.01.5.5 0 0 0-.06.015c-.02.005-.04.01-.05.02a.5.5 0 0 0-.05.03c-.015.01-.03.02-.045.03l-.001.002c-.014.01-.028.024-.042.037l-.04.04c-.013.014-.025.028-.037.042l-.001.001c-.012.014-.024.03-.035.044s-.02.03-.03.047-.018.032-.025.049c-.008.017-.014.035-.02.052s-.01.037-.015.056c-.004.02-.007.039-.008.059s-.002.04-.002.06c0 .02 0 .04.002.06s.004.039.008.059.01.037.015.056c.006.018.012.035.02.052s.016.033.025.049.02.031.03.047.024.03.035.044l.001.001c.012.014.024.028.037.042.013.014.026.027.04.04.014.013.028.025.042.037s.029.025.044.037l.001.001c.015.012.03.024.046.035.016.01.032.021.049.03a.5.5 0 0 0 .052.025c.018.008.037.014.056.02s.039.011.059.015a.5.5 0 0 0 .06.008c.02.001.04.002.06.002s.04 0 .06-.002a.5.5 0 0 0 .059-.008c.019-.004.038-.009.056-.015s.035-.012.052-.02.033-.016.049-.025c.016-.01.032-.02.047-.03.015-.011.03-.023.044-.035l.001-.001c.014-.012.028-.024.041-.037s.027-.026.04-.04c.013-.014.025-.028.037-.042l-.001-.001c.012-.014.024-.029.035-.044s.021-.031.03-.047c.009-.016.018-.032.026-.049s.014-.035.02-.052.011-.037.015-.056c.004-.02.007-.039.008-.059s.002-.04.002-.06c0-.02 0-.04-.002-.06s-.004-.039-.008-.059-.01-.037-.015-.056-.012-.035-.02-.052-.016-.033-.026-.049-.02-.032-.03-.047-.023-.03-.035-.044l-.001-.001c-.012-.014-.024-.028-.037-.042s-.026-.027-.04-.04c-.013-.013-.027-.025-.041-.037l-.044-.037ZM12 16.01c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm8.79-4c0 1.22-.37 2.36-1.01 3.31-2.4 3.54-6.49 4.39-9.58 3.5-3.09-.89-5.18-3.7-5.18-6.81 0-1.22.37-2.36 1.01-3.31 2.4-3.54 6.49-4.39 9.58-3.5 3.09.89 5.18 3.7 5.18 6.81z" },
    { name: "Next.js", color: "#000000", path: "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.768 18.258l-5.464-7.018v5.52h-1.428v-9.52h1.428l5.228 6.714v-6.714h1.428v9.52h-1.192z" },
    { name: "JavaScript", color: "#F7DF1E", path: "M0 0h24v24H0V0zm22.034 18.258c-.22-.467-.449-.918-.922-1.252-.627-.426-1.476-.617-2.107-.912-.311-.158-.59-.26-.85-.433-.26-.173-.467-.393-.553-.626-.121-.396-.086-.836.033-1.272.121-.437.478-.773.804-1.023.324-.249.702-.403 1.08-.517.376-.115.767-.149 1.147-.149.423.018.82.043 1.177.143.356.101.672.205.95.387.278.182.513.437.662.762.15.32.233.741.193 1.149l-2.643.36c.017-.267.019-.503-.025-.712a.465.465 0 0 0-.22-.309c-.094-.061-.223-.101-.38-.108-.158-.007-.37.004-.518.04-.147.036-.271.1-.36.186-.089.086-.14.197-.153.319-.026.244.085.474.26.632.176.158.427.267.69.352.26.085.55.147.84.215.29.068.599.146.885.24.59.193 1.079.447 1.438.807.359.36.542.81.514 1.293-.012.461-.162.895-.39 1.28-.23.385-.533.737-.91 1.014-.378.277-.845.488-1.392.606-.547.117-1.147.132-1.794.04-.636-.091-1.232-.32-1.73-.672-.497-.353-.849-.86-1.016-1.395l2.715-.761c.157.395.397.69.654.889.257.199.519.293.98.392.462.1.859.058 1.156-.025.297-.083.527-.233.675-.45.149-.217.225-.506.214-.819-.012-.313-.11-.542-.239-.7-.129-.158-.35-.298-.667-.435zm-11.83.565c-.15.433-.343.834-.61 1.169-.266.335-.597.59-.993.774-.395.184-.864.296-1.37.349-.506.052-1.045.034-1.567-.038-.522-.072-.989-.243-1.414-.538-.423-.295-.733-.715-.883-1.234l2.577-.753c.061.267.158.483.279.641.12.158.283.273.477.351.193.078.419.117.654.113.235-.003.456-.045.632-.132.177-.086.322-.21.432-.375.11-.164.166-.351.164-.564V4.41h2.822v14.413z" },
    { name: "Node.js", color: "#339933", path: "M12 0l-12 6.928v13.856l12 6.928 12-6.928v-13.856l-12-6.928zm0 2.309l10 5.774v11.547l-10 5.774-10-5.774v-11.547l10-5.774z" },
    { name: "Tailwind", color: "#06B6D4", path: "M12 4.8C9.5 4.8 8 6 7.5 8.4c.9-1.2 2-1.7 3.3-1.4 1.1.2 1.8.9 2.7 1.8C14.9 10.3 16.6 12 21 12c2.5 0 4-1.2 4.5-3.6-.9 1.2-2 1.7-3.3 1.4-1.1-.2-1.8-.9-2.7-1.8-1.4-1.5-3.1-3.2-7.5-3.2zm-7.5 7.2C2 12 .5 13.2 0 15.6c.9-1.2 2-1.7 3.3-1.4 1.1.2 1.8.9 2.7 1.8 1.4 1.5 3.1 3.2 7.5 3.2 2.5 0 4-1.2 4.5-3.6-.9 1.2-2 1.7-3.3 1.4-1.1-.2-1.8-.9-2.7-1.8-1.4-1.5-3.1-3.2-7.5-3.2z" },
    { name: "MongoDB", color: "#47A248", path: "M17.193 9.555c-1.354-4.37-4.103-7.23-5.044-8.125a.39.39 0 0 0-.643.18c-.477 1.83-1.063 5.484.053 9.47-1.115-3.986-1.7-7.64-1.223-9.47a.39.39 0 0 1 .643-.18c.94.895 3.69 3.755 5.044 8.125a.393.393 0 0 1-.223.473.395.395 0 0 1-.5-.133c-1.32-2.18-3.39-3.41-4.14-3.86a.395.395 0 0 0-.583.424c.05.51.196 1.393.196 1.393s.06 1.636.01 3.25c-.05 1.614-.26 3.21-.26 3.21s-.11 1.6-.584 3.09c-.473 1.49-.66 1.9-.66 1.9s.114-1.25.132-2.47c.018-1.22-.05-2.61-.05-2.61s-.15-2.17-.67-3.95c-.52-1.78-1.19-3.56-1.19-3.56a.39.39 0 0 0-.69.09c.47-1.84 1.05-5.49-.06 9.47-1.11-3.98-1.69-7.63-1.22-9.47a.39.39 0 0 1 .64-.18c.94.89 3.69 3.75 5.04 8.12a.39.39 0 0 1-.22.47.39.39 0 0 1-.5-.13c-1.32-2.18-3.39-3.41-4.14-3.86a.395.395 0 0 0-.58.42c.05.51.2 1.39.2 1.39s.06 1.64.01 3.25c-.05 1.61-.26 3.21-.26 3.21s.11-1.6.58-3.09c.47-1.49.66-1.9.66-1.9s-.11 1.25-.13 2.47c-.02 1.22.05 2.61.05 2.61s.15 2.17.67 3.95c.52 1.78 1.19 3.56 1.19 3.56a.39.39 0 0 0 .69-.09Z" },
    { name: "Express", color: "#000000", path: "M24 12c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12z" },
    { name: "HTML5", color: "#E34F26", path: "M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" },
    { name: "CSS3", color: "#1572B6", path: "M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" },
  ];

  const tripledSkills = [...skills, ...skills, ...skills];

  const NeonCard = ({ skill }) => (
    <motion.div
      whileHover={{ scale: 1.05, y: -10 }}
      className="relative flex items-center gap-6 px-10 py-6 rounded-3xl bg-white/40 backdrop-blur-3xl border transition-all duration-500 cursor-default group overflow-hidden"
      style={{ borderColor: `${skill.color}44` }}
    >
      {/* Neon Glow Border */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: `inset 0 0 20px ${skill.color}22, 0 0 40px ${skill.color}11` }}
      />
      
      <div className="w-12 h-12 flex items-center justify-center relative">
        <svg viewBox="0 0 24 24" className="w-full h-full drop-shadow-lg transition-transform group-hover:scale-125 duration-500" style={{ fill: skill.color }}>
          <path d={skill.path} />
        </svg>
        <div className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-40 transition-opacity" style={{ backgroundColor: skill.color }} />
      </div>
      
      <span className="text-xl font-black text-slate-900 tracking-tighter uppercase">
        {skill.name}
      </span>
    </motion.div>
  );

  return (
    <section 
      className="py-40 bg-white overflow-hidden relative" 
      id="skills"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Parallax Background Typography */}
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 100, ease: "linear" }}
        className="absolute top-1/2 -translate-y-1/2 left-0 whitespace-nowrap pointer-events-none select-none opacity-[0.03]"
      >
        <span className="text-[40rem] font-black tracking-tighter text-slate-900">
          TECH STACK TECH STACK TECH STACK
        </span>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 mb-32 relative z-10 text-center md:text-left">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 flex justify-center md:justify-start"
        >
          <span className="text-primary-container font-black uppercase tracking-[0.5em] text-xs px-8 py-3 bg-slate-50 rounded-full border border-slate-100 shadow-sm">
            Core Competencies
          </span>
        </motion.div>
        <h3 className="text-6xl md:text-9xl font-black text-slate-900 tracking-tighter leading-[0.8]">
          Looping <span className="text-slate-200 italic">Excellence.</span>
        </h3>
      </div>

      <div className="relative flex flex-col gap-12 z-20">
        {/* Row 1: Right to Left */}
        <div className="flex overflow-hidden">
          <motion.div 
            animate={{ x: [0, -2880] }}
            transition={{ 
              repeat: Infinity,
              duration: isHovered ? 60 : 35,
              ease: "linear",
            }}
            className="flex gap-12 whitespace-nowrap px-6"
          >
            {tripledSkills.map((skill, i) => (
              <NeonCard key={`row1-${i}`} skill={skill} />
            ))}
          </motion.div>
        </div>

        {/* Row 2: Left to Right */}
        <div className="flex overflow-hidden">
          <motion.div 
            animate={{ x: [-2880, 0] }}
            transition={{ 
              repeat: Infinity,
              duration: isHovered ? 80 : 45,
              ease: "linear",
            }}
            className="flex gap-12 whitespace-nowrap px-6"
          >
            {[...tripledSkills].reverse().map((skill, i) => (
              <NeonCard key={`row2-${i}`} skill={skill} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Side Fades */}
      <div className="absolute top-0 left-0 h-full w-80 bg-gradient-to-r from-white via-white/80 to-transparent z-30 pointer-events-none" />
      <div className="absolute top-0 right-0 h-full w-80 bg-gradient-to-l from-white via-white/80 to-transparent z-30 pointer-events-none" />
    </section>
  );
};

export default Skills;

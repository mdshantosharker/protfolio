"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState } from "react";

const ContactCard = ({ info }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={info.link}
      target="_blank"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative flex flex-col items-center gap-8 p-12 rounded-[4rem] bg-white/40 backdrop-blur-3xl border border-white/50 shadow-2xl transition-all duration-500 group cursor-pointer hover:shadow-primary-container/20"
    >
      {/* Dynamic Aura */}
      <div 
        className="absolute -inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[4.5rem] blur-3xl pointer-events-none"
        style={{ backgroundColor: `${info.color}15` }}
      />
      
      {/* Brand Logo Container */}
      <div className="relative w-24 h-24 flex items-center justify-center transform translate-z-50">
        <div 
          style={{ backgroundColor: info.color }}
          className="absolute inset-0 rounded-[2.5rem] opacity-10 group-hover:opacity-20 transition-opacity duration-500"
        />
        <div className="relative z-10 w-12 h-12 flex items-center justify-center transition-transform duration-500 group-hover:scale-125">
          <svg viewBox="0 0 24 24" className="w-full h-full drop-shadow-xl" style={{ fill: info.color }}>
            <path d={info.svgPath} />
          </svg>
        </div>
        {/* Pulsing Ring */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.1, 0.2] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute inset-0 border-2 rounded-[2.5rem]"
          style={{ borderColor: info.color }}
        />
      </div>

      <div className="flex flex-col items-center text-center gap-3 translate-z-20">
        <span className="text-[11px] font-black uppercase tracking-[0.5em] text-slate-400 group-hover:text-primary-container transition-colors">
          {info.label}
        </span>
        <span className="text-2xl font-black text-slate-900 tracking-tighter group-hover:scale-105 transition-transform">
          {info.value}
        </span>
      </div>

      {/* Trace Border Animation */}
      <div className="absolute inset-0 rounded-[4rem] border-2 border-transparent group-hover:border-primary-container/20 transition-colors duration-700" />
    </motion.a>
  );
};

const Contact = () => {
  const [focusedField, setFocusedField] = useState(null);

  const contactData = [
    { 
      label: "Email Me", 
      value: "contact@mhtawfik.dev", 
      icon: "mail", 
      color: "#EA4335", 
      link: "mailto:contact@mhtawfik.dev",
      svgPath: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" 
    },
    { 
      label: "Call Me", 
      value: "+880 1XXX XXXXXX", 
      icon: "call", 
      color: "#3B82F6", 
      link: "tel:+8801XXXXXXXXX",
      svgPath: "M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01A11.36 11.36 0 018.57 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.58c0-.55-.45-1-1-1z"
    },
    { 
      label: "WhatsApp Me", 
      value: "Chat Now", 
      icon: "chat", 
      color: "#25D366", 
      link: "https://wa.me/8801XXXXXXXXX",
      svgPath: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
    },
  ];

  const InputField = ({ label, type = "text", name, isTextArea = false }) => (
    <div className="relative">
      <motion.div 
        animate={{ 
          borderColor: focusedField === name ? "#00C18E" : "rgba(0,0,0,0.05)",
          backgroundColor: focusedField === name ? "white" : "rgba(255,255,255,0.4)"
        }}
        className={`w-full rounded-[2rem] border-2 transition-all duration-500 overflow-hidden ${isTextArea ? "h-40" : "h-20"}`}
      >
        {isTextArea ? (
          <textarea 
            name={name}
            onFocus={() => setFocusedField(name)}
            onBlur={() => setFocusedField(null)}
            placeholder={label}
            className="w-full h-full bg-transparent px-10 py-7 outline-none text-slate-900 font-bold placeholder:text-slate-400 placeholder:font-bold resize-none text-lg"
          />
        ) : (
          <input 
            type={type}
            name={name}
            onFocus={() => setFocusedField(name)}
            onBlur={() => setFocusedField(null)}
            placeholder={label}
            className="w-full h-full bg-transparent px-10 outline-none text-slate-900 font-bold placeholder:text-slate-400 placeholder:font-bold text-lg"
          />
        )}
      </motion.div>
    </div>
  );

  return (
    <section className="py-60 bg-white relative overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <span className="text-primary-container font-black uppercase tracking-[0.6em] text-xs px-12 py-4 bg-white rounded-full border border-slate-100 shadow-xl">
              Start a Conversation
            </span>
          </motion.div>
          <h3 className="text-8xl md:text-[10rem] font-black text-slate-900 tracking-tighter leading-[0.75]">
            Let's <span className="text-slate-200">Connect.</span>
          </h3>
        </div>

        {/* Trio-Card Header with SVGs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          {contactData.map((info, i) => (
            <ContactCard key={i} info={info} />
          ))}
        </div>

        {/* Ultra-Modern Wide Glass Form */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="absolute -inset-10 bg-primary-container/5 blur-[120px] rounded-[5rem] pointer-events-none" />
          
          <div className="relative bg-white/70 backdrop-blur-3xl border border-white/60 rounded-[4.5rem] p-12 md:p-24 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)]">
            <form className="flex flex-col gap-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <InputField label="Full Name" name="name" />
                <InputField label="Email Address" type="email" name="email" />
              </div>
              <InputField label="Project Subject" name="subject" />
              <InputField label="Tell me about your project" name="message" isTextArea={true} />
              
              <motion.button
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="w-full h-24 bg-slate-900 text-white rounded-[2rem] font-black text-lg tracking-[0.4em] uppercase shadow-3xl flex items-center justify-center gap-6 group overflow-hidden relative transition-all"
              >
                <div className="absolute inset-0 bg-primary-container translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out" />
                <span className="relative z-10">Send Message</span>
                <svg className="w-6 h-6 relative z-10 transition-transform duration-500 group-hover:translate-x-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Atmospheric Vibe */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-container/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />
    </section>
  );
};

export default Contact;

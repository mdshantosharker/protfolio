"use client";

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 max-w-7xl mx-auto gap-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-lg font-black text-slate-900 tracking-tighter"
        >
          MD SHANTO SHARKAR
        </motion.div>
        <div className="flex gap-8 font-label-caps text-label-caps text-slate-500">
          {["Home", "About", "Skills", "Contact"].map((item) => (
            <a key={item} className="hover:text-primary-container transition-colors" href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </div>
        <div className="flex gap-6">
          {["link", "code", "mail"].map((icon) => (
            <motion.a
              key={icon}
              whileHover={{ y: -3, color: "var(--primary-container)" }}
              className="text-slate-500 transition-colors opacity-80 hover:opacity-100"
              href="#"
            >
              <span className="material-symbols-outlined">{icon}</span>
            </motion.a>
          ))}
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-slate-400 font-label-caps">
        © {new Date().getFullYear()} Md Shanto Sharkar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

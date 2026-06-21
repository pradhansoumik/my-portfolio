import { motion } from "framer-motion";
import { siteConfig } from "../data/site.config";
import Typewriter from "./Typewriter";

export default function Hero() {
  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-sunset-light via-sunset to-sunset-dark dark:from-sunset-dark dark:via-gray-900 dark:to-black text-white px-6 text-center"
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-sm md:text-base uppercase tracking-widest mb-4 text-white/80"
      >
        Welcome to my portfolio
      </motion.p>
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
        Hi, I&apos;m {siteConfig.name}
      </h1>
      <p className="text-lg md:text-2xl max-w-2xl mb-10 text-white/90 h-10">
        <Typewriter words={siteConfig.roles} />
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="#portfolio"
          className="px-8 py-3 bg-white text-sunset font-semibold rounded-full shadow-lg hover:scale-105 hover:bg-sunset-light hover:text-white transition-transform duration-300"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-sunset transition-colors duration-300"
        >
          Get In Touch
        </a>
        <a
          href={siteConfig.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 border-2 border-white/50 text-white font-semibold rounded-full hover:bg-white/10 transition-colors duration-300"
        >
          Download Resume
        </a>
      </div>
    </motion.section>
  );
}

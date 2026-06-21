import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills, skillCategories } from "../data/site.config";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center px-6 py-20 bg-white dark:bg-gray-800"
    >
      <h2 className="text-4xl font-bold mb-4 text-center text-black dark:text-white">
        Skills
      </h2>
      <div className="w-16 h-1 bg-sunset rounded-full mb-8 mx-auto" />

      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {skillCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === cat
                ? "bg-sunset text-white"
                : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        <AnimatePresence mode="popLayout">
          {filtered.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="flex flex-col items-center justify-center p-6 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <span className="text-4xl mb-3">{skill.icon}</span>
              <p className="text-base font-semibold text-gray-800 dark:text-gray-200">
                {skill.name}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {skill.category}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

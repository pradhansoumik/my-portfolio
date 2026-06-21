import { useState } from "react";
import FadeInSection from "./FadeInSection";
import ProjectModal from "./ProjectModal";
import projects from "../data/projects.json";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="portfolio"
      className="min-h-screen flex flex-col justify-center bg-gray-50 dark:bg-sunset-dark text-black dark:text-white px-6 py-20"
    >
      <h2 className="text-4xl font-bold mb-4 text-center">Portfolio / Projects</h2>
      <div className="w-16 h-1 bg-sunset rounded-full mb-12 mx-auto" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <FadeInSection key={project.title} delay={index * 0.1}>
            <article className="flex flex-col h-full p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-5xl mb-4">{project.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 text-sunset">
                {project.title}
              </h3>
              <p className="flex-grow mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.description}
              </p>
              {project.tags && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-sunset/10 text-sunset dark:bg-sunset/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex-1 text-center px-4 py-2 border-2 border-sunset text-sunset font-medium rounded-full hover:bg-sunset hover:text-white transition-colors duration-300"
                >
                  Details
                </button>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2 bg-sunset text-white font-medium rounded-full hover:bg-sunset-light transition-colors duration-300"
                >
                  GitHub
                </a>
              </div>
            </article>
          </FadeInSection>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

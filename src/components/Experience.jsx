import FadeInSection from "./FadeInSection";
import { experiences } from "../data/site.config";

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col justify-center bg-white dark:bg-gray-800 text-black dark:text-white px-6 py-20"
    >
      <h2 className="text-4xl font-bold mb-4 text-center">Experience</h2>
      <div className="w-16 h-1 bg-sunset rounded-full mb-12 mx-auto" />

      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-3 top-0 h-full w-1 bg-sunset/30" />

        {experiences.map((exp, index) => (
          <FadeInSection key={exp.company} delay={index * 0.15}>
            <div className="mb-10 flex items-start relative last:mb-0">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-sunset border-4 border-white dark:border-gray-800 mr-6 z-10 mt-1" />
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md w-full hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-sunset mb-1">
                  {exp.role}
                </h3>
                <p className="text-sm italic mb-3 text-gray-500 dark:text-gray-400">
                  {exp.company} &middot; {exp.period}
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {exp.details}
                </p>
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
}

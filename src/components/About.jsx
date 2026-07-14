import FadeInSection from "./FadeInSection";
import { stats } from "../data/site.config";

export default function About() {
  return (
    <FadeInSection>
      <section
        id="about"
        className="min-h-screen flex flex-col justify-center items-center bg-gray-50 dark:bg-sunset-dark text-black dark:text-white px-6 py-20"
      >
        <h2 className="text-4xl font-bold mb-4 text-center">About Me</h2>
        <div className="w-16 h-1 bg-sunset rounded-full mb-10" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12 w-full">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md"
            >
              <p className="text-3xl font-bold text-sunset">{stat.value}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto space-y-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300 text-center">
          <p>
            I&apos;m a software developer with a strong focus on backend
            engineering and scalable system design. Currently working as a Senior
            Java Developer at Amdocs, Experience in Development, Enhancement & Maintenance of Web-based application using Core Java,
            Spring Framework & Microservices, Database, CI/CD and AI
          </p>
          <p>
            My primary expertise spans Java, Spring Boot, microservices architecture,
            and modern frontend tooling with React and Next.js. I enjoy turning
            complex problems into clean, maintainable solutions — and sharing
            what I learn along the way.
          </p>
          <p>
            When I&apos;m not coding, I&apos;m curating interview prep notes and
            exploring new patterns in distributed systems.
          </p>
        </div>
      </section>
    </FadeInSection>
  );
}

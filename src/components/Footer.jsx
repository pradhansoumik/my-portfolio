import { siteConfig } from "../data/site.config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-sunset-dark text-white py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-300">
          &copy; {year} {siteConfig.name}. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-sunset-light transition-colors"
          >
            GitHub
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-sunset-light transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-sm hover:text-sunset-light transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

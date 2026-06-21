import { useEffect, useState } from "react";
import { siteConfig } from "../data/site.config";
import DarkModeToggle from "./DarkModeToggle";

const links = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Experience", href: "#experience" },
  { name: "Resources", href: "#resources" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sectionIds = links.map((link) => link.href.slice(1));

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 100;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (href) => {
    const id = href.slice(1);
    const isActive = activeSection === id;
    return `transition-colors ${
      isActive
        ? "text-sunset font-semibold"
        : "text-gray-700 dark:text-gray-200 hover:text-sunset"
    }`;
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-sunset-dark/95 backdrop-blur-sm shadow"
          : "bg-white dark:bg-sunset-dark shadow"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-16">
        <a href="#hero" className="text-2xl font-bold text-sunset">
          {siteConfig.shortName}
        </a>

        <div className="hidden lg:flex items-center space-x-6">
          {links.map((link) => (
            <a key={link.name} href={link.href} className={linkClass(link.href)}>
              {link.name}
            </a>
          ))}
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 text-sm border border-sunset text-sunset rounded-full hover:bg-sunset hover:text-white transition-colors"
          >
            Resume
          </a>
          <DarkModeToggle />
        </div>

        <div className="lg:hidden flex items-center gap-3">
          <DarkModeToggle />
          <button
            className="text-2xl text-gray-700 dark:text-gray-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-800 px-6 py-4 space-y-4 border-t border-gray-200 dark:border-gray-700">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`block ${linkClass(link.href)}`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sunset font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}

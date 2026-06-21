import { useMemo, useState } from "react";
import ReactMarkdown from "react-markdown";
import FadeInSection from "./FadeInSection";

function parseSections(markdown) {
  const lines = markdown.split("\n");
  const sections = [];
  let current = null;

  for (const line of lines) {
    if (line.startsWith("## ")) {
      if (current) sections.push(current);
      current = { title: line.replace("## ", "").trim(), content: "" };
    } else if (current) {
      current.content += line + "\n";
    }
  }
  if (current) sections.push(current);
  return sections;
}

export default function Resources({ markdown }) {
  const [search, setSearch] = useState("");
  const [openTitle, setOpenTitle] = useState(null);

  const sections = useMemo(() => parseSections(markdown), [markdown]);

  const filtered = sections.filter(
    (s) =>
      !search ||
      s.title.toLowerCase().includes(search.toLowerCase()) ||
      s.content.toLowerCase().includes(search.toLowerCase())
  );

  const effectiveOpen = filtered.some((s) => s.title === openTitle)
    ? openTitle
    : filtered[0]?.title ?? null;

  return (
    <section
      id="resources"
      className="min-h-screen flex flex-col justify-center bg-white dark:bg-gray-800 px-6 py-20"
    >
      <h2 className="text-4xl font-bold mb-4 text-center text-black dark:text-white">
        Knowledge Base
      </h2>
      <div className="w-16 h-1 bg-sunset rounded-full mb-4 mx-auto" />
      <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
        Searchable interview prep notes — JVM, OOP, microservices, and more.
      </p>

      <div className="max-w-2xl mx-auto w-full mb-8">
        <input
          type="search"
          placeholder="Search topics..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-sunset focus:outline-none text-black dark:text-white"
        />
      </div>

      <div className="max-w-2xl mx-auto w-full space-y-3">
        {filtered.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400 py-8">
            No topics match &ldquo;{search}&rdquo;
          </p>
        )}
        {filtered.map((section, index) => {
          const isOpen = effectiveOpen === section.title;
          return (
            <FadeInSection key={section.title} delay={index * 0.05}>
              <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                <button
                  onClick={() => setOpenTitle(isOpen ? null : section.title)}
                  className="w-full flex justify-between items-center px-6 py-4 bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-left"
                >
                  <span className="font-semibold text-black dark:text-white">
                    {section.title}
                  </span>
                  <span className="text-sunset text-xl">{isOpen ? "−" : "+"}</span>
                </button>
                {openTitle === section.title && (
                  <div className="px-6 py-4 markdown-content text-gray-700 dark:text-gray-300">
                    <ReactMarkdown>{section.content.trim()}</ReactMarkdown>
                  </div>
                )}
              </div>
            </FadeInSection>
          );
        })}
      </div>
    </section>
  );
}

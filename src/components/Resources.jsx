import { useMemo, useState } from "react";
import FadeInSection from "./FadeInSection";
import {
  resourceCategories,
  resourcesMeta,
} from "../data/resources-topics";

function filterCategories(categories, query) {
  if (!query) return categories;

  const q = query.toLowerCase();

  return categories
    .map((category) => {
      const categoryMatch = category.title.toLowerCase().includes(q);

      const topics = category.topics
        .map((topic) => {
          const topicMatch = topic.title.toLowerCase().includes(q);
          const subTopics = topic.subTopics.filter((sub) =>
            sub.toLowerCase().includes(q)
          );

          if (categoryMatch || topicMatch || subTopics.length > 0) {
            return {
              ...topic,
              subTopics:
                categoryMatch || topicMatch ? topic.subTopics : subTopics,
            };
          }
          return null;
        })
        .filter(Boolean);

      if (categoryMatch || topics.length > 0) {
        return { ...category, topics };
      }
      return null;
    })
    .filter(Boolean);
}

export default function Resources() {
  const [search, setSearch] = useState("");
  const [openCategory, setOpenCategory] = useState(null);

  const filtered = useMemo(
    () => filterCategories(resourceCategories, search),
    [search]
  );

  return (
    <section
      id="resources"
      className="min-h-screen flex flex-col justify-center bg-white dark:bg-gray-800 px-6 py-20"
    >
      <h2 className="text-4xl font-bold mb-4 text-center text-black dark:text-white">
        Knowledge Base
      </h2>
      <div className="w-16 h-1 bg-sunset rounded-full mb-4 mx-auto" />
      <p className="text-center text-gray-600 dark:text-gray-400 mb-2 max-w-2xl mx-auto">
        {resourcesMeta.description}
      </p>
      <p className="text-center mb-8">
        <a
          href={resourcesMeta.prepHubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sunset hover:underline font-medium"
        >
          Detailed notes → {resourcesMeta.prepHubLabel}
        </a>
      </p>

      <div className="max-w-3xl mx-auto w-full mb-8">
        <input
          type="search"
          placeholder="Search topics..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-sunset focus:outline-none text-black dark:text-white"
        />
      </div>

      <div className="max-w-3xl mx-auto w-full space-y-3">
        {filtered.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400 py-8">
            No topics match &ldquo;{search}&rdquo;
          </p>
        )}

        {filtered.map((category, index) => {
          const isOpen = openCategory === category.id;

          return (
            <FadeInSection key={category.id} delay={index * 0.05}>
              <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                <button
                  type="button"
                  onClick={() =>
                    setOpenCategory(isOpen ? null : category.id)
                  }
                  className="w-full flex justify-between items-center px-6 py-4 bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-left"
                >
                  <span className="font-semibold text-black dark:text-white flex items-center gap-2">
                    <span aria-hidden="true">{category.icon}</span>
                    {category.title}
                    <span className="text-xs font-normal text-gray-500 dark:text-gray-400">
                      {category.topics.length} topics
                    </span>
                  </span>
                  <span className="text-sunset text-xl shrink-0 ml-4">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 py-5 space-y-5 border-t border-gray-200 dark:border-gray-700">
                    {category.topics.map((topic, topicIndex) => (
                      <div key={topic.title}>
                        <h4 className="font-semibold text-black dark:text-white mb-2 text-sm">
                          {topicIndex + 1}. {topic.title}
                        </h4>
                        {topic.subTopics.length > 0 && (
                          <ul className="list-disc list-inside space-y-1 pl-1 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            {topic.subTopics.map((sub) => (
                              <li key={sub}>{sub}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
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

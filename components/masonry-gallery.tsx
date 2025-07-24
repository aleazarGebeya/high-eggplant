import React from "react";
import { MasonryProjectCard } from "@/components/masonry-project-card";
import { getProjects, getCategories, ProjectCategory, Project } from "@/lib/project-data";
import { motion, AnimatePresence } from "framer-motion";

export function MasonryGallery({ openCaseStudy }: { openCaseStudy: (p: Project) => void }) {
  const [activeCategory, setActiveCategory] = React.useState<ProjectCategory>("All");
  const [projects, setProjects] = React.useState<Project[]>(getProjects("All"));

  React.useEffect(() => {
    setProjects(getProjects(activeCategory));
  }, [activeCategory]);

  return (
    <section id="work" className="container mx-auto py-32 px-4 md:px-0">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center bg-gradient-to-r from-cyan-700 to-blue-700 text-transparent bg-clip-text">Featured Work</h2>
      <div className="flex justify-center mb-10 flex-wrap gap-4">
        {getCategories().map(cat => (
          <button
            key={cat}
            className={`px-5 py-2 rounded-full font-semibold transition border ${cat === activeCategory ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white border-transparent shadow-xl" : "bg-cyan-50 text-cyan-700 border-cyan-200 hover:bg-cyan-100"}`}
            onClick={() => setActiveCategory(cat as ProjectCategory)}
            aria-pressed={cat === activeCategory}
          >
            {cat}
          </button>
        ))}
      </div>
      <div
        className="columns-1 md:columns-2 lg:columns-3 gap-7 space-y-7 animate-fadeIn mt-6"
        aria-label="Masonry Project Gallery"
      >
        <AnimatePresence>
          {projects.map(project => (
            <motion.div
              key={project.id + project.category}
              exit={{ opacity: 0, x: 32 }}
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 0.45 }}
              layout
              style={{ breakInside: "avoid" }}
            >
              <MasonryProjectCard project={project} onClick={() => openCaseStudy(project)} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}

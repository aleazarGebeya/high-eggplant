import React from "react";
import { Project } from "@/lib/project-data";

export function MasonryProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <div
      tabIndex={0}
      className="group cursor-pointer border border-cyan-100 shadow-lg overflow-hidden rounded-2xl bg-white transition-transform hover:scale-[1.035] hover:z-40 focus:z-40 duration-200 ring-cyan-200 ring-offset-2 ring-offset-white focus:ring-4 flex flex-col"
      style={{ breakInside: "avoid" }}
      onClick={onClick}
      onKeyDown={e => { if (e.key === "Enter") onClick(); }}
      aria-label={`Open case study: ${project.title}`}
    >
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full object-cover group-hover:scale-105 transition-transform duration-300 aspect-[4/5.5]"
          loading="lazy"
        />
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-lg text-gray-900 mb-1">{project.title}</h3>
          <div className="text-sm text-cyan-700 font-semibold mb-2">{project.client}</div>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs bg-cyan-50 rounded px-3 py-1 font-semibold text-cyan-700">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Project } from "@/lib/project-data";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function ProjectCaseStudyModal({ project, open, onClose }: {
  project: Project|null,
  open: boolean,
  onClose: () => void,
}) {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={v => !v && onClose()}>
      <DialogContent className="max-w-2xl p-0 rounded-3xl overflow-hidden border-0 shadow-2xl bg-white">
        <div className="lg:flex">
          <motion.img
            src={project.image}
            alt={project.title}
            initial={{ scale: 0.97, opacity: 0}}
            animate={{ scale: 1, opacity: 1}}
            transition={{ duration: 0.4, type: "spring" }}
            className="w-full lg:w-1/2 h-72 lg:h-auto object-cover"
          />
          <div className="p-7 flex-1">
            <DialogHeader>
              <DialogTitle className="text-2xl font-black text-gray-900 mb-1">{project.title}</DialogTitle>
              <DialogDescription className="text-md text-cyan-900 mb-3">Client: {project.client}</DialogDescription>
            </DialogHeader>
            <div className="text-gray-700 text-base mb-4">{project.description}</div>
            <div className="mb-4 text-sm text-cyan-700">
              {project.tags.map(tag => (
                <span key={tag} className="inline-block mr-2 px-3 py-1 bg-cyan-50 rounded-full font-semibold">{tag}</span>
              ))}
            </div>
            <div className="mb-3">
              <div className="font-bold text-cyan-800">Case study</div>
              <div className="text-gray-900/90 mt-2"><b>Intro:</b> {project.caseStudy.intro}</div>
              <div className="mt-2 text-gray-800"><b>Process:</b> {project.caseStudy.process}</div>
              <div className="mt-2 text-gray-700"><b>Result:</b> {project.caseStudy.result}</div>
            </div>
            <Button className="mt-6 w-full" onClick={onClose}>Close</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

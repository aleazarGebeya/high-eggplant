import React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AboutSection } from "@/components/about-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { AwardsSection } from "@/components/awards-section";
import { MasonryGallery } from "@/components/masonry-gallery";
import { ContactSection } from "@/components/contact-section";
import { ProjectCaseStudyModal } from "@/components/project-case-study-modal";
import { Project } from "@/lib/project-data";
import { AnimatePresence, motion } from "framer-motion";

export function MainPage() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState<Project|null>(null);

  function openCaseStudy(project: Project) {
    setSelectedProject(project);
    setModalOpen(true);
  }
  function closeCaseStudy() {
    setModalOpen(false);
    setTimeout(() => setSelectedProject(null), 200);
  }

  return (
    <>
      <Navbar />
      <motion.div
        className="pt-28 bg-gradient-to-br from-cyan-50 via-white to-blue-50 min-h-screen relative"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        {/* HERO SECTION */}
        <div className="container mx-auto flex flex-col md:flex-row-reverse items-center py-36 md:py-48 px-4 md:px-0 gap-12">
          <motion.div
            className="flex-1 flex flex-col items-start md:items-end justify-center"
            initial={{ opacity: 0, x: 120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.65, type: "spring" }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-600 to-blue-600 text-transparent bg-clip-text mb-8 leading-tight">
              Creative Portfolio <br className="hidden md:block" /> of Jane Doe
            </h1>
            <div className="text-xl md:text-2xl text-gray-600 max-w-xl text-right">
              Dazzling digital experiences, powerful design, and visual storytelling that<br />
              connects brands with the world.
            </div>
          </motion.div>
          <motion.div
            className="flex-1 flex justify-center items-center"
            initial={{ opacity: 0, x: -120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.65, type: "spring" }}
          >
            <img
              src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=420&h=420&fit=crop&auto=format"
              alt="Jane Doe digital designer NYC"
              loading="lazy"
              className="rounded-full border-8 border-cyan-200 shadow-2xl w-80 h-80 object-cover bg-gradient-to-t from-cyan-100 to-blue-100"
            />
          </motion.div>
        </div>
        {/* GALLERY */}
        <MasonryGallery openCaseStudy={openCaseStudy} />
        {/* ABOUT */}
        <AboutSection />
        {/* TESTIMONIALS */}
        <TestimonialsSection />
        {/* AWARDS */}
        <AwardsSection />
        {/* CONTACT */}
        <ContactSection />
        <Footer />
      </motion.div>
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed z-[999] inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          >
            <ProjectCaseStudyModal project={selectedProject!} open={modalOpen} onClose={closeCaseStudy} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

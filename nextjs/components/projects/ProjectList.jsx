'use client'
import ProjectCard from "./ProjectCard";
import { AnimatePresence } from "framer-motion";

export default function ProjectList({styles, projects, globalStyles}){
  const parsedProjects = projects.map((project,i)=><ProjectCard 
    key={`project-${i}`}
    styles={styles}
    project={project}
    globalStyles={globalStyles}
    i={ i }
  />)

  return (
    <AnimatePresence>
      <section className={[styles.projectList, "full h-min ms-4 flex flex-wrap justify-center overflow-y-scroll"].join(' ')}>
        { parsedProjects }
      </section>
    </AnimatePresence>
  );
}
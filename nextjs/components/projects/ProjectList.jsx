'use client'
import ProjectCard from "./ProjectCard";
import { AnimatePresence } from "framer-motion";

export default function ProjectList({styles, projects, globalStyles}){
  const parsedProjects = projects.map((project,i)=>{
    return(<ProjectCard 
      key={`project-${i}`}
      styles={styles}
      project={project}
      globalStyles={globalStyles}
      i={ i }
    />)
  });
  
  return (
    <AnimatePresence>
      <section className={[styles.projectList, "w-full h-full flex flex-wrap justify-center items-center overflow-y-scroll"].join(' ')}>
        { parsedProjects && parsedProjects }
      </section>
    </AnimatePresence>
  );
}
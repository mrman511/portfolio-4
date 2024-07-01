'use client'
import ProjectCard from "./projectCard/ProjectCard";
import { AnimatePresence } from "framer-motion";

export default function ProjectList({styles, projects, globalStyles}){
  const parsedProjects = [];
  if (projects){
    projects.forEach((project,i)=>{
      parsedProjects.push(<ProjectCard 
        key={`project-${i}`}
        styles={styles}
        project={project}
        globalStyles={globalStyles}
        i={ i }
      />)
    });
  } else {
    for (let i = 0 ; i < 4 ; i++){
      parsedProjects.push(<ProjectCard key={`loadercard-${i}`} />)
    }
  }
  
  return (
    <AnimatePresence>
      <section className={[styles.projectList, "w-full h-full flex flex-wrap justify-center items-center overflow-y-scroll"].join(' ')}>
        { parsedProjects }
      </section>
    </AnimatePresence>
  );
}
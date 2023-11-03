'use client'
import ProjectCard from "./ProjectCard";

export default function ProjectList({styles, projects, globalStyles}){
  const parsedProjects = projects.map((project,i)=><ProjectCard 
    key={`project-${i}`}
    styles={styles}
    project={project}
    globalStyles={globalStyles}
  />)

  return (
    <section className={[styles.projectList, "w-full h-min flex flex-wrap justify-center items-end"].join(' ')}>
      { parsedProjects }
    </section>
  );
}
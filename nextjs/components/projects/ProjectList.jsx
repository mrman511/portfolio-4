'use client'
import ProjectCard from "./ProjectCard";

export default function ProjectList({styles, projects}){
  const parsedProjects = projects.map(project=><ProjectCard 
    key={`project-${project.id}`}
    styles={styles}
    project={project}
  />)

  return (
    <section className="w-full flex flex-wrap justify-center">
      { parsedProjects }
    </section>
  );
}
'use client'
import { useState, useEffect } from "react";
import { getProjects } from "@/utils/api/projects";

import Navigation from "../Navigation";
import ProjectList from "./ProjectList";

export default function ProjectPage({globalStyles}){

  const [projects, setProjects] = useState(undefined);

  useEffect(()=>{
    if (!projects){
      getProjects(setProjects);
    }
  })

  return(
    <section className='w-full h-screen flex'>
      <Navigation styles={ globalStyles }/>
      {projects && <ProjectList projects={projects}/>}
    </section>
  );
}
'use client'
import { useState, useEffect } from "react";
import { getProjects } from "@/utils/api/projects";

import Navigation from "../Navigation";
import ProjectList from "./ProjectList";
import styles from '@/styles/Projects.module.scss';

export default function ProjectPage({globalStyles}){

  const [projects, setProjects] = useState(undefined);

  useEffect(()=>{
    if (!projects){
      getProjects(setProjects);
    }
  })

  return(
    <>
      <ProjectList projects={projects} styles={styles} globalStyles={ globalStyles }/>
    </>
  );
}
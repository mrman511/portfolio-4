'use client'
import {  useState, useEffect } from "react";
import { getAboutMe } from "@/utils/api/about";
import AboutList from "./AboutList";
import styles from '@/styles/About.module.scss';



export default function AboutPage({ globalStyles }){
  const [aboutMe, setAboutMe]=useState(null);
  

  useEffect(()=>{
    if (!aboutMe){
      getAboutMe(setAboutMe);
    }
  })


  return (
   <>
    { aboutMe && <AboutList styles={ styles } aboutMe={ aboutMe } /> }
   </>
  )
}
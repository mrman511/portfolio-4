'use client'
import {  useState, useEffect } from "react";
import { getAboutMe } from "@/utils/api/about";
import Image from "next/image";

// import profileImage from "@/public/profile-picture.jpeg";
// import AboutList from "./AboutList";
import MyStack from "./MyStack";
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
      { aboutMe && 
      <section className="w-full h-screen my-8 overflow-scroll">

        <article className="w-full my-8 flex flex-wrap justify-evenly items-center">
          <div className="relative w-72 lg:w-80 h-72 lg:h-80 m-4 rounded-full overflow-hidden">
            { aboutMe.profile.profile_picture && <Image 
              src={ process.env.NEXT_PUBLIC_STATIC_ROUTE + aboutMe.profile.profile_picture }
              fill
              style={{ objectFit: 'cover' }}
              alt='Paul Bodner'
              sizes="250px"
            />}
          </div>
          { aboutMe.profile.primary_text && <div className="max-w-[400px]">
            <p className="text-md sm:text-lg font-semibold">{ aboutMe.profile.primary_text }</p>
          </div>}
        </article>

        <article className="w-full mt-20">
          <h2 className="text-2xl ms-[25%] font-semibold">My Skill Set:</h2>
          <MyStack data={ aboutMe.stacks } />
        </article>
      </section> 
      }
    </>
  )
}
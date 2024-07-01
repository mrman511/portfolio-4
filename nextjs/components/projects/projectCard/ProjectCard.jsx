'use client'

import { motion, useCycle } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ProjectCardDescription from "./ProjectCardDescription";

export default function ProjectCard({project, i}){
  const [showDescription, toggleShowDescription] = useCycle(false, true);
  const [isAnimating, toggleIsAnimating]=useCycle(false, true)


  const imageComponent = (
    <div className={["relative w-full h-72"].join(' ')}>
      {project && <Image 
        src={ process.env.NEXT_PUBLIC_STATIC_ROUTE + project.mobile_image }
        fill
        alt={project.title}
        style={{
          objectFit: 'cover',
          objectPosition: 'top',
        }}
        sizes='200px'
      />}
    </div>
  );

  const handleToggle=()=>{
    if (!isAnimating){
      toggleIsAnimating();
      toggleShowDescription()
    }
  }
  const endAnimation=()=>{
    if (isAnimating){
      toggleIsAnimating()
    }
  }

  const CardLoader = (
    <div className="relative w-full h-[400px] overflow-hidden">
      <div className="absolute w-[200%] h-[200%] animate-cardloader bg-gradient-to-br from-beige-1/3 via-offwhite-2/3 to-beige-1/3">

      </div>
    </div>
  );

  return(
    <article className="relative p-2 m-2 w-11/12 max-w-[300px] bg-offwhite-2/3 text-offblack shadow">
      { project ? <>
        { project.live_link ? 
          <Link href={ project.live_link }>{ imageComponent }</Link> :
          imageComponent
        }
        <div className="relative w-full py-2 flex justify-center bottom-0 bg-offwhite-2/3 shadow">
          <h2 className="text-xl">{ project.title }</h2>
        </div>

        <div className="w-full py-2 flex">
          { project.github_link && <Link href={ project.github_link }><FontAwesomeIcon className="w-6 h-6 me-4" icon={ faGithub }/></Link> }
          { project.live_link && <Link href={ project.live_link }><FontAwesomeIcon className="w-6 h-6 me-4" icon={ faGlobe }/></Link> }
        </div>

        <motion.div
        className="overflow-hidden"
          initial={{ height: '0' }}
          animate={{ height: showDescription ? 'auto' : '0' }}
          onAnimationComplete={ endAnimation  }
        >
          <ProjectCardDescription project={ project }/>
        </motion.div>

        <div onClick={ handleToggle } className="w-full flex justify-center bg-offwhite-1/3 rounded border border-offblack shadow-md hover:cursor-pointer">
          <p>...</p>
        </div>
      </> : <>
      { CardLoader }
      </>}
    </article>
  );
}
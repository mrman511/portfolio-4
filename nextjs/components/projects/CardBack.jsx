import {  motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import StackCardList from "../StackCardList";
import { ST } from "next/dist/shared/lib/utils";

export default function CardBack({ styles, cardRef, Image, Link, project, showStack }){

  const parsedLanguages = <StackCardList 
    key={ `${project.title}-languages` } 
    styles={ styles } 
    dataArr={ project.languages }
    isCol={ true }
    title='Languages'
  />

  const parsedFrameworks = <StackCardList 
    key={ `${project.title}-frameworks` } 
    styles={ styles } 
    dataArr={ project.frameworks }
    isCol={ true }
    title='Frameworks'
    />


  const parsedTechnologies = <StackCardList 
    key={ `${project.title}-technologies` } 
    styles={ styles } 
    dataArr={ project.technologies }
    title='Technologies'
  />

  return(
    <div className={[styles.back, "relative top-0 w-full h-full sm:px-6 md:px-0 flex items-center justify-center overflow-hidden"].join(' ')}>
      <p className="absolute top-2 left-2 w-10/12 font-semibold">{ project.title }</p>
      <motion.div 
        className={[styles.icons, "absolute px-2 pe-2 mt-2 top-0 right-0 flex z-10 "].join(' ')}
        whileHover={{ scale: 1.5 }}
      >
        <Link href={project.github_link} className="relative">
          <FontAwesomeIcon icon={ faGithub } className={[styles.icon, 'w-6 h-6'].join(' ')} />
        </Link>
      </motion.div>

      <motion.article className="absolute w-full max-h-60 flex flex-col p-2 pb-18 overflow-scroll"
        animate={{
          opacity: showStack ? 0 : 1,
          zIndex: showStack ? 0 : 1,
        }}
        transition={{ delay: showStack ? 0 : .3 }}
      >
        <div className={[styles.cardInfo, "px-2 py-2  text-center"].join(' ')}>
          <p>{project.description}</p>
        </div>
      </motion.article>

      <motion.article className="absolute w-full h-full flex flex-col justify-center items-center pb-12"
        animate={{
          opacity: showStack ? 1 : 0,
          zIndex: showStack ? 1 : 0,
        }}
        transition={{ delay: showStack ? .3 : 0 }}
      >
        <div className={["relative w-full flex justify-evenly items-stretch overflow-scroll mb-4"].join(' ')}>
          { parsedLanguages }
          { parsedFrameworks }
        </div>
        { parsedTechnologies }
      </motion.article>
    </div>
  );
}
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function CardBack({ styles, cardRef, Image, Link, img, project }){
  console.log(project);

  const parsedLanguages = project.languages.map(language=>(
    <li key={ `${project.title}-${language.name}` } >{ language.name }</li>
  ))
  return(
    <div className={[styles.back, "relative top-0 w-full h-full px-4 flex flex-col items-center justify-around rounded-xl overflow-hidden"].join(' ')}>
      <div className={[styles.background, "absolute w-[100vw] h-[100vh]"].join(' ')}
        initial={false}
        style={{
          top: cardRef.current ? `-${cardRef.current.offsetTop}px` : 0,
          left: cardRef.current ? `-${cardRef.current.offsetLeft}px` : 0,
        }}
      >
      </div>

      <div className={[styles.icons, "absolute px-2 pe-2 py-1 top-0 right-0 flex z-10 rounded-bl-lg"].join(' ')}>
        <Link href={project.github_link} className="relative">
          <FontAwesomeIcon icon={ faGithub } className={[styles.icon, 'w-5 h-5'].join(' ')} />
        </Link>
      </div>

      <div className="w-full px-2 py-2 text-center">
        <p>{project.description}</p>
      </div>
      {/* <div className='w-full flex justify-between'>
        <div>
            <h4>Languages:</h4>
            <ul className="ps-2 mt-2">
              { parsedLanguages }
            </ul>
        </div>
        <div>
          <h4>Frameworks: </h4>
          <ul className="ps-2 mt-2">
            <li>Next.js</li>
            <li>Framer Motion</li>
          </ul>
        </div>
      </div> */}
      { project.live_link && <div className="w-full justify-self-end">
        <Link className='relative ms-4' href={ project.live_link }>
          <button className={[styles.btn,  "px-4 py-2 rounded-lg"].join(' ')}>View Live</button>
        </Link>
      </div> }


    </div>
  );
}
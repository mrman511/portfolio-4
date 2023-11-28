import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const CardLine = ({ styles, lineData }) => {
  return (
    <li className="m-2">{ lineData.name }</li>
  );
}

export default function CardBack({ styles, cardRef, Image, Link, project }){

  const parsedLanguages = project.languages.map(language=>(
    <CardLine key={ `${project.title}-${language.name}` } styles={ styles } lineData={ language }/>
  ));
  const parsedFrameworks = project.frameworks.map(framework=>(
    <CardLine key={ `${project.title}-${framework.name}` } styles={ styles } lineData={ framework }/>
  ));
  const parsedTechnologies = project.technologies.map(technology=>(
    <CardLine key={ `${project.title}-${technology.name}` } styles={ styles } lineData={ technology }/>
  ));

  return(
    <div className={[styles.back, "relative top-0 w-full h-full sm:px-6 md:px-0 flex flex-col items-center justify-around overflow-hidden"].join(' ')}>
      <div className="absolute w-full h-full z-0">
        <Image 
          src={ 'data:image/png;base64,' + project.desktop_image }
          fill
          alt={ project.title }
          style={{
            objectFit: 'cover',
            objectPosition: 'top',
          }}
          sizes='200px'
        />
      </div>

      <div className={[styles.icons, "absolute px-2 pe-2 py-1 top-0 right-0 flex z-10 "].join(' ')}>
        <Link href={project.github_link} className="relative">
          <FontAwesomeIcon icon={ faGithub } className={[styles.icon, 'w-5 h-5'].join(' ')} />
        </Link>
      </div>

      <div className="relative w-full h-full flex flex-col p-2">
        <div className={ [styles.cardInfo, "flex justify-center p-2 m-2"].join(' ') }>
          <h3>{ project.title }</h3>
        </div>
        <div className={[styles.cardInfo, "px-2 py-2 text-center"].join(' ')}>
          <p>{project.description}</p>
        </div>
      </div>

      { project.live_link && <div className="absolute w-full bottom-2">
        <Link className='relative ms-4' href={ project.live_link }>
          <button className={[styles.btn, styles.cardInfo,  "px-4 py-2 rounded-lg"].join(' ')}>View Live</button>
        </Link>
      </div> }


    </div>
  );
}
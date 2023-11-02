import Image from "next/image";
import defaultImage from '@/public/images/default.jpeg'

export default function ProjectCard({styles, project}){


  return (
    <article className="relative w-48 h-72 m-4 flex flex-col items-center rounded-lg overflow-hidden">
      <div className="absolute w-full h-full">
        <Image 
          src={defaultImage}
          fill
          alt={ project.title }
          style={{
            objectFit: 'cover',
            objectPosition: 'top',
          }}
          sizes='100px'
        />
      </div>

      <div className="absolute w-full bottom-0 pb-4 flex flex-col items-center">
        <h2>{ project.title }</h2>
      </div>
    </article>
  )
}
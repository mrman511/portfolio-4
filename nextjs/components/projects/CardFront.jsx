
export default function CardFront({styles, Image, img, project}){

  return (
    <div className={[styles.front, "w-full h-full rounded-xl overflow-hidden"]}>
      <Image 
        src={ 'data:image/png;base64,' + img }
        fill
        alt={project.title}
        style={{
          objectFit: 'cover',
          objectPosition: 'top',
        }}
        sizes='100px'
      />
  </div>
  );
}

export default function CardFront({styles, Image, img, project}){
  return (
    <div className={[styles.front, "relative w-full h-full"].join(' ')}>
      <Image 
        src={ 'data:image/png;base64,' + project.mobile_image }
        fill
        alt={project.title}
        style={{
          objectFit: 'cover',
          objectPosition: 'top',
        }}
        sizes='200px'
      />
    </div>
  );
}
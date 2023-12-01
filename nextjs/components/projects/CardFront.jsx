
export default function CardFront({styles, Image, img, project}){
  // console.log(process.env.NEXT_PUBLIC_STATIC_ROUTE + project.mobile_image);
  return (
    <div className={[styles.front, "relative w-full h-full"].join(' ')}>
      <Image 
        src={ process.env.NEXT_PUBLIC_STATIC_ROUTE + project.mobile_image }
        fill
        alt={project.title}
        style={{
          objectFit: 'contain',
          objectPosition: 'top',
        }}
        sizes='200px'
      />
    </div>
  );
}
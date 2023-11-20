import Image from "next/image";

export default function StackCard({styles, data}){
  // console.log(data);

  return (
    <article className={ [styles.stackCard, 'flex w-full flex-col rounded-xl overflow-hidden'].join(' ') }>
      <div className="relative w-full h-[500px]">
        <div className="absolute w-full h-full">
          <Image 
            src={'data:image/jpeg;base64,' + data.image}
            alt={ data.title }
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 500px) 300px, 500px"
          />
        </div>
        <div className={ [styles.title, "relative flex justify-center w-full mt-2 text-lg font-semibold sm:text-2xl sm:font-bold text-center"].join(' ') } >
          <h2>{ data.title }</h2>
        </div>
      </div>

    </article>
  );
}
export default function Hero({styles}){

  return(
    <article className="relative w-full h-full flex flex-col justify-center mx-[10%]">
      <h1 className="text-4xl">Paul <span className="font-semibold">Bodner</span></h1>
      <h3 className='mt-2 text-2xl' >Full Stack Developer</h3>
      <p className="text-2xl">Based out of Vancouver, Canada</p>
      <p className="mt-4">From Pixels to Databases: A Fullstack Journey.</p>
    </article>
  );
}
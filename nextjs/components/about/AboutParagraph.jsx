export default function AboutParagraph({ data }){

  return (
    <div className="relative">
      <p className="my-4 text-center  sm:text-lg md:text-xl">
        { data.text }
      </p>
    </div>
  );
}
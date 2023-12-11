import Image from "next/image";

function ListLine({ data, isCol }){
  const padding = isCol ? '' : 'px-2'
  return (
    <li className={ ["flex items-center", padding].join(' ') }>
      {data.image && <div className="relative w-5 h-5 me-1 my-1">
        <Image 
          src={process.env.NEXT_PUBLIC_STATIC_ROUTE + data.image}
          alt={ data.name }
          fill
          style={{ objectFit: 'cover' }}
          sizes='12px'
        />
      </div>}
      <p className="relative">{ data.name }</p>
    </li>
  );
}

export default function StackCardList({dataArr, styles, title, isCol}){
  const direction = isCol ? 'flex-col' : 'w-11/12 flex-wrap justify-evenly';

  const parsedLines = dataArr.map((lineData, i)=> <ListLine 
    key={ `${title}-line-${i}-${lineData.name}` }
    data={ lineData }
    isCol={ isCol }
  />);

  return (
    <ul className={ ['relative flex', direction].join(' ') }>
      <h3 className="w-full mb-1 text-center font-semibold" >{ title }</h3>
      { parsedLines }
    </ul>
  );
}
import Image from "next/image";

function ListLine({ data, isCol }){
  const padding = isCol ? '' : 'px-2'
  const align = isCol ? 'items-center w-full' : ''
  return (
    <li className={ ["flex", align, padding].join(' ') }>
      {data.image && <div className="relative w-5 h-5 me-2 my-1">
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

export default function StackCardList({dataArr, styles, title, isCol, shading}){
  const direction = isCol ? 'flex-col' : 'w-11/12 flex-wrap justify-evenly';
  const colour = shading ? 'p-2 bg-offblack-2/3 rounded-lg': '' 

  const parsedLines = dataArr.map((lineData, i)=> <ListLine 
    key={ `${title}-line-${i}-${lineData.name}` }
    data={ lineData }
    isCol={ isCol }
  />);

  return (
    <ul className={ ['relative flex my-1', direction, colour].join(' ') }>
      <h3 className="w-full mb-1 text-center font-semibold" >{ title }</h3>
      { parsedLines }
    </ul>
  );
}
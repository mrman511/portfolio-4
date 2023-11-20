import StackCard from "./StackCard";

export default function MyStack({ styles, data }){
  const parsedStackCards = data.map((cardData, i) => (
    <StackCard 
      key={`stack-card-${i}`}
      styles={ styles }
      data={ cardData }
    />
  ))


  return (
    <section className="flex w-full h-screen p-2 justify-center items-center">
      { parsedStackCards }
    </section>
  );
}
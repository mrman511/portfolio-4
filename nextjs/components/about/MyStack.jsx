import { faJs } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MyStack({}){

  return (
    <section className="w-full h-screen p-2">
      <article>
        <div className="flex">
          <FontAwesomeIcon className="w-12 h-12" icon={ faJs }/>
          <h2 height>JavaScript</h2>
        </div>
      </article>

    </section>
  );
}
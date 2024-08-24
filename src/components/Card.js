import { Button } from "./Button";
import { Link } from "react-router-dom";
export function EventCard(props) {
  return (
    <div
      className={`relative flex flex-col w-1/3 h-[26rem] mx-24 bg-cardbg items-center rounded-2xl ${props.explicit}`}
    >
      <img
        src={props.image}
        alt={props.alt}
        className={`mt-10 ${props.imageexplicit}`}
      />
      <h2>{props.title}</h2> <br />
      <p className="font-extralight px-12 text-center text-sm">{props.desc}</p>
      <Link
        to={`/registration-${props.where}`}
        className="absolute bottom-6  mt-0"
      >
        <Button what="Register" />
      </Link>
    </div>
  );
}

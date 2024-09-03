import { Button } from "./Button";
import { Link } from "react-router-dom";

export function EventCard(props) {
  return (
    <div className="flex flex-col w-full md:w-1/3 h-[26rem] bg-cardbg items-center rounded-2xl shadow-md shadow-phcolor mx-auto max-w-sm">
      <img src={props.image} alt={props.alt} className="mt-10 mb-4" />
      <h2 className="text-2xl font-bold mb-2 text-white">{props.title}</h2>
      <p className="font-extralight px-6 text-center text-sm text-white flex-grow">
        {props.desc}
      </p>
      <Link to={`/registration-${props.where}`} className="mb-6 mt-4">
        <Button what="Register" />
      </Link>
    </div>
  );
}

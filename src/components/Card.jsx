import { Button } from "./Button";

export function EventCard(props) {
  return (
    <div className="flex flex-row justify-between">
      <div className="h-96 w-72 bg-slate-700 flex flex-col items-center">
        <img src={props.image} alt={props.alt} className="mt-10" />
        <h2>{props.title}</h2>
        <p className="font-extralight px-8 text-center">{props.desc}</p>
        <Button what="Register" />
      </div>
    </div>
  );
}

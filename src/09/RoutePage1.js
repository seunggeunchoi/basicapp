import { useParams } from "react-router-dom";

export default function RoutePage1() {
  const item = useParams().item;
  const fruits = ["🍎", "🍌", "🍉"];
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold">RoutePage1</h1>
      <div className="w-full flex flex-col justify-start items-center text-xl m-2 p-2">
        {item}
        {fruits.includes(item) ? " is fruits" : " is not fruits"}
      </div>
    </div>
  );
}

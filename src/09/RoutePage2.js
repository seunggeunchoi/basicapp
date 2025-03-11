import { useLocatio, useLocation, useSearchParams } from "react-router-dom";
export default function RoutePage2() {
  const fruits = ["🍎", "🍌", "🍉"];

  const loc = useLocation();
  console.log("useLocation pathname: ", loc.pathname);
  console.log("useLocation search: ", loc.search);

  const [sParms] = useSearchParams();
  console.log("useSearchParams ", sParms);

  const qList = [...sParms];
  console.log("pList: ", qList);
  const lis = qList.map((item) => (
    <li key={item[0]}>
      {item[1]} : {fruits.includes(item[1]) ? "fruits" : "not fruits"}
    </li>
  ));

  console.log(sParms.get("item1"));
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold">RoutePage2</h1>
      <div className="w-full flex flex-col justify-start items-center text-xl m-2 p-2">
        <ul>
          {
            /* {item}
        {fruits.includes(item) ? " is fruits" : " is not fruits"} */
            lis
          }
        </ul>
      </div>
    </div>
  );
}

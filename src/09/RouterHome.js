import { Link } from "react-router-dom";
export default function RouterHome() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold">RouterHome</h1>
      <div className="w-1/2 grid grid-col2 m-10">
        <div className="w-full flex flex-col justify-start items-center text-xl m-2 p-2">
          <h2>Page1 값 전달</h2>
          <ul>
            <li>
              <Link to="/p1/🍎">Apple🍎</Link>
            </li>
            <li>
              <Link to="/p1/🍌">Banana🍌</Link>
            </li>
            <li>
              <Link to="/p1/🥕">Carrot🥕</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full flex flex-col justify-start items-center text-xl m-2 p-2">
        <h2>Page2 값 전달</h2>
        <ul>
          {/* <li>
            <Link to="/p2?item=🍎">Apple🍎</Link>
          </li>
          <li>
            <Link to="/p2?item=🍌">Banana🍌</Link>
          </li>
          <li>
            <Link to="/p2?item=🥕">Carrot🥕</Link>
          </li> */}
          <li>
            <Link to="/p2?item1=🍎&item2=🍌&item3=🥕">
              Apple🍎, Banana🍌, Carrot🥕
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

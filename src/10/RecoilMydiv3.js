import TailButton from "../UI/TailButton";
import { AtomN } from "./AtomN";
import { useRecoilState } from "recoil";
export default function RecoilMyDiv3({ d1, d2, d3 }) {
  const [n, setN] = useRecoilState(AtomN);
  const handleUp = () => {
    setN(n + 1);
    localStorage.setItem("n", n);
  };
  const handledDown = () => {
    setN(n - 1);
    localStorage.setItem("n", n);
  };
  // const handledSave = () => {
  //   localStorage.setItem("n", n);
  // };
  const handledRemove = () => {
    localStorage.removeItem("n", n);
    setN(0);
  };
  return (
    <div
      className="flex flex-col p-5 m-10
                 w-3/4 h-3/4
                 bg-lime-500 text-white "
    >
      {`${d1} > ${d2} > ${d3}`}
      <div className="grid grid-cols-3 mt-2">
        <TailButton caption="증가" bcolor="blue" handleClick={handleUp} />
        <TailButton caption="감소" bcolor="blue" handleClick={handledDown} />
        {/* <TailButton caption="저장" bcolor="blue" handleClick={handledSave} /> */}
        <TailButton caption="삭제" bcolor="blue" handleClick={handledRemove} />
      </div>
    </div>
  );
}

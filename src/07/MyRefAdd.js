import TailButton from "../UI/TailButton";
import { useRef, useEffect } from "react";
export default function MyRefAdd() {
  const x1 = useRef();
  const x2 = useRef();
  const x3 = useRef();

  const handleAdd = () => {
    if (!x1.current.value) {
      alert("첫번째 값을 입력하세요.");
      x1.current.focus();
      return;
    }
    if (!x2.current.value) {
      alert("두번째 값을 입력하세요.");
      x2.current.focus();
      return;
    }

    x3.current.value = parseInt(x1.current.value) + parseInt(x2.current.value);
    // console.log("x1: ", x1.current.value);
    // console.log("x2: ", x2.current.value);
    // x3.current.value = Number(x1.current.value) + Number(x2.current.value);
    // console.log("x3", x3.current.value);
  };

  const handleFocus = (x) => {
    x3.current.value = "";
    x.current.value = "";
  };

  useEffect(() => {
    x1.current.focus();
  }, []);

  return (
    <div className="w-10/12 felx justify-center items-center">
      <div className="bg-slate grid grid-cols-5 gap-2 m-5 p-5">
        <input
          type="number"
          id="txt1"
          ref={x1}
          onFocus={() => handleFocus(x1)}
          className="bg-gray-50 border border-gray-300 rounded-lg  text-gray-900 text-center text-xl p-2.5"
        />
        <div className="flex justify-center items-center text-xl fontbold">
          +
        </div>
        <input
          type="number"
          id="txt2"
          ref={x2}
          onFocus={() => handleFocus(x2)}
          className="bg-gray-50 border border-gray-300 rounded-lg  text-gray-900 text-center text-xl p-2.5"
        />
        <TailButton caption="=" bcolor="orange" handleClick={handleAdd} />
        <input
          type="number"
          id="txt3"
          ref={x3}
          className="bg-gray-50 border border-gray-300 rounded-lg  text-gray-900 text-center text-xl p-2.5"
        />
      </div>
    </div>
  );
}

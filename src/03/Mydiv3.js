export default function Mydiv3(probs) {
  return (
    <div
      className="flex flex-col p-5 m-10
                 w-3/4 h-3/4
                 bg-lime-500 text-white "
    >
      {`${probs.d1} > ${probs.d2} > ${probs.d3}`}
    </div>
  );
}

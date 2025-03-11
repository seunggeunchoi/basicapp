import RecoilMydiv3 from "./RecoilMydiv3";
export default function RecoilMyDiv2(probs) {
  return (
    <div
      className="flex flex-col p-5 m-10
                 w-3/4 h-3/4
                 justify-center items-center
                 bg-lime-700 text-white"
    >
      <div className="w-full">{`${probs.dn1} > ${probs.dn2}`}</div>
      <RecoilMydiv3 d1={probs.dn1} d2={probs.dn2} d3={probs.dn3} />
    </div>
  );
}

import { FaSortUp, FaSortDown } from "react-icons/fa";
import TailButton from "../UI/TailButton";
import { useState, useEffect, useRef } from "react";

export default function Rest() {
  const [tdata, setTdata] = useState([]);
  const [tags, setTags] = useState([]);
  const [isUpdata, setIsUpdata] = useState(false);
  const [isUpdataId, setIsUpdataId] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const txt1Ref = useRef();
  const txt2Ref = useRef();

  const url = "http://localhost:3005/posts";

  const getFetchData = async () => {
    const resp = await fetch(url);
    const data = await resp.json();

    setTdata(data);
  };

  const handleOk = () => {
    if (isUpdata) {
      jsonPut();
    } else {
      jsonPost();
    }
  };
  const jsonPost = async () => {
    if (txt1Ref.current.value === "") {
      alert("제목을 입력하세요.");
      txt1Ref.current.focus();
      return;
    }
    if (txt2Ref.current.value === "") {
      alert("작성자를 입력하세요.");
      txt2Ref.current.focus();
      return;
    }

    const postData = {
      title: txt1Ref.current.value,
      author: txt2Ref.current.value,
    };

    const resp = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    });

    const data = await resp.json();
    console.log(data);

    setTdata([...tdata, data]);
    txt1Ref.current.value = "";
    txt2Ref.current.value = "";
    txt1Ref.current.focus();
    txt2Ref.current.focus();
  };

  const jsonDelete = async (id) => {
    await fetch(`${url}/${id}`, {
      method: "DELETE",
    });

    setTdata(tdata.filter((item) => item.id !== id));
  };

  const jsonPut = async () => {
    const putData = {
      id: isUpdataId,
      title: txt1Ref.current.value,
      author: txt2Ref.current.value,
    };

    const resp = await fetch(`${url}/${isUpdataId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(putData),
    });

    const data = await resp.json();
    setTdata(tdata.map((item) => (item.id === isUpdataId ? data : item)));

    txt1Ref.current.value = "";
    txt2Ref.current.value = "";
    txt1Ref.current.focus();
    txt2Ref.current.focus();

    setIsUpdata(false);
    setIsUpdataId("");
  };

  const handleUpdate = (item) => {
    txt1Ref.current.value = item.title;
    txt2Ref.current.value = item.author;

    setIsUpdata(true);
    setIsUpdataId(item.id);
  };

  useEffect(() => {
    getFetchData();
  }, []);

  //제목기준 정렬 기능추가
  const [tSortOder, setTsortOder] = useState("desc");
  const titleSort = () => {
    const sortedData = [...tdata].sort((a, b) => {
      return tSortOder === "asc"
        ? a.title.localeCompare(b.title, undefined, { numeric: true }) // 오름차순
        : b.title.localeCompare(a.title, undefined, { numeric: true }); // 내림차순
    });

    setTdata(sortedData);
    setTsortOder(tSortOder === "asc" ? "desc" : "asc");
  };

  //페이징 기능추가
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFristItem = indexOfLastItem - itemsPerPage;
  const currentItems = tdata.slice(indexOfFristItem, indexOfLastItem);
  const totalPages = Math.ceil(tdata.length / itemsPerPage);

  useEffect(() => {
    console.log(tdata);

    let tm = currentItems.map((item) => (
      <tr key={item.id} className="h-10 border-b">
        <td className="text-center">{item.title}</td>
        <td className="text-center">{item.author}</td>
        <td className="text-center">
          <TailButton
            caption="삭제"
            bcolor="orange"
            handleClick={() => jsonDelete(item.id)}
          />
        </td>
        <td className="text-center">
          <TailButton
            caption="수정"
            bcolor="lime"
            handleClick={() => handleUpdate(item)}
          />
        </td>
      </tr>
    ));
    setTags(tm);
  }, [tdata, currentPage]);

  return (
    <div className="w-full flex flex-col justify-center items-center mb-5">
      <div className="w-11/12 grid grid-cols-1 md:grid-cols-7 bg-slate-100 text-center my-5 p-5">
        <label htmlFor="txt1" className="my-2">
          제목
        </label>
        <div className="flex col-span-3">
          <input
            id="txt1"
            type="text"
            className="form-input w-full"
            ref={txt1Ref}
          />
        </div>

        <label htmlFor="txt2" className="my-2">
          작성자
        </label>
        <div className="flex">
          <input
            id="txt2"
            type="text"
            className="form-input w-full"
            ref={txt2Ref}
          />
        </div>
        <TailButton
          caption={isUpdata ? "수정" : "입력"}
          bcolor={isUpdata ? "lime" : "blue"}
          handleClick={handleOk}
        />
      </div>
      <table className="w-11/12 text-left text-sm font-light text-surface">
        <thead className="border-b border-neutral-200 font-medium">
          <tr className="bg-black text-white font-bold text-center">
            <th scope="col" className="px-6 py-3 w-3/6 text-center">
              제목
              <button onClick={titleSort} className="px-3 py-1">
                {tSortOder === "asc" ? <FaSortUp /> : <FaSortDown />}
              </button>
            </th>
            <th scope="col" className="px-6 py-3 w-1/6 text-center">
              작성자
            </th>
            <th scope="col" className="px-6 py-3 w-1/6 text-center">
              삭제
            </th>
            <th scope="col" className="px-6 py-3 w-1/6 text-center">
              편집
            </th>
          </tr>
        </thead>
        <tbody>{tags}</tbody>
      </table>
      {/* 페이징 버튼 */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="mx-2 px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
        >
          이전
        </button>
        <span className="mx-3">
          {currentPage} / {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="mx-2 px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
        >
          다음
        </button>
      </div>
    </div>
  );
}

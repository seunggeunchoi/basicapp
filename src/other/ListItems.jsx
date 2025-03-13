import "./TodoItem.css";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import axios from "axios";

export default function ListItems({ url, data, setItems }) {
  const [doneList, setDoneList] = useState({});
  const [list, setList] = useState();

  const onClickDeleteButton = async (id) => {
    await axios.delete(`${url}/${id}`);
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };
  const onChangeCheckbox = (id) => {
    setDoneList((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  //일정 그리기
  useEffect(() => {
    if (data.length <= 0) {
      let tm = (
        <div className="TodoItem">
          등록된 일정이 없어요! 일정을 등록해 보세요✨
        </div>
      );
      setList(tm);
      return;
    }
    let tm = data.map((itme) => (
      <div key={itme.id} className="TodoItem">
        <input
          onChange={() => onChangeCheckbox(itme.id)}
          checked={doneList[itme.id] || false} // ✅ 개별 상태 적용
          type="checkbox"
        />
        <div className="content">{itme.content}</div>
        <div className="date">{dayjs(itme.time).format("YYYY-MM-DD")}</div>
        <button onClick={() => onClickDeleteButton(itme.id)}>삭제</button>
      </div>
    ));
    setList(tm);
  }, [data, doneList]);

  return <>{list}</>;
}

import React from "react";
import TailButton from "../UI/TailButton";
import ListItems from "./ListItems";
import "./List.css";
import "./TodoItem.css";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

export default function TodoList() {
  const url = "http://localhost:3005/todoList";
  const todoTxt = useRef("");

  const [items, setItems] = useState([]);

  const getFetchData = async () => {
    const { data } = await axios.get(url);
    setItems([...data]);
  };

  const addTodo = async () => {
    if (todoTxt.current.value === "") {
      alert("일정을 입력해주세요.");
      todoTxt.current.focus();
      return;
    }

    const addData = {
      content: todoTxt.current.value,
      time: new Date(),
    };

    await axios.post(url, addData);
    await getFetchData();
    todoTxt.current.value = "";
  };

  useEffect(() => {
    getFetchData();
  }, []);

  return (
    <div className="List">
      <h4>Todo List 🎈</h4>
      <div>
        <input
          type="text"
          ref={todoTxt}
          placeholder="일정📋"
          className="h-12 border"
        />
        <TailButton
          className="p-2"
          caption="추가"
          bcolor="blue"
          handleClick={addTodo}
        />
      </div>

      <ListItems url={url} data={items} setItems={setItems} />
    </div>
  );
}

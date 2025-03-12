//import logo from "./logo.svg";
import "./App.css";
//import Hello from "./01/Hello";
import MyClock from "./02/MyClock";
//import MyDiv1 from "./03/MyDiv1";
//import MyList from "./04/MyList";
import Lotto from "./05/Lotto";
import Traffic from "./06/Traffic";
//import MyRef from "./07/MyRef";
import MyRefAdd from "./07/MyRefAdd";
import Gallery from "./08/Gallery";
//import RouterHome from "./09/RouterHome";
import RecoilMain from "./10/RecoilMain";
// import Rest from "./11/Rest";
import Rest from "./12/Rest";
import TodoList from "./other/TodoList";

import { RiHomeHeartFill } from "react-icons/ri";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col w-full min-h-screen mx-auto">
        <header className="flex justify-between items-center text-xl font-bold h-20 p-10 bg-slate-50">
          <p>리액트 </p>
          <ul className="flex justify-center items-center text-sm">
            <li className="mx-2 p-2 rounded-md hover:bg-gray-300 hover:text-blue-600">
              <Link to="/">시계</Link>
            </li>
            <li className="mx-2 p-2 rounded-md hover:bg-gray-300 hover:text-blue-600">
              <Link to="/lotto">로또</Link>
            </li>
            <li className="mx-2 p-2 rounded-md hover:bg-gray-300 hover:text-blue-600">
              <Link to="/traffic">교통사고</Link>
            </li>
            <li className="mx-2 p-2 rounded-md hover:bg-gray-300 hover:text-blue-600">
              <Link to="/add">더하기</Link>
            </li>
            <li className="mx-2 p-2 rounded-md hover:bg-gray-300 hover:text-blue-600">
              <Link to="/gallery">관광</Link>
            </li>
            <li className="mx-2 p-2 rounded-md hover:bg-gray-300 hover:text-blue-600">
              <Link to="/recoil">Recoil</Link>
            </li>
            <li className="mx-2 p-2 rounded-md hover:bg-gray-300 hover:text-blue-600">
              <Link to="/rest">Json CRUD</Link>
            </li>
            <li className="mx-2 p-2 rounded-md hover:bg-gray-300 hover:text-blue-600">
              <Link to="/todoList">TODO LIST</Link>
            </li>
          </ul>
          <p>
            <Link to="/">
              <RiHomeHeartFill />
            </Link>
          </p>
        </header>
        <main className="grow w-full flex justify-center items-start overflow-y-auto">
          <Routes>
            <Route path="/" element={<MyClock />} />
            <Route path="/lotto" element={<Lotto />} />
            <Route path="/add" element={<MyRefAdd />} />
            <Route path="/traffic" element={<Traffic />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/recoil" element={<RecoilMain />} />
            <Route path="/rest" element={<Rest />} />
            <Route path="/todoList" element={<TodoList />} />
          </Routes>
        </main>
        <footer className="flex justify-center items-center h-20 bg-black text-slate-100">
          ⓒ Choi Seung Geun
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

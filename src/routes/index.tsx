import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "../components/Posts";
import Todo from "../components/Todo";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/todo" element={<Todo />} />
        <Route path="/post" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;

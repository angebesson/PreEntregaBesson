import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Category, Home, Item } from "../pages";
import { NavBar } from "../components";

export const MainRouter = () => {

   return (
    <BrowserRouter>
      <NavBar />
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/item/:id" element={<Item />} />
        <Route path="/category/:categoryId" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
};
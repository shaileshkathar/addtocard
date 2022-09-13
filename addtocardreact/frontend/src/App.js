import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Headers from "./components/Headers";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cards from "./components/Cards";
import "react-toastify/dist/ReactToastify.css";
import CardDetails from "./components/CardDetails";
import { useEffect, useRef } from "react";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Adminaddproducts from "./components/Adminaddproducts";
import Permmision from "./pages/Permmision";
import { useDispatch } from "react-redux";
import { PageAllDAtaAction } from "./actions/userloginaction";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(PageAllDAtaAction());
  }, []);
  const mainRef = useRef(null);
  return (
    <>
      <BrowserRouter>
        <Headers mainRef={mainRef} />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/cards" element={<Cards mainRef={mainRef} />} />
          <Route path="/carts/:id" element={<CardDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reg" element={<Registration />} />
          <Route path="/admin" element={<Adminaddproducts />} />
          <Route path="/permmsion" element={<Permmision />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

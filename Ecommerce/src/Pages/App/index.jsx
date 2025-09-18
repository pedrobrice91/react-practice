import "./App.css";
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SignIn from "../SignIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from '../../Components/Navbar'

export default function App() {
  return (
    <> 
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/my-order" element={<MyOrder />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

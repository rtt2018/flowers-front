import { Route, Routes, Navigate } from "react-router";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./App.css";

import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Orders from "./pages/Orders/Orders";
import Order from "./pages/Order/Order";
import FloverList from "./components/FloverList/FloverList";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path=":shopName" element={<FloverList />} />
          {/* <Route path="*" element={ }/> */}
        </Route>

        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />}>
          <Route path=":id" element={<Order />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

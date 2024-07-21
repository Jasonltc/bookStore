import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Products from "./components/Shop/Products";
import Cart from "./components/Cart/Cart";

export default function App() {
  const showCart = useSelector((state) => state.ui.cartIsvisible);
  return (
    <>
      <Navbar />
      {showCart && <Cart />}
      <Products />
    </>
  );
}

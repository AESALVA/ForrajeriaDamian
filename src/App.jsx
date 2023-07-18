import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Contact from "./components/Contact";
import About from "./components/About";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPass from "./components/ForgotPass";
import ResetPass from "./components/ResetPass";
import Products from "./components/Products";
import ProductsDetails from "./components/ProductsDetails";
import Cart from "./components/Cart";
import Managment from "./components/Managment";
import Checkout from "./components/Checkout";
import Error from "./components/Error";
import Articles from './components/Articles';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { ArticlesDetails } from "./components/ArticlesDetails";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotPass" element={<ForgotPass />} />
        <Route path="/resetPass" element={<ResetPass />} />
        <Route path="/products" element={<Products />} />
        <Route path="/producto/:id" element={<ProductsDetails />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<ArticlesDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/managment" element={<Managment />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/error" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

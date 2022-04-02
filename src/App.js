import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Global/Footer/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import Shop from "./components/Pages/Shop/Shop";
import Notfound from "./components/Pages/Notfound/Notfound";


function App() {
  return <div className="App">
    <Header></Header>

    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/shop" element={<Shop></Shop>}></Route>
      <Route path="/cart" element={<Home></Home>}></Route>
      <Route path="/my-account" element={<Home></Home>}></Route>
      <Route path="/Contact" element={<Home></Home>}></Route>
      <Route path="*" element={<Notfound></Notfound>}></Route>
    </Routes>
  

  </div>;
}

export default App;

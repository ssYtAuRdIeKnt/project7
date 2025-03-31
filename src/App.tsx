// @ts-nocheck
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import AboutOrder from "./components/AboutOrder";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Layout />
      <AboutOrder />
    </BrowserRouter>
  );
};

export default App;

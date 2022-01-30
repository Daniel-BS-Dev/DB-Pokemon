import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./component/Footer";
import Header from "./component/header";
import Search from "./pages/Search";
import "./App.css";


function App() {
  return (
    <>
      <Header />
      <Search />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;

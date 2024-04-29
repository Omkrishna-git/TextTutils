import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import Footer from "./components/Footer";
import Alert from "./components/Alert";
import About from "./components/Aboutme";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#051921";
      showAlert("Mode has been enable", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#051921";
      document.body.style.color = "white";
      showAlert("Mode has been enable", "success");
    }
  };

  return (
    <>
      <BrowserRouter>
          <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert} />
        <Routes>

          <Route
            path="/"
            element={<TextForm showAlert={showAlert} mode={mode}></TextForm>}
          />
          <Route path="about" element={<About />} />

        </Routes>
          {/* <Footer></Footer> */}
      </BrowserRouter>
    </>
  );
}

export default App;

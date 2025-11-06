import React, { useEffect } from "react";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { GlobalStyle } from "./styles/global";
import { Analytics } from "@vercel/analytics/react";
import { Loader } from "./components/loader/loader";
import { SmoothScroll } from "./components/smoothScroll"; // ✅ Import here
import "react-toastify/dist/ReactToastify.css";
import "./styles/global";
import 'animate.css/animate.min.css';


function App() {
  useEffect(() => {
    document.body.classList.add("dark");
  }, []);

  return (
    <>
      <Loader />
      <GlobalStyle />
      <SmoothScroll /> {/* ✅ Add Lenis here */}
      <Header />
      <Main />
      <Analytics />
      <Footer />
    </>
  );
}

export default App;

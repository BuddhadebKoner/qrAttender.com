import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import QRCard from "./pages/QRCard";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const App = () => {
  return (
    <>
      <header className="z-50 w-full h-fit flex flex-1 justify-between items-center pt-5 px-5 md:px-[5rem] lg:px-[7rem] fixed">
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qr-card" element={<QRCard />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
